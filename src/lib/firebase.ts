import { initializeApp } from 'firebase/app'
import { getFirestore, collection, doc, getDoc, getDocs, setDoc, deleteDoc, onSnapshot, query, orderBy } from 'firebase/firestore'

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEnzk4t5PP94zCaeeeOqTKolJqKyJFlq8",
  authDomain: "digitalsolutionsproj.firebaseapp.com",
  projectId: "digitalsolutionsproj",
  storageBucket: "digitalsolutionsproj.firebasestorage.app",
  messagingSenderId: "950474216438",
  appId: "1:950474216438:web:6bd8addfafa9bfe25f6dd7"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export interface MetaTagData {
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

export const metaTagService = {
  // Get all meta tags
  getAll: async (): Promise<MetaTagData[]> => {
    try {
      const q = query(collection(db, 'metaTags'), orderBy('updatedAt', 'desc'))
      const querySnapshot = await getDocs(q)
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as MetaTagData))
    } catch (error) {
      console.error('Error getting meta tags:', error)
      return []
    }
  },

  // Get meta tag by page path
  getByPath: async (pagePath: string): Promise<MetaTagData | null> => {
    try {
      // Clean the pagePath (ensure it starts with /)
      const cleanPagePath = pagePath.startsWith('/') ? pagePath : `/${pagePath}`
      // Create safe ID for Firestore by removing/replacing slashes
      const safeId = cleanPagePath === '/' ? 'home' : cleanPagePath.replace(/^\//, '').replace(/\//g, '_')
      const docRef = doc(db, 'metaTags', safeId)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data()
        } as MetaTagData
      }
      return null
    } catch (error) {
      console.error('Error getting meta tag by path:', error)
      return null
    }
  },

  // Create or update meta tag
  upsert: async (data: MetaTagData): Promise<MetaTagData> => {
    try {
      // Validate pagePath
      if (!data.pagePath || data.pagePath.trim() === '') {
        throw new Error('Page path is required')
      }

      // Clean the pagePath (ensure it starts with /)
      const cleanPagePath = data.pagePath.startsWith('/') ? data.pagePath : `/${data.pagePath}`
      // Create safe ID for Firestore by removing/replacing slashes
      const safeId = cleanPagePath === '/' ? 'home' : cleanPagePath.replace(/^\//, '').replace(/\//g, '_')
      
      const docRef = doc(db, 'metaTags', safeId)
      const now = new Date()
      const updateData = {
        ...data,
        pagePath: cleanPagePath,
        updatedAt: now,
        createdAt: data.createdAt || now
      }
      
      await setDoc(docRef, updateData, { merge: true })
      return { id: safeId, ...updateData }
    } catch (error) {
      console.error('Error upserting meta tag:', error)
      throw error
    }
  },

  // Delete meta tag
  delete: async (pagePath: string): Promise<void> => {
    try {
      // Clean the pagePath (ensure it starts with /)
      const cleanPagePath = pagePath.startsWith('/') ? pagePath : `/${pagePath}`
      // Create safe ID for Firestore by removing/replacing slashes
      const safeId = cleanPagePath === '/' ? 'home' : cleanPagePath.replace(/^\//, '').replace(/\//g, '_')
      const docRef = doc(db, 'metaTags', safeId)
      await deleteDoc(docRef)
    } catch (error) {
      console.error('Error deleting meta tag:', error)
      throw error
    }
  },

  // Real-time listener for all meta tags
  onMetaTagsChange: (callback: (metaTags: MetaTagData[]) => void) => {
    const q = query(collection(db, 'metaTags'), orderBy('updatedAt', 'desc'))
    return onSnapshot(q, (querySnapshot) => {
      const metaTags = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as MetaTagData))
      callback(metaTags)
    })
  },

  // Real-time listener for specific page
  onMetaTagChange: (pagePath: string, callback: (metaTag: MetaTagData | null) => void) => {
    // Clean the pagePath (ensure it starts with /)
    const cleanPagePath = pagePath.startsWith('/') ? pagePath : `/${pagePath}`
    // Create safe ID for Firestore by removing/replacing slashes
    const safeId = cleanPagePath === '/' ? 'home' : cleanPagePath.replace(/^\//, '').replace(/\//g, '_')
    const docRef = doc(db, 'metaTags', safeId)
    return onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        callback({
          id: docSnap.id,
          ...docSnap.data()
        } as MetaTagData)
      } else {
        callback(null)
      }
    })
  }
}

export { db }