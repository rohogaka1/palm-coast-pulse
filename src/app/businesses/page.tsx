import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Local Business Directory - Palm Coast Pulse',
  description: 'Discover and connect with local businesses in Palm Coast',
}

const categories = [
  {
    name: 'Restaurants & Dining',
    icon: '🍽️',
    slug: 'dining',
    description: 'Discover Palm Coast\'s diverse culinary scene, from waterfront dining to casual eateries.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800'
  },
  {
    name: 'Home & Garden',
    icon: '🏡',
    slug: 'home-garden',
    description: 'Find everything you need for your home and garden in Palm Coast.',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800'
  },
  {
    name: 'Health & Wellness',
    icon: '⚕️',
    slug: 'health',
    description: 'Take care of your health with Palm Coast\'s top medical and wellness providers.',
    image: 'https://images.unsplash.com/photo-1538511059256-0b901d0604a3?w=800'
  },
  {
    name: 'Shopping & Retail',
    icon: '🛍️',
    slug: 'shopping',
    description: 'Explore Palm Coast\'s shopping destinations, from boutiques to major retailers.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800'
  },
  {
    name: 'Professional Services',
    icon: '💼',
    slug: 'services',
    description: 'Find trusted professionals for all your business and personal needs.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800'
  },
  {
    name: 'Entertainment & Recreation',
    icon: '🎭',
    slug: 'entertainment',
    description: 'Discover fun activities, entertainment venues, and recreational facilities.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800'
  }
]

export default function BusinessesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Palm Coast Businesses
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover and connect with local businesses that make Palm Coast unique.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/businesses/category/${category.slug}`}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-[1.02]">
                <div className="relative h-48">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity group-hover:bg-opacity-30" />
                  <div className="absolute top-4 left-4">
                    <span className="text-4xl">{category.icon}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    {category.name}
                  </h2>
                  <p className="text-gray-600">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12 lg:px-16 relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="h-full w-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="small-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#small-grid)" />
              </svg>
            </div>

            <div className="relative lg:flex lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Ready to Grow Your Business?
                </h2>
                <p className="mt-3 text-lg text-primary-50">
                  Join Palm Coast's premier business directory and connect with thousands of local customers.
                </p>
                <ul className="mt-6 space-y-3 text-primary-50">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-primary-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    AI-powered marketing tools
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-primary-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Enhanced local visibility
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-primary-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Customer insights & analytics
                  </li>
                </ul>
              </div>
              <div className="mt-8 lg:mt-0 lg:ml-8 flex flex-col items-center">
                <Link
                  href="/register"
                  className="w-full sm:w-auto btn-primary bg-white !text-primary-600 hover:!bg-primary-50 group"
                >
                  <span>List Your Business</span>
                  <svg
                    className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
                <p className="mt-3 text-sm text-primary-100">
                  Free 30-day trial • No credit card required
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 