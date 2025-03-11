import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// This would typically come from a database
const businessesByCategory = {
  dining: {
    name: 'Restaurants & Dining',
    businesses: [
      {
        id: 'rest1',
        name: 'European Village Restaurant & Wine Bar',
        description: 'Upscale dining featuring Mediterranean cuisine and an extensive wine selection in a charming European-inspired setting.',
        location: 'European Village, Palm Coast',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
        rating: '4.8/5',
        phone: '(386) 555-0123',
        website: 'https://europeanvillagerestaurant.com',
        featured: true
      },
      {
        id: 'rest2',
        name: 'Oceanside Grill',
        description: 'Fresh seafood and coastal cuisine with stunning ocean views.',
        location: 'Hammock Beach, Palm Coast',
        image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800',
        rating: '4.6/5'
      }
    ]
  },
  'home-garden': {
    name: 'Home & Garden',
    businesses: [
      {
        id: 'home1',
        name: 'Palm Coast Garden Center',
        description: 'Premier garden center specializing in Florida-friendly plants, landscaping supplies, and expert advice.',
        location: 'Belle Terre Parkway',
        image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800',
        rating: '4.9/5',
        phone: '(386) 555-0234',
        website: 'https://pcgardencenter.com',
        featured: true
      },
      {
        id: 'home2',
        name: 'Coastal Home Decor',
        description: 'Beach-inspired home furnishings and decor.',
        location: 'Palm Coast Parkway',
        image: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=800',
        rating: '4.5/5'
      }
    ]
  },
  health: {
    name: 'Health & Wellness',
    businesses: [
      {
        id: 'health1',
        name: 'AdventHealth Palm Coast',
        description: 'State-of-the-art medical facility providing comprehensive healthcare services and emergency care.',
        location: 'Palm Coast Parkway',
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800',
        rating: '4.7/5',
        phone: '(386) 555-0345',
        website: 'https://adventhealth.com',
        featured: true
      },
      {
        id: 'health2',
        name: 'Coastal Wellness Center',
        description: 'Holistic health and wellness services.',
        location: 'Old Kings Road',
        image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800',
        rating: '4.8/5'
      }
    ]
  },
  shopping: {
    name: 'Shopping & Retail',
    businesses: [
      {
        id: 'shop1',
        name: 'Palm Coast Town Center',
        description: 'Premier shopping destination featuring major retailers, boutiques, and dining options.',
        location: 'Town Center Boulevard',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
        rating: '4.6/5',
        phone: '(386) 555-0789',
        website: 'https://palmcoasttowncenter.com',
        featured: true
      },
      {
        id: 'shop2',
        name: 'Coastal Boutique',
        description: 'Curated fashion and accessories with a coastal flair.',
        location: 'Palm Harbor Village',
        image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800',
        rating: '4.7/5'
      }
    ]
  },
  services: {
    name: 'Professional Services',
    businesses: [
      {
        id: 'serv1',
        name: 'Palm Coast Business Solutions',
        description: 'Comprehensive business services including accounting, consulting, and marketing.',
        location: 'Palm Coast Parkway',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
        rating: '4.8/5',
        phone: '(386) 555-0901',
        website: 'https://pcbusinesssolutions.com',
        featured: true
      },
      {
        id: 'serv2',
        name: 'Coastal Legal Group',
        description: 'Full-service law firm serving Palm Coast and surrounding areas.',
        location: 'Belle Terre Parkway',
        image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800',
        rating: '4.9/5'
      }
    ]
  },
  entertainment: {
    name: 'Entertainment & Recreation',
    businesses: [
      {
        id: 'ent1',
        name: 'Hammock Beach Golf Resort & Spa',
        description: 'Luxury resort featuring championship golf courses, spa services, and oceanfront dining.',
        location: 'Ocean Hammock',
        image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800',
        rating: '4.8/5',
        phone: '(386) 555-0567',
        website: 'https://hammockbeach.com',
        featured: true
      },
      {
        id: 'ent2',
        name: 'Palm Coast Lanes',
        description: 'Family-friendly bowling center and arcade.',
        location: 'Palm Coast Parkway',
        image: 'https://images.unsplash.com/photo-1538511059256-0b901d0604a3?w=800',
        rating: '4.5/5'
      }
    ]
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const category = businessesByCategory[params.slug as keyof typeof businessesByCategory]
  
  if (!category) {
    return {
      title: 'Category Not Found',
      description: 'The requested business category could not be found.'
    }
  }

  return {
    title: `${category.name} in Palm Coast`,
    description: `Discover ${category.name.toLowerCase()} businesses in Palm Coast, Florida.`
  }
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = businessesByCategory[params.slug as keyof typeof businessesByCategory]
  
  if (!category) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {category.name} in Palm Coast
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the best {category.name.toLowerCase()} businesses in Palm Coast.
          </p>
        </div>

        {/* Featured Businesses */}
        {category.businesses.filter(b => b.featured).map((business) => (
          <Link
            key={business.id}
            href={`/businesses/${business.id}`}
            className="block mb-8 group"
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform group-hover:scale-[1.02]">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <div className="relative h-64 w-full md:w-96">
                    <Image
                      src={business.image}
                      alt={business.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="p-8">
                  <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-semibold text-sm shadow-lg shadow-yellow-400/30 ring-2 ring-yellow-400/50 animate-pulse">
                    <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Featured Business
                  </div>
                  <h2 className="mt-2 text-2xl font-bold text-gray-900">
                    {business.name}
                  </h2>
                  <p className="mt-4 text-gray-600">
                    {business.description}
                  </p>
                  <div className="mt-4 flex items-center space-x-4">
                    <span className="flex items-center text-sm text-gray-500">
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      {business.location}
                    </span>
                    {business.rating && (
                      <span className="flex items-center text-sm text-yellow-600">
                        <i className="fas fa-star mr-2"></i>
                        {business.rating}
                      </span>
                    )}
                  </div>
                  {(business.phone || business.website) && (
                    <div className="mt-6 flex items-center space-x-4">
                      {business.phone && (
                        <span className="text-sm text-gray-500">
                          <i className="fas fa-phone mr-2"></i>
                          {business.phone}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}

        {/* Regular Businesses */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {category.businesses.filter(b => !b.featured).map((business) => (
            <Link
              key={business.id}
              href={`/businesses/${business.id}`}
              className="block group"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform group-hover:scale-[1.02]">
                <div className="relative h-48">
                  <Image
                    src={business.image}
                    alt={business.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {business.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {business.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      {business.location}
                    </span>
                    {business.rating && (
                      <span className="text-sm text-yellow-600">
                        <i className="fas fa-star mr-2"></i>
                        {business.rating}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link
            href="/businesses"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            ← Back to All Categories
          </Link>
        </div>
      </div>
    </div>
  )
} 