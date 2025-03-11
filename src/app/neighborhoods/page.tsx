import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Palm Coast Neighborhoods - Find Your Perfect Area',
  description: 'Explore Palm Coast\'s diverse neighborhoods and find the perfect area for your lifestyle.',
}

export default function NeighborhoodsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Find Your Perfect Neighborhood
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Explore Palm Coast's diverse neighborhoods and find the perfect area that matches your lifestyle, 
            budget, and preferences.
          </p>
        </div>

        {/* Neighborhood Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {neighborhoods.map((neighborhood) => (
            <Link
              key={neighborhood.name}
              href={`/neighborhoods/${neighborhood.slug}`}
              className="group block bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-200 hover:-translate-y-1"
            >
              <div className="relative h-48">
                <Image
                  src={neighborhood.image}
                  alt={neighborhood.name}
                  fill
                  className="object-cover transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {neighborhood.name}
                  </h3>
                  <span className="inline-flex items-center rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary-700">
                    {neighborhood.type}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{neighborhood.description}</p>
                <div className="border-t border-gray-200 pt-4">
                  <dl className="grid grid-cols-2 gap-4">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Price Range</dt>
                      <dd className="text-sm text-gray-900">{neighborhood.priceRange}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Commute</dt>
                      <dd className="text-sm text-gray-900">{neighborhood.commute}</dd>
                    </div>
                  </dl>
                </div>
                <div className="mt-6">
                  <div className="flex space-x-4">
                    {neighborhood.features.map((feature) => (
                      <span
                        key={feature.label}
                        className="inline-flex items-center text-xs text-gray-500"
                      >
                        <i className={`${feature.icon} mr-1`}></i>
                        {feature.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Neighborhood Guide */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Neighborhood Guide</h2>
            <p className="mt-4 text-lg text-gray-600">
              Learn about the different areas of Palm Coast to make an informed decision.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {guideItems.map((item) => (
              <div
                key={item.title}
                className="relative rounded-lg border border-gray-300 bg-white p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.points.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <i className="fas fa-check text-primary-600 mt-1 mr-2"></i>
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Help Finding Your Perfect Neighborhood?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Connect with a local expert who can help you find the perfect area based on your needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md bg-primary-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-700"
          >
            Connect with a Local Expert
          </Link>
        </div>
      </div>
    </div>
  )
}

const neighborhoods = [
  {
    name: 'Grand Haven',
    slug: 'grand-haven',
    type: 'Gated Community',
    description: 'Luxury gated community featuring a Jack Nicklaus golf course, waterfront properties, and resort-style amenities.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop&q=60',
    priceRange: '$400k - $2M+',
    commute: '10-15 min',
    features: [
      { icon: 'fas fa-golf-ball', label: 'Golf Course' },
      { icon: 'fas fa-swimming-pool', label: 'Pool' },
      { icon: 'fas fa-shield-alt', label: 'Gated' }
    ]
  },
  {
    name: 'Pine Lakes',
    slug: 'pine-lakes',
    type: 'Family-Friendly',
    description: 'Established neighborhood with large lots, mature trees, and a strong sense of community.',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&auto=format&fit=crop&q=60',
    priceRange: '$250k - $500k',
    commute: '15-20 min',
    features: [
      { icon: 'fas fa-tree', label: 'Large Lots' },
      { icon: 'fas fa-child', label: 'Family' },
      { icon: 'fas fa-home', label: 'Single Family' }
    ]
  },
  {
    name: 'Palm Harbor',
    slug: 'palm-harbor',
    type: 'Waterfront',
    description: 'Beautiful waterfront community with a mix of luxury homes and condos, close to shopping and dining.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=60',
    priceRange: '$300k - $1.5M',
    commute: '5-10 min',
    features: [
      { icon: 'fas fa-water', label: 'Waterfront' },
      { icon: 'fas fa-shopping-bag', label: 'Shopping' },
      { icon: 'fas fa-utensils', label: 'Dining' }
    ]
  },
  {
    name: 'Belle Terre',
    slug: 'belle-terre',
    type: 'Suburban',
    description: 'Popular suburban area with excellent schools and parks, perfect for families.',
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&auto=format&fit=crop&q=60',
    priceRange: '$200k - $400k',
    commute: '10-15 min',
    features: [
      { icon: 'fas fa-graduation-cap', label: 'Schools' },
      { icon: 'fas fa-tree', label: 'Parks' },
      { icon: 'fas fa-home', label: 'Affordable' }
    ]
  },
  {
    name: 'European Village',
    slug: 'european-village',
    type: 'Urban Living',
    description: 'Mixed-use community with condos, shops, and restaurants in a European-inspired setting.',
    image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&auto=format&fit=crop&q=60',
    priceRange: '$150k - $400k',
    commute: '5-10 min',
    features: [
      { icon: 'fas fa-store', label: 'Shopping' },
      { icon: 'fas fa-glass-cheers', label: 'Nightlife' },
      { icon: 'fas fa-building', label: 'Condos' }
    ]
  },
  {
    name: 'Hammock Beach',
    slug: 'hammock-beach',
    type: 'Luxury Resort',
    description: 'Exclusive oceanfront community with world-class golf, spa, and resort amenities.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=60',
    priceRange: '$500k - $3M+',
    commute: '20-25 min',
    features: [
      { icon: 'fas fa-umbrella-beach', label: 'Beach' },
      { icon: 'fas fa-golf-ball', label: 'Golf' },
      { icon: 'fas fa-spa', label: 'Resort' }
    ]
  }
]

const guideItems = [
  {
    title: 'Choosing the Right Area',
    description: 'Consider these key factors when selecting your neighborhood:',
    points: [
      'Proximity to work and schools',
      'Local amenities and services',
      'Community atmosphere and lifestyle',
      'Future development plans',
      'Property value trends'
    ]
  },
  {
    title: 'Popular Areas for Families',
    description: 'Top neighborhoods for families with children:',
    points: [
      'Belle Terre - Great schools and parks',
      'Pine Lakes - Spacious lots and quiet streets',
      'Grand Haven - Safe and amenity-rich',
      'Palm Harbor - Close to activities and shopping'
    ]
  },
  {
    title: 'Luxury Living Options',
    description: 'Premium communities with upscale amenities:',
    points: [
      'Hammock Beach - Oceanfront resort living',
      'Grand Haven - Golf course community',
      'Palm Harbor - Waterfront estates',
      'European Village - Urban luxury condos'
    ]
  },
  {
    title: 'Investment Potential',
    description: 'Areas with strong growth potential:',
    points: [
      'Town Center - Developing commercial district',
      'European Village - Mixed-use development',
      'Palm Harbor - Waterfront appreciation',
      'Belle Terre - Growing suburban area'
    ]
  }
] 