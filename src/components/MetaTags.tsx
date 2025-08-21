import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

interface MetaTagsProps {
  defaultTitle?: string
  defaultDescription?: string
  defaultKeywords?: string
}

export default function MetaTags({ 
  defaultTitle = 'Digital Solutions Agency - Web Development, Mobile Apps & Digital Marketing',
  defaultDescription = 'Expert digital solutions including web development, mobile applications, digital marketing, and graphic design services.',
  defaultKeywords = 'web development, mobile apps, digital marketing, graphic design, React, Next.js, iOS, Android, SEO'
}: MetaTagsProps) {
  const location = useLocation()
  const [metaData, setMetaData] = useState<any>(null)
  const [firebaseError, setFirebaseError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let unsubscribe: (() => void) | null = null

    const setupFirebaseListener = async () => {
      try {
        setLoading(true)
        console.log('MetaTags: Setting up Firebase listener for path:', location.pathname)
        
        // Try to dynamically import Firebase only if needed
        const { metaTagService } = await import('../lib/firebase')
        
        // Set up real-time listener for meta tag changes
        unsubscribe = metaTagService.onMetaTagChange(location.pathname, (data) => {
          console.log('MetaTags: Received meta data:', data)
          setMetaData(data)
          setFirebaseError(false)
          setLoading(false)
        })
      } catch (error) {
        console.warn('MetaTags: Firebase not available, using default meta tags:', error)
        setFirebaseError(true)
        setLoading(false)
        // If Firebase fails, we'll just use default meta tags
      }
    }

    setupFirebaseListener()

    return () => {
      if (unsubscribe) {
        unsubscribe()
      }
    }
  }, [location.pathname])

  // Use meta data from Firebase if available and no error, otherwise use defaults
  const title = (!firebaseError && metaData?.title) || defaultTitle
  const description = (!firebaseError && metaData?.description) || defaultDescription
  const keywords = (!firebaseError && metaData?.keywords) || defaultKeywords
  const ogTitle = (!firebaseError && metaData?.ogTitle) || title
  const ogDescription = (!firebaseError && metaData?.ogDescription) || description
  const ogImage = (!firebaseError && metaData?.ogImage) || '/default-og-image.jpg'
  const canonicalUrl = (!firebaseError && metaData?.canonicalUrl) || `${window.location.origin}${location.pathname}`
  const robots = (!firebaseError && metaData?.robots) || 'index, follow'

  // Debug logging
  console.log('MetaTags: Rendering with:', {
    path: location.pathname,
    loading,
    firebaseError,
    metaData: metaData ? 'Found' : 'Not found',
    title,
    description
  })

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
      
      {/* Open Graph */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Additional SEO meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="theme-color" content="#000000" />
      
      {/* Debug meta tag for development */}
      {process.env.NODE_ENV === 'development' && (
        <meta name="debug-meta-info" content={`Path: ${location.pathname}, Firebase: ${firebaseError ? 'Error' : metaData ? 'Found' : 'Not found'}`} />
      )}
    </Helmet>
  )
}