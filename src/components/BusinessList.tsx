import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Business } from '@/data/sampleBusinesses'
import { sampleBusinesses } from '@/data/sampleBusinesses'

const BusinessList = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Businesses in Palm Coast</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sampleBusinesses.map((business) => (
          <div key={business.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48">
              {business.logo_url && (
                <Image
                  src={business.logo_url}
                  alt={business.name}
                  fill
                  className="object-cover"
                />
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{business.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{business.description}</p>
              <div className="text-sm text-gray-500 mb-4">
                <p className="mb-1">{business.address}</p>
                <p className="mb-1">{business.category} {business.subcategory && `- ${business.subcategory}`}</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  {business.social_media?.facebook && (
                    <Link href={business.social_media.facebook} target="_blank">
                      <span className="text-blue-600 hover:text-blue-700">
                        <i className="fab fa-facebook"></i>
                      </span>
                    </Link>
                  )}
                  {business.social_media?.instagram && (
                    <Link href={business.social_media.instagram} target="_blank">
                      <span className="text-pink-600 hover:text-pink-700">
                        <i className="fab fa-instagram"></i>
                      </span>
                    </Link>
                  )}
                  {business.social_media?.twitter && (
                    <Link href={business.social_media.twitter} target="_blank">
                      <span className="text-blue-400 hover:text-blue-500">
                        <i className="fab fa-twitter"></i>
                      </span>
                    </Link>
                  )}
                </div>
                <Link
                  href={`/businesses/${business.id}`}
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BusinessList 