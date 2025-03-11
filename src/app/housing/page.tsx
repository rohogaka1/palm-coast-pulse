import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Palm Coast Housing Guide',
  description: 'Your comprehensive guide to housing and real estate in Palm Coast, Florida.',
}

const articles = [
  {
    title: "Palm Coast Real Estate Market Trends 2024",
    slug: "market-trends",
    author: "Michael Chen",
    date: "2024-02-15",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
    preview: "An in-depth analysis of Palm Coast's real estate market, including current trends, pricing data, and future projections.",
    content: `
      Understanding Palm Coast's real estate market is crucial for both buyers and sellers. Here's a comprehensive overview of current trends and insights:

      Market Overview

      1. Current Market Conditions
      - Median home price: $350,000
      - Average days on market: 45
      - Inventory levels: Moderate
      - Buyer demand: Strong
      - Interest rates: Competitive

      2. Price Trends
      - Year-over-year appreciation: 5%
      - Price per square foot: $175
      - New construction pricing: $200-250/sq ft
      - Luxury market threshold: $750,000+

      Popular Neighborhoods

      1. Grand Haven
      - Luxury homes
      - Golf community
      - Waterfront properties
      - Price range: $400,000-2,000,000

      2. Palm Coast Plantation
      - Gated community
      - Large lots
      - Natural settings
      - Price range: $500,000-1,500,000

      3. Belle Terre
      - Family-friendly
      - Established neighborhood
      - Good schools
      - Price range: $250,000-450,000

      Market Segments

      1. Single-Family Homes
      - Most popular choice
      - Various price points
      - Strong resale value
      - Multiple styles available

      2. Condominiums
      - Growing segment
      - Beach and waterfront options
      - Lower maintenance
      - Investment potential

      3. New Construction
      - Multiple developments
      - Custom options
      - Energy efficient
      - Modern amenities

      Buyer Preferences

      1. Most Requested Features
      - Open floor plans
      - Updated kitchens
      - Outdoor living spaces
      - Smart home technology
      - Energy efficiency

      2. Location Priorities
      - School district quality
      - Proximity to amenities
      - Community features
      - Access to highways

      Investment Opportunities

      1. Rental Market
      - Strong demand
      - Good ROI potential
      - Various property types
      - Professional management available

      2. Development Areas
      - Growing neighborhoods
      - Commercial zones
      - Mixed-use projects
      - Infrastructure improvements

      Market Forecast

      1. Short-term Outlook
      - Stable price growth
      - Balanced market conditions
      - Continued demand
      - New development

      2. Long-term Projections
      - Population growth
      - Economic development
      - Infrastructure expansion
      - Appreciation potential

      Contact a local real estate professional for the most current market data and personalized advice for your situation.
    `
  },
  {
    title: "First-Time Home Buyer's Guide to Palm Coast",
    slug: "first-time-buyers",
    author: "Sarah Martinez",
    date: "2024-02-10",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?w=800",
    preview: "Essential information and step-by-step guidance for first-time home buyers in Palm Coast, including financing options and buying process.",
    content: `
      Buying your first home in Palm Coast is an exciting journey. Here's your comprehensive guide to making it a success:

      Getting Started

      1. Financial Preparation
      - Credit score requirements
      - Down payment options
      - Debt-to-income ratio
      - Emergency fund
      - Pre-approval process

      2. Budget Planning
      - Monthly payment calculation
      - Additional costs
      - Insurance requirements
      - Property taxes
      - HOA fees

      Financing Options

      1. Conventional Loans
      - Traditional mortgages
      - Down payment requirements
      - Credit score needs
      - PMI considerations

      2. FHA Loans
      - Lower down payments
      - Flexible requirements
      - Insurance premiums
      - Property standards

      3. VA Loans
      - Military benefits
      - No down payment
      - Competitive rates
      - Eligibility requirements

      4. First-Time Buyer Programs
      - State assistance
      - Down payment help
      - Grant opportunities
      - Education requirements

      House Hunting Process

      1. Define Your Needs
      - Size requirements
      - Location preferences
      - Must-have features
      - Deal breakers
      - Future considerations

      2. Working with Professionals
      - Realtor selection
      - Lender relationships
      - Home inspector
      - Real estate attorney

      3. Property Evaluation
      - Location analysis
      - Home condition
      - Future potential
      - Neighborhood research
      - School districts

      Making an Offer

      1. Offer Components
      - Purchase price
      - Earnest money
      - Contingencies
      - Closing timeline
      - Included items

      2. Negotiation Strategy
      - Market conditions
      - Seller motivation
      - Comparable sales
      - Counter offers
      - Deal terms

      Closing Process

      1. Due Diligence
      - Home inspection
      - Title search
      - Insurance quotes
      - HOA review
      - Survey requirements

      2. Final Steps
      - Closing costs
      - Document review
      - Final walkthrough
      - Closing day
      - Key transfer

      After Purchase

      1. Moving Planning
      - Timeline creation
      - Service transfers
      - Address changes
      - Moving services
      - Storage needs

      2. Home Management
      - Maintenance schedule
      - Emergency contacts
      - Warranty information
      - Important documents
      - Local services

      Work with experienced professionals and take advantage of first-time buyer resources available in Palm Coast for a smooth home buying experience.
    `
  },
  {
    title: "Guide to Palm Coast Neighborhoods",
    slug: "neighborhoods",
    author: "David Wilson",
    date: "2024-02-08",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
    preview: "Detailed overview of Palm Coast's diverse neighborhoods, including amenities, lifestyle, and housing options in each area.",
    content: `
      Palm Coast offers diverse neighborhoods to suit every lifestyle. Here's a comprehensive guide to help you find your perfect area:

      Coastal Communities

      1. Hammock Beach
      - Luxury oceanfront
      - Resort amenities
      - Golf courses
      - Private beaches
      - Gated security

      2. Marineland Acres
      - Beachside living
      - Large lots
      - Natural setting
      - Ocean access
      - Privacy focus

      Golf Communities

      1. Grand Haven
      - Jack Nicklaus course
      - Village center
      - Social activities
      - Waterfront options
      - Resort amenities

      2. Pine Lakes
      - Golf course views
      - Family friendly
      - Active lifestyle
      - Community events
      - Affordable options

      Family Neighborhoods

      1. Belle Terre
      - Great schools
      - Parks nearby
      - Shopping access
      - Mixed housing
      - Community pools

      2. Pine Grove
      - Quiet streets
      - Larger lots
      - Nature trails
      - Family events
      - Central location

      Luxury Areas

      1. Palm Coast Plantation
      - Waterfront estates
      - Private docks
      - Gated entrance
      - Custom homes
      - Natural preserve

      2. Island Estates
      - Canal access
      - Mediterranean style
      - Exclusive community
      - Boat facilities
      - Premium features

      Active Adult Communities

      1. Grand Haven South
      - 55+ living
      - Social clubs
      - Fitness center
      - Organized activities
      - Low maintenance

      2. Tidelands
      - Coastal location
      - Walking trails
      - Community center
      - Social events
      - Security features

      New Development Areas

      1. Town Center
      - Mixed-use design
      - Modern amenities
      - Shopping access
      - Entertainment
      - Urban lifestyle

      2. Palm Coast Park
      - Future growth
      - Planned community
      - Green spaces
      - Infrastructure
      - Investment potential

      Amenities by Area

      1. Recreation
      - Parks distribution
      - Trail systems
      - Sports facilities
      - Water access
      - Golf courses

      2. Education
      - School zones
      - Private options
      - Daycare facilities
      - Library access
      - Educational programs

      3. Shopping & Dining
      - Retail centers
      - Restaurant districts
      - Grocery stores
      - Service locations
      - Entertainment venues

      Transportation

      1. Major Routes
      - Highway access
      - Main arteries
      - Traffic patterns
      - Future plans
      - Commute times

      2. Public Transit
      - Bus routes
      - Shuttle services
      - Bike paths
      - Walking trails
      - Future expansion

      Visit different neighborhoods at various times to get a true feel for the area that best matches your lifestyle needs.
    `
  },
  {
    title: "Home Maintenance Guide for Palm Coast Properties",
    slug: "maintenance",
    author: "Robert Thompson",
    date: "2024-02-05",
    readTime: "14 min read",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800",
    preview: "Essential maintenance tips and schedules for Palm Coast homeowners, including hurricane preparation and coastal property care.",
    content: `
      Maintaining your Palm Coast home requires attention to our unique climate and environmental conditions. Here's your comprehensive maintenance guide:

      Seasonal Maintenance

      1. Spring Tasks
      - AC system check
      - Roof inspection
      - Gutter cleaning
      - Window washing
      - Landscape prep

      2. Summer Tasks
      - Hurricane preparation
      - Pest control
      - Irrigation check
      - Paint touch-ups
      - Weather sealing

      3. Fall Tasks
      - Heating system prep
      - Roof maintenance
      - Gutter cleaning
      - Tree trimming
      - Exterior inspection

      4. Winter Tasks
      - Pipe protection
      - Heating efficiency
      - Weather stripping
      - Interior maintenance
      - System checks

      Hurricane Preparation

      1. Home Protection
      - Storm shutters
      - Impact windows
      - Roof inspection
      - Tree trimming
      - Generator maintenance

      2. Emergency Planning
      - Supply stockpile
      - Evacuation routes
      - Important documents
      - Communication plan
      - Insurance review

      Coastal Considerations

      1. Salt Air Protection
      - Exterior finishes
      - Metal protection
      - Regular cleaning
      - Rust prevention
      - Material selection

      2. Moisture Control
      - Ventilation systems
      - Dehumidification
      - Mold prevention
      - Leak detection
      - Drainage systems

      Systems Maintenance

      1. HVAC
      - Regular service
      - Filter changes
      - Duct cleaning
      - Efficiency checks
      - Upgrade options

      2. Plumbing
      - Leak detection
      - Water quality
      - Pipe maintenance
      - Fixture updates
      - Drainage care

      3. Electrical
      - Safety checks
      - Panel maintenance
      - Fixture updates
      - Surge protection
      - Efficiency upgrades

      Exterior Care

      1. Landscaping
      - Native plants
      - Irrigation systems
      - Pest control
      - Soil health
      - Tree care

      2. Structural
      - Foundation checks
      - Wall integrity
      - Roof maintenance
      - Window care
      - Door alignment

      Interior Maintenance

      1. Air Quality
      - Ventilation
      - Filter systems
      - Humidity control
      - Allergen reduction
      - Clean air solutions

      2. Energy Efficiency
      - Insulation check
      - Window sealing
      - Door weathering
      - System efficiency
      - Smart technology

      Professional Services

      1. Regular Inspections
      - Home inspector
      - Pest control
      - HVAC service
      - Roof inspection
      - Plumbing check

      2. Emergency Contacts
      - 24/7 services
      - Licensed contractors
      - Insurance agents
      - Utility companies
      - Security monitoring

      Develop a maintenance schedule and keep detailed records of all home improvements and repairs for future reference.
    `
  }
]

export default function HousingPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Palm Coast Housing Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your comprehensive resource for finding and maintaining your perfect home in Palm Coast.
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
                      href={`/housing/${article.slug}`}
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
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-primary-700 mb-6 max-w-2xl mx-auto">
            Connect with our local real estate experts who can help you navigate the Palm Coast housing market and find your perfect home.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors shadow-sm"
          >
            Speak with an Expert
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
} 