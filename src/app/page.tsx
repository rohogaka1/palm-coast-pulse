import Image from 'next/image'
import Link from 'next/link'

const categories = [
  {
    name: "Housing Guide",
    icon: "fas fa-home",
    description: "Find your perfect home with comprehensive neighborhood guides and market insights.",
    href: "/housing"
  },
  {
    name: "Schools & Education",
    icon: "fas fa-graduation-cap",
    description: "Explore top-rated schools, colleges, and educational opportunities.",
    href: "/schools"
  },
  {
    name: "Lifestyle & Recreation",
    icon: "fas fa-umbrella-beach",
    description: "Discover parks, beaches, golf courses, and entertainment options.",
    href: "/lifestyle"
  },
  {
    name: "Employment",
    icon: "fas fa-briefcase",
    description: "Browse job opportunities and learn about the local economy.",
    href: "/employment"
  },
  {
    name: "Healthcare",
    icon: "fas fa-hospital",
    description: "Access information about medical facilities and healthcare providers.",
    href: "/healthcare"
  },
  {
    name: "Moving Resources",
    icon: "fas fa-truck-moving",
    description: "Get checklists, tips, and connect with moving services.",
    href: "/moving-guide"
  }
]

const quickFacts = [
  {
    title: "Perfect Climate",
    icon: "fas fa-sun",
    description: "Enjoy year-round sunshine with average temperatures between 60-80°F"
  },
  {
    title: "Growing Community",
    icon: "fas fa-chart-line",
    description: "One of Florida's fastest-growing cities with excellent amenities"
  },
  {
    title: "Affordable Living",
    icon: "fas fa-home",
    description: "Housing costs 15% below the national average"
  },
  {
    title: "Quality of Life",
    icon: "fas fa-heart",
    description: "Top-rated schools, low crime rates, and abundant recreation"
  }
]

// Add featured business stories data
const featuredStories = [
  {
    id: '1',
    title: "Joe's Diner: 25 Years of Palm Coast Comfort Food",
    businessOwner: "Joe Smith",
    businessName: "Joe's Diner",
    youtubeId: "dQw4w9WgXcQ",
    description: "Joe Smith shares his journey of building Palm Coast's favorite diner and creating a community gathering spot.",
    date: "2024-02-15",
    tags: ["Restaurant", "Local Business", "Community"]
  },
  {
    id: '2',
    title: "European Village: The Heart of Palm Coast",
    businessOwner: "Maria Rodriguez",
    businessName: "European Village Management",
    youtubeId: "jNQXAC9IVRw",
    description: "Discover the story behind Palm Coast's unique European-style shopping and dining destination.",
    date: "2024-02-10",
    tags: ["Shopping", "Entertainment", "Tourism"]
  }
]

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="relative -mt-8">
        <div className="absolute inset-0 h-[600px] rounded-xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1505144808419-1957a94ca61e?w=2000&auto=format&fit=crop&q=80"
            alt="Palm Coast Waterfront"
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
                Your New Life in Palm Coast Begins Here
              </h1>
              <p className="mt-6 text-lg text-white">
                Discover why Palm Coast is the perfect place to call home. From pristine beaches to world-class amenities, 
                find everything you need to know about moving to Florida's hidden gem.
              </p>
              <div className="mt-8 flex gap-x-4">
                <Link
                  href="/moving-guide"
                  className="inline-block rounded-lg bg-white px-4 py-1.5 text-base font-semibold leading-7 text-primary-700 shadow-sm ring-1 ring-primary-700 hover:bg-primary-50 hover:text-primary-700"
                >
                  Moving Guide
                  <span className="text-primary-400 ml-2" aria-hidden="true">
                    →
                  </span>
                </Link>
                <Link
                  href="/neighborhoods"
                  className="inline-block rounded-lg bg-primary-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-primary-700"
                >
                  Explore Neighborhoods
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Palm Coast?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickFacts.map((fact) => (
              <div key={fact.title} className="text-center">
                <div className="bg-primary-50 rounded-lg p-6 inline-block mb-4">
                  <i className={`${fact.icon} text-3xl text-primary-600`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">{fact.title}</h3>
                <p className="text-gray-600">{fact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Everything You Need to Know</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="group block text-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                <span className="inline-block p-4 bg-primary-50 rounded-lg mb-4">
                  <i className={`${category.icon} text-3xl text-primary-600`}></i>
                </span>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600">
                  {category.name}
                </h3>
                <p className="text-gray-600">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Business Stories Preview Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Local Business Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet the entrepreneurs shaping Palm Coast's business community and discover 
              the opportunities our city offers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {featuredStories.map((story) => (
              <div
                key={story.id}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={`https://img.youtube.com/vi/${story.youtubeId}/hqdefault.jpg`}
                    alt={story.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <svg className="w-10 h-10 text-red-600 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-sm font-medium text-gray-900 px-3 py-1 rounded-full">
                      {new Date(story.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                </div>
                
                <div className="flex-1 p-6 flex flex-col">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {story.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
                      {story.title}
                    </h3>
                    
                    <p className="text-sm font-medium text-primary-600 mb-3">
                      {story.businessOwner} • {story.businessName}
                    </p>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed">
                      {story.description}
                    </p>
                  </div>
                  
                  <Link
                    href={`https://youtube.com/watch?v=${story.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold group/link"
                  >
                    Watch Story
                    <svg
                      className="ml-2 w-5 h-5 transform group-hover/link:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/business-stories"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-xl text-lg font-semibold hover:bg-primary-700 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              View All Business Stories
              <svg
                className="ml-2 w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate mt-16 overflow-hidden bg-gradient-to-br from-primary-600 to-primary-700 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 mx-4 sm:mx-8">
        <div className="absolute inset-0 -z-10 opacity-20">
          <svg
            className="h-full w-full"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="grid"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Start Your Palm Coast Journey Today
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-center text-lg leading-8 text-primary-50">
            Get your free personalized moving guide and connect with local experts who can help make your transition seamless.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/moving-checklist"
              className="w-full sm:w-auto btn-secondary group"
            >
              <span>Get Free Moving Guide</span>
              <svg
                className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto btn-primary bg-white !text-primary-600 hover:!bg-primary-50 group"
            >
              <span>Talk to an Expert</span>
              <svg
                className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 