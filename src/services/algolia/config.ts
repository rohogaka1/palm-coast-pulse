import algoliasearch from 'algoliasearch'

const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID
const searchKey = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY
const adminKey = process.env.ALGOLIA_ADMIN_KEY

// Initialize mock clients for development when env vars are not set
const mockClient = {
  initIndex: () => ({
    setSettings: async () => ({}),
    search: async () => ({ hits: [] }),
  }),
  addObject: async () => ({}),
  search: async () => ({ hits: [] }),
}

// Initialize the search client for frontend use
export const searchClient = appId && searchKey 
  ? algoliasearch(appId, searchKey)
  : mockClient

// Initialize the admin client for backend operations
export const adminClient = appId && adminKey 
  ? algoliasearch(appId, adminKey)
  : mockClient

// Index names
export const INDICES = {
  BUSINESSES: 'businesses',
  CATEGORIES: 'categories',
} as const

export interface BusinessSearchObject {
  objectID: string
  name: string
  description: string
  category: string
  subcategory?: string
  address: string
  featured: boolean
  _geoloc?: {
    lat: number
    lng: number
  }
  _tags: string[]
}

export const initializeAlgoliaIndex = async () => {
  const businessIndex = adminClient.initIndex(INDICES.BUSINESSES)
  
  if (appId && adminKey) {
    // Configure the business index settings
    await businessIndex.setSettings({
      searchableAttributes: [
        'name',
        'description',
        'category',
        'subcategory',
        'address'
      ],
      attributesForFaceting: [
        'category',
        'subcategory',
        'featured',
        '_tags'
      ],
      ranking: [
        'desc(featured)',
        'typo',
        'geo',
        'words',
        'filters',
        'proximity',
        'attribute',
        'exact',
        'custom'
      ]
    })
  }

  return businessIndex
} 