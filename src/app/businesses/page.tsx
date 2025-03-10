import { BusinessSearch } from '@/components/ui/BusinessSearch'

export const metadata = {
  title: 'Local Business Directory - Palm Coast Pulse',
  description: 'Support and discover local businesses that make Palm Coast unique',
}

export default function BusinessesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Support Local
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover and support the local businesses that make Palm Coast unique.
            Each business adds to the vibrant tapestry of our community.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12">
          <BusinessSearch />
        </div>

        {/* Categories Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <a
                key={category.name}
                href={`/businesses/category/${category.slug}`}
                className="group block text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-4xl mb-3 block">{category.icon}</span>
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary-600">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {category.description}
                </p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

const categories = [
  {
    name: 'Restaurants & Cafes',
    slug: 'dining',
    icon: '🍽️',
    description: 'Local flavors and cuisine',
  },
  {
    name: 'Home & Garden',
    slug: 'home-services',
    icon: '🏠',
    description: 'Services for your home',
  },
  {
    name: 'Health & Wellness',
    slug: 'healthcare',
    icon: '⚕️',
    description: 'Care for mind and body',
  },
  {
    name: 'Shopping',
    slug: 'retail',
    icon: '🛍️',
    description: 'Local shops and stores',
  },
  {
    name: 'Auto & Transport',
    slug: 'automotive',
    icon: '🚗',
    description: 'Vehicle services',
  },
  {
    name: 'Professional',
    slug: 'professional-services',
    icon: '💼',
    description: 'Business services',
  },
  {
    name: 'Beauty & Spa',
    slug: 'beauty-wellness',
    icon: '💆‍♀️',
    description: 'Look and feel your best',
  },
  {
    name: 'Real Estate',
    slug: 'real-estate',
    icon: '🏘️',
    description: 'Property services',
  },
] 