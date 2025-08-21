import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Save, Plus, Trash2, Edit, X, WifiOff } from 'lucide-react'

interface MetaTagData {
  id?: string
  pagePath: string
  title?: string
  description?: string
  keywords?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  canonicalUrl?: string
  robots?: string
  createdAt?: Date
  updatedAt?: Date
}

export default function SEODashboard() {
  const [metaTags, setMetaTags] = useState<MetaTagData[]>([])
  const [loading, setLoading] = useState(true)
  const [editingTag, setEditingTag] = useState<MetaTagData | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [firebaseError, setFirebaseError] = useState(false)
  const [formData, setFormData] = useState({
    pagePath: '',
    title: '',
    description: '',
    keywords: '',
    ogTitle: '',
    ogDescription: '',
    ogImage: '',
    canonicalUrl: '',
    robots: 'index, follow'
  })

  useEffect(() => {
    let unsubscribe: (() => void) | null = null

    const setupFirebaseListener = async () => {
      try {
        // Try to dynamically import Firebase
        const { metaTagService } = await import('../lib/firebase')
        
        // Load initial data
        const data = await metaTagService.getAll()
        setMetaTags(data)
        setLoading(false)
        
        // Set up real-time listener
        unsubscribe = metaTagService.onMetaTagsChange((updatedMetaTags) => {
          setMetaTags(updatedMetaTags)
          setLoading(false)
          setFirebaseError(false)
        })
      } catch (error) {
        console.warn('Firebase not available for SEO Dashboard:', error)
        setFirebaseError(true)
        setLoading(false)
      }
    }

    setupFirebaseListener()

    return () => {
      if (unsubscribe) {
        unsubscribe()
      }
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form data
    if (!formData.pagePath || formData.pagePath.trim() === '') {
      alert('Please select a page path')
      return
    }
    
    try {
      const { metaTagService } = await import('../lib/firebase')
      await metaTagService.upsert(formData)
      // Real-time update will handle the UI update
      setShowForm(false)
      setEditingTag(null)
      resetForm()
    } catch (error) {
      console.error('Failed to save meta tag:', error)
      alert(`Failed to save meta tag: ${error instanceof Error ? error.message : 'Please check your Firebase connection.'}`)
    }
  }

  const handleEdit = (tag: MetaTagData) => {
    setEditingTag(tag)
    setFormData({
      pagePath: tag.pagePath,
      title: tag.title || '',
      description: tag.description || '',
      keywords: tag.keywords || '',
      ogTitle: tag.ogTitle || '',
      ogDescription: tag.ogDescription || '',
      ogImage: tag.ogImage || '',
      canonicalUrl: tag.canonicalUrl || '',
      robots: tag.robots || 'index, follow'
    })
    setShowForm(true)
  }

  const handleDelete = async (pagePath: string) => {
    if (confirm('Are you sure you want to delete this meta tag?')) {
      try {
        const { metaTagService } = await import('../lib/firebase')
        await metaTagService.delete(pagePath)
        // Real-time update will handle the UI update
      } catch (error) {
        console.error('Failed to delete meta tag:', error)
        alert('Failed to delete meta tag. Please check your Firebase connection.')
      }
    }
  }

  const resetForm = () => {
    setFormData({
      pagePath: '',
      title: '',
      description: '',
      keywords: '',
      ogTitle: '',
      ogDescription: '',
      ogImage: '',
      canonicalUrl: '',
      robots: 'index, follow'
    })
  }

  const pages = [
    { path: '/', name: 'Home' },
    { path: '/services', name: 'Services' },
    { path: '/projects', name: 'Projects' },
    { path: '/about', name: 'About' },
    { path: '/contact', name: 'Contact' }
  ]

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  if (firebaseError) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-900/20 border border-red-700/50 rounded-xl p-6 text-center">
            <div className="flex justify-center mb-4">
              <WifiOff className="w-12 h-12 text-red-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Firebase Connection Error</h2>
            <p className="text-gray-300 mb-4">
              Unable to connect to Firebase. Please check your Firebase configuration and internet connection.
            </p>
            <div className="bg-gray-800/50 rounded-lg p-4 text-left text-sm text-gray-400 mb-4">
              <p className="mb-2"><strong>Troubleshooting steps:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Check your Firebase project configuration</li>
                <li>Ensure Firestore Database is enabled</li>
                <li>Verify your internet connection</li>
                <li>Check Firebase security rules</li>
              </ul>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Retry Connection
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-2">SEO Dashboard</h1>
          <p className="text-gray-300">Manage meta tags and SEO settings for your website pages</p>
        </motion.div>

        {/* Add New Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <button
            onClick={() => {
              setShowForm(true)
              setEditingTag(null)
              resetForm()
            }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add New Meta Tag
          </button>
        </motion.div>

        {/* Form Modal */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-gray-800 rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">
                  {editingTag ? 'Edit Meta Tag' : 'Add New Meta Tag'}
                </h2>
                <button
                  onClick={() => {
                    setShowForm(false)
                    setEditingTag(null)
                  }}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Page Path *
                  </label>
                  <select
                    value={formData.pagePath}
                    onChange={(e) => setFormData({ ...formData, pagePath: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select a page</option>
                    {pages.map((page) => (
                      <option key={page.path} value={page.path}>
                        {page.name} ({page.path})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Meta Title
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter meta title (60 characters recommended)"
                    maxLength={60}
                  />
                  <div className="text-xs text-gray-400 mt-1">
                    {formData.title.length}/60 characters
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Meta Description
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    rows={3}
                    placeholder="Enter meta description (160 characters recommended)"
                    maxLength={160}
                  />
                  <div className="text-xs text-gray-400 mt-1">
                    {formData.description.length}/160 characters
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Keywords
                  </label>
                  <input
                    type="text"
                    value={formData.keywords}
                    onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter keywords separated by commas"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    OG Title (Social Media)
                  </label>
                  <input
                    type="text"
                    value={formData.ogTitle}
                    onChange={(e) => setFormData({ ...formData, ogTitle: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter social media title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    OG Description (Social Media)
                  </label>
                  <textarea
                    value={formData.ogDescription}
                    onChange={(e) => setFormData({ ...formData, ogDescription: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    rows={2}
                    placeholder="Enter social media description"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    OG Image URL
                  </label>
                  <input
                    type="url"
                    value={formData.ogImage}
                    onChange={(e) => setFormData({ ...formData, ogImage: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter social media image URL"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Canonical URL
                  </label>
                  <input
                    type="url"
                    value={formData.canonicalUrl}
                    onChange={(e) => setFormData({ ...formData, canonicalUrl: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter canonical URL"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Robots Meta Tag
                  </label>
                  <select
                    value={formData.robots}
                    onChange={(e) => setFormData({ ...formData, robots: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="index, follow">Index, Follow</option>
                    <option value="index, nofollow">Index, Nofollow</option>
                    <option value="noindex, follow">Noindex, Follow</option>
                    <option value="noindex, nofollow">Noindex, Nofollow</option>
                  </select>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Save className="w-5 h-5" />
                    Save Meta Tag
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowForm(false)
                      setEditingTag(null)
                    }}
                    className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}

        {/* Meta Tags List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid gap-6"
        >
          {metaTags.map((tag) => (
            <motion.div
              key={tag.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {tag.pagePath}
                  </h3>
                  <p className="text-sm text-gray-400">
                    Last updated: {tag.updatedAt ? new Date(tag.updatedAt).toLocaleDateString() : 'Unknown'}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(tag)}
                    className="p-2 text-blue-400 hover:text-blue-300 hover:bg-blue-400/10 rounded-lg transition-all duration-200"
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(tag.pagePath)}
                    className="p-2 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-lg transition-all duration-200"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-gray-400 mb-1">Title</div>
                  <div className="text-white">{tag.title || 'Not set'}</div>
                </div>
                <div>
                  <div className="text-gray-400 mb-1">Description</div>
                  <div className="text-white">{tag.description || 'Not set'}</div>
                </div>
                <div>
                  <div className="text-gray-400 mb-1">Keywords</div>
                  <div className="text-white">{tag.keywords || 'Not set'}</div>
                </div>
                <div>
                  <div className="text-gray-400 mb-1">Robots</div>
                  <div className="text-white">{tag.robots || 'index, follow'}</div>
                </div>
              </div>
            </motion.div>
          ))}

          {metaTags.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <div className="text-gray-400 text-lg mb-4">No meta tags found</div>
              <button
                onClick={() => setShowForm(true)}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Create your first meta tag
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}