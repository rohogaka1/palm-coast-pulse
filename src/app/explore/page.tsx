'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface Attraction {
  id: string
  name: string
  description: string
  address: string
  image: string
  category: string
  website?: string
  phone?: string
  rating?: number
  features?: string[]
}

const attractions: Record<string, Attraction[]> = {
  schools: [
    {
      id: 'fpc-1',
      name: 'Flagler Palm Coast High School',
      description: 'Public high school serving grades 9-12 with comprehensive academic programs, athletics, and extracurricular activities.',
      address: '5500 E Moody Blvd, Palm Coast, FL 32164',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
      category: 'Public School',
      phone: '(386) 437-7540',
      website: 'https://fpc.flaglerschools.com',
      features: ['Advanced Placement', 'Athletics', 'Arts Programs', 'Career Technical Education']
    },
    {
      id: 'mhs-1',
      name: 'Matanzas High School',
      description: 'Public high school offering diverse academic programs and extracurricular activities in a modern facility.',
      address: '3535 Pirate Nation Way, Palm Coast, FL 32137',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800',
      category: 'Public School',
      phone: '(386) 447-1575',
      website: 'https://mhs.flaglerschools.com',
      features: ['IB Program', 'STEM Focus', 'Athletics', 'Performing Arts']
    }
  ],
  churches: [
    {
      id: 'soe-1',
      name: 'St. Elizabeth Ann Seton Catholic Church',
      description: 'Catholic church offering regular masses, religious education, and community outreach programs.',
      address: '4600 Belle Terre Pkwy, Palm Coast, FL 32164',
      image: 'https://images.unsplash.com/photo-1438032005730-c779502df39b?w=800',
      category: 'Catholic Church',
      phone: '(386) 445-2246',
      website: 'https://seaspc.org',
      features: ['Daily Mass', 'Religious Education', 'Youth Ministry', 'Community Events']
    },
    {
      id: 'pc-1',
      name: 'Palm Coast United Methodist Church',
      description: 'Methodist church providing worship services, bible studies, and community programs.',
      address: '5200 Belle Terre Pkwy, Palm Coast, FL 32137',
      image: 'https://images.unsplash.com/photo-1514896856000-91cb6de818e0?w=800',
      category: 'Methodist Church',
      phone: '(386) 445-1600',
      features: ['Sunday Services', 'Bible Study', 'Youth Programs', 'Community Outreach']
    }
  ],
  golf: [
    {
      id: 'pcc-1',
      name: 'Palm Harbor Golf Club',
      description: 'Public 18-hole championship golf course featuring beautiful views and challenging play.',
      address: '20 Palm Harbor Dr, Palm Coast, FL 32137',
      image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800',
      category: 'Golf Course',
      phone: '(386) 986-GOLF',
      website: 'https://palmharborgolfclub.com',
      features: ['18 Holes', 'Pro Shop', 'Practice Facility', 'Restaurant']
    },
    {
      id: 'hb-1',
      name: 'Hammock Beach Golf Resort',
      description: 'Luxury resort featuring two championship golf courses designed by Jack Nicklaus and Tom Watson.',
      address: '200 Ocean Crest Dr, Palm Coast, FL 32137',
      image: 'https://images.unsplash.com/photo-1600478862065-2437b02f3b77?w=800',
      category: 'Resort Golf',
      phone: '(386) 246-5500',
      website: 'https://hammockbeach.com',
      features: ['Ocean Course', 'Conservatory Course', 'Golf Academy', 'Pro Shop']
    }
  ],
  activities: [
    {
      id: 'wp-1',
      name: 'Waterfront Park',
      description: 'Beautiful park along the Intracoastal Waterway with fishing pier, playground, and walking trails.',
      address: '150 Waterfront Park Rd, Palm Coast, FL 32137',
      image: 'https://images.unsplash.com/photo-1575783970733-1aaedde1db74?w=800',
      category: 'Park',
      features: ['Fishing Pier', 'Playground', 'Walking Trails', 'Picnic Areas']
    },
    {
      id: 'lp-1',
      name: 'Linear Park',
      description: 'Long park featuring walking/biking trails through natural Florida landscapes.',
      address: 'Palm Coast, FL 32137',
      image: 'https://images.unsplash.com/photo-1623345805780-8f01f714e65f?w=800',
      category: 'Park',
      features: ['Walking Trails', 'Biking Trails', 'Nature Views', 'Exercise Stations']
    },
    {
      id: 'beach-1',
      name: 'Flagler Beach',
      description: 'Historic beach town offering surfing, fishing, and beautiful Atlantic Ocean views.',
      address: 'Flagler Beach, FL 32136',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
      category: 'Beach',
      features: ['Surfing', 'Fishing', 'Restaurants', 'Pier']
    }
  ]
}

const categories = [
  { id: 'schools', name: 'Schools', icon: 'fa-graduation-cap' },
  { id: 'churches', name: 'Churches', icon: 'fa-church' },
  { id: 'golf', name: 'Golf Courses', icon: 'fa-golf-ball' },
  { id: 'activities', name: 'Activities', icon: 'fa-umbrella-beach' }
]

function AttractionCard({ attraction }: { attraction: Attraction }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="relative h-48">
        <Image
          src={attraction.image}
          alt={attraction.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{attraction.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{attraction.description}</p>
        
        <div className="text-sm text-gray-500 mb-4">
          <div className="flex items-center mb-2">
            <i className="fas fa-map-marker-alt w-5" />
            <span>{attraction.address}</span>
          </div>
          {attraction.phone && (
            <div className="flex items-center mb-2">
              <i className="fas fa-phone w-5" />
              <span>{attraction.phone}</span>
            </div>
          )}
        </div>

        {attraction.features && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {attraction.features.map((feature) => (
                <span
                  key={feature}
                  className="inline-flex items-center rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary-700"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-between items-center">
          <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
            {attraction.category}
          </span>
          {attraction.website && (
            <a
              href={attraction.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 text-sm font-medium"
            >
              Visit Website →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Palm Coast
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the best of what Palm Coast has to offer, from education and recreation
            to spiritual life and outdoor activities.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`#${category.id}`}
              className="group relative flex items-center justify-center rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-900/5 transition-all hover:shadow-md hover:ring-primary-500/50"
            >
              <div className="text-center">
                <i className={`fas ${category.icon} mb-3 text-2xl text-primary-600`} />
                <h3 className="text-sm font-medium text-gray-900">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Attractions by Category */}
        <div className="space-y-16">
          {categories.map((category) => (
            <section key={category.id} id={category.id}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {category.name}
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {attractions[category.id].map((attraction) => (
                  <AttractionCard key={attraction.id} attraction={attraction} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
} 