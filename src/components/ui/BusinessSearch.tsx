'use client'

import { useState } from 'react'
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom'
import { searchClient } from '@/services/algolia/config'
import BusinessCard from '@/components/BusinessCard'
import type { BusinessSearchObject } from '@/services/algolia/config'
import type { Business } from '@/services/supabase/config'

export function BusinessSearch() {
  const [query, setQuery] = useState('')

  // Mock data for development when Algolia is not configured
  const mockBusinesses = [
    {
      id: '1',
      name: 'Sample Business 1',
      description: 'A sample business for development',
      category: 'Restaurant',
      address: '123 Palm Coast Pkwy',
      logo_url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&auto=format&fit=crop&q=60',
      social_media: {
        facebook: 'https://facebook.com/sample1',
        instagram: 'https://instagram.com/sample1'
      }
    },
    {
      id: '2',
      name: 'Sample Business 2',
      description: 'Another sample business for development',
      category: 'Retail',
      address: '456 Palm Harbor Pkwy',
      logo_url: 'https://images.unsplash.com/photo-1573108724029-4c46571d6490?w=800&auto=format&fit=crop&q=60',
      social_media: {
        facebook: 'https://facebook.com/sample2',
        twitter: 'https://twitter.com/sample2'
      }
    },
  ]

  if (!process.env.NEXT_PUBLIC_ALGOLIA_APP_ID) {
    return (
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <input
            type="search"
            placeholder="Search businesses..."
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockBusinesses
            .filter(business => 
              business.name.toLowerCase().includes(query.toLowerCase()) ||
              business.description.toLowerCase().includes(query.toLowerCase()) ||
              business.category.toLowerCase().includes(query.toLowerCase())
            )
            .map(business => (
              <BusinessCard key={business.id} business={business} />
            ))
          }
        </div>
      </div>
    )
  }

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName="businesses"
    >
      <div className="max-w-4xl mx-auto px-4">
        <SearchBox
          translations={{
            placeholder: 'Search businesses...',
          }}
          submit={<></>}
          reset={<></>}
          className="mb-8"
          onSubmit={() => {}}
          onReset={() => {}}
          onChange={(e) => setQuery(e.currentTarget.value)}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Hits
            hitComponent={({ hit }: { hit: BusinessSearchObject }) => (
              <BusinessCard
                business={{
                  id: hit.objectID,
                  name: hit.name,
                  description: hit.description,
                  category: hit.category,
                  subcategory: hit.subcategory,
                  address: hit.address,
                  logo_url: hit._geoloc ? 'https://images.unsplash.com/photo-1573108724029-4c46571d6490?w=800&auto=format&fit=crop&q=60' : 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&auto=format&fit=crop&q=60'
                }}
              />
            )}
          />
        </div>
      </div>
    </InstantSearch>
  )
} 