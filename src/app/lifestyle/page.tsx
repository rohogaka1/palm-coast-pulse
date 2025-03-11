import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Palm Coast Lifestyle Guide',
  description: 'Discover the vibrant lifestyle, recreation options, dining scene, and entertainment in Palm Coast.',
}

const articles = [
  {
    title: "Palm Coast's Best Dining Experiences",
    slug: "dining-guide",
    author: "Rachel Martinez",
    date: "2024-02-15",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
    preview: "From waterfront restaurants to hidden local gems, explore Palm Coast's diverse culinary scene.",
    content: `
      Discover the best dining experiences Palm Coast has to offer:

      Waterfront Dining

      1. European Village
      - Multiple restaurants
      - Waterfront views
      - Live entertainment
      - International cuisine
      - Outdoor seating

      2. Hammock Beach
      - Fine dining options
      - Ocean views
      - Resort atmosphere
      - Fresh seafood
      - Wine selection

      Local Favorites

      1. Casual Dining
      - Family restaurants
      - Sports bars
      - Cafes
      - Delis
      - Food trucks

      2. International Cuisine
      - Italian restaurants
      - Asian fusion
      - Mexican cuisine
      - Mediterranean
      - Caribbean flavors

      Hidden Gems

      1. Neighborhood Spots
      - Local cafes
      - Family-owned
      - Unique menus
      - Personal service
      - Local ingredients

      2. Food Markets
      - Farmers markets
      - Specialty shops
      - Local produce
      - Artisanal goods
      - Fresh seafood

      Explore these dining destinations to experience the best of Palm Coast's culinary scene.
    `
  },
  {
    title: "Outdoor Recreation Guide",
    slug: "outdoor-recreation",
    author: "Michael Thompson",
    date: "2024-02-12",
    readTime: "14 min read",
    image: "https://images.unsplash.com/photo-1533251174151-5a6c2c5c1316?w=800",
    preview: "Experience the natural beauty and outdoor activities available in Palm Coast, from beaches to trails.",
    content: `
      Palm Coast offers endless opportunities for outdoor recreation:

      Beach Activities

      1. Swimming & Sunbathing
      - Multiple beaches
      - Lifeguard stations
      - Beach rentals
      - Picnic areas
      - Parking access

      2. Water Sports
      - Surfing
      - Paddleboarding
      - Kayaking
      - Fishing
      - Boating

      Parks & Trails

      1. Linear Park
      - Walking paths
      - Bike trails
      - Exercise stations
      - Nature views
      - Rest areas

      2. Community Parks
      - Playgrounds
      - Sports fields
      - Picnic areas
      - Dog parks
      - Events spaces

      Nature Activities

      1. Bird Watching
      - Wildlife areas
      - Guided tours
      - Photography spots
      - Seasonal migration
      - Local species

      2. Eco Tours
      - Boat tours
      - Walking tours
      - Educational programs
      - Photography
      - Conservation

      Get outside and enjoy all that Palm Coast's natural environment has to offer.
    `
  },
  {
    title: "Entertainment & Nightlife",
    slug: "entertainment",
    author: "Sarah Wilson",
    date: "2024-02-10",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800",
    preview: "Find the best entertainment venues, events, and nightlife spots in Palm Coast.",
    content: `
      Explore Palm Coast's entertainment scene:

      Live Entertainment

      1. Music Venues
      - Live bands
      - Local artists
      - Open mic nights
      - Dance floors
      - Outdoor concerts

      2. Performing Arts
      - Theater shows
      - Dance performances
      - Comedy nights
      - Cultural events
      - Local productions

      Nightlife

      1. Bars & Lounges
      - Sports bars
      - Wine bars
      - Craft beer
      - Cocktail lounges
      - Live music

      2. Evening Activities
      - Movie theaters
      - Bowling alleys
      - Game rooms
      - Late dining
      - Social clubs

      Special Events

      1. Festivals
      - Food festivals
      - Music festivals
      - Cultural events
      - Holiday celebrations
      - Art shows

      2. Community Events
      - Farmers markets
      - Street fairs
      - Sports events
      - Charity events
      - Seasonal activities

      Experience the vibrant entertainment options available in Palm Coast.
    `
  },
  {
    title: "Shopping & Retail Guide",
    slug: "shopping",
    author: "Emily Chen",
    date: "2024-02-08",
    readTime: "13 min read",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
    preview: "Discover Palm Coast's shopping destinations, from malls to boutiques and specialty stores.",
    content: `
      Find the best shopping experiences in Palm Coast:

      Shopping Centers

      1. Major Retail
      - Department stores
      - Chain retailers
      - Electronics
      - Home goods
      - Fashion

      2. Specialty Shops
      - Boutiques
      - Gift shops
      - Art galleries
      - Antique stores
      - Local crafts

      Local Markets

      1. Farmers Markets
      - Fresh produce
      - Local vendors
      - Artisanal goods
      - Food stalls
      - Crafts

      2. Specialty Food
      - Gourmet shops
      - Wine stores
      - Bakeries
      - Ethnic markets
      - Health food

      Shopping Districts

      1. European Village
      - Unique shops
      - Restaurants
      - Entertainment
      - Services
      - Events

      2. Town Center
      - Major retailers
      - Restaurants
      - Services
      - Entertainment
      - Professional offices

      Explore Palm Coast's diverse shopping options for all your needs.
    `
  }
]

export default function LifestylePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Palm Coast Lifestyle Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the vibrant lifestyle, recreation options, dining scene, and entertainment that make Palm Coast a great place to live.
          </p>
        </div>

        {/* Articles */}
        <div className="grid grid-cols-1 gap-12">
          {articles.map((article) => (
            <article key={article.slug} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:shadow-xl">
              <div className="md:flex h-64">
                <div className="md:w-96 flex-shrink-0">
                  <div className="relative h-full">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-between p-6 flex-1">
                  <div>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span className="font-medium">{article.author}</span>
                      <span className="mx-2">•</span>
                      <span>{new Date(article.date).toLocaleDateString('en-US', { 
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</span>
                      <span className="mx-2">•</span>
                      <span>{article.readTime}</span>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-2 hover:text-primary-600 transition-colors">
                      {article.title}
                    </h2>
                    
                    <p className="text-gray-600 line-clamp-2">
                      {article.preview}
                    </p>
                  </div>

                  <div className="mt-4">
                    <Link
                      href={`/lifestyle/${article.slug}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Read Article
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8 text-center shadow-lg">
          <h2 className="text-2xl font-bold text-primary-900 mb-4">
            Experience Palm Coast Living
          </h2>
          <p className="text-primary-700 mb-6 max-w-2xl mx-auto">
            Connect with local experts to learn more about life in Palm Coast and find your perfect neighborhood.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors shadow-sm"
          >
            Get Local Insights
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
} 