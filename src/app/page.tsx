import Image from 'next/image'
import BusinessCard from '@/components/BusinessCard'
import { sampleBusinesses } from '@/data/sampleBusinesses'

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="relative -mt-8">
        <div className="absolute inset-0 h-[600px] rounded-xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1505144808419-1957a94ca61e?w=2000&auto=format&fit=crop&q=80"
            alt="Palm Tree on Beach"
            fill
            priority
            className="object-cover brightness-[0.65]"
            sizes="100vw"
          />
        </div>
        <div className="container-custom relative">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 min-h-[600px] flex items-center">
            <div className="md:max-w-2xl lg:col-span-6 lg:text-left py-16 sm:py-24">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Experience Palm Coast
              </h1>
              <p className="mt-6 text-lg text-white">
                Discover the perfect blend of natural beauty, vibrant community life, and thriving businesses. 
                From pristine beaches to world-class golf courses, feel the pulse of Florida's hidden gem.
              </p>
              <div className="mt-8 flex gap-x-4">
                <a
                  href="/explore"
                  className="inline-block rounded-lg bg-white px-4 py-1.5 text-base font-semibold leading-7 text-primary-700 shadow-sm ring-1 ring-primary-700 hover:bg-primary-50 hover:text-primary-700"
                >
                  Explore Palm Coast
                  <span className="text-primary-400" aria-hidden="true">
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900">Discover Palm Coast</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {categories.map((category) => (
            <a
              key={category.name}
              href={category.href}
              className="group relative flex items-center justify-center rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-900/5 transition-all hover:shadow-md hover:ring-primary-500/50"
            >
              <div className="text-center">
                <i className={`${category.icon} mb-3 text-2xl text-primary-600`} />
                <h3 className="text-sm font-medium text-gray-900">{category.name}</h3>
                <p className="mt-1 text-xs text-gray-500">{category.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Featured Businesses Section */}
      <section>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Local Highlights</h2>
          <a
            href="/businesses"
            className="text-sm font-medium text-primary-600 hover:text-primary-700"
          >
            View all
            <span aria-hidden="true"> →</span>
          </a>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sampleBusinesses.map((business) => (
            <BusinessCard key={business.id} business={business} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate mt-16 overflow-hidden bg-primary-600 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24">
        <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Be Part of Our Community
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-lg leading-8 text-primary-100">
          Whether you're a resident, business owner, or visitor, join us in celebrating and growing our vibrant Palm Coast community.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/register"
            className="rounded-md bg-white px-6 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-primary-50"
          >
            List Your Business
          </a>
          <a
            href="/explore"
            className="rounded-md bg-primary-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-400"
          >
            Explore the City
          </a>
        </div>
      </section>
    </div>
  )
}

const categories = [
  { 
    name: 'Recreation', 
    icon: 'fas fa-umbrella-beach', 
    description: 'Parks & Beaches',
    href: '/explore?category=recreation' 
  },
  { 
    name: 'Dining', 
    icon: 'fas fa-utensils', 
    description: 'Local Flavors',
    href: '/explore?category=dining' 
  },
  { 
    name: 'Activities', 
    icon: 'fas fa-golf-ball', 
    description: 'Sports & Fun',
    href: '/explore?category=activities' 
  },
  { 
    name: 'Culture', 
    icon: 'fas fa-theater-masks', 
    description: 'Arts & Events',
    href: '/explore?category=culture' 
  },
  { 
    name: 'Nature', 
    icon: 'fas fa-leaf', 
    description: 'Trails & Parks',
    href: '/explore?category=nature' 
  },
  { 
    name: 'Shopping', 
    icon: 'fas fa-shopping-bag', 
    description: 'Retail & Markets',
    href: '/explore?category=shopping' 
  },
  { 
    name: 'Community', 
    icon: 'fas fa-users', 
    description: 'Local Events',
    href: '/explore?category=community' 
  },
  { 
    name: 'Services', 
    icon: 'fas fa-concierge-bell', 
    description: 'Local Business',
    href: '/explore?category=services' 
  },
] 