import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Palm Coast Moving Guide',
  description: 'Your comprehensive guide to relocating to Palm Coast, Florida.',
}

const articles = [
  {
    title: "Essential Guide to Moving to Palm Coast",
    slug: "moving-essentials",
    author: "Jennifer Adams",
    date: "2024-02-15",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
    preview: "Everything you need to know about relocating to Palm Coast, from planning your move to settling into your new community.",
    content: `
      Planning a move to Palm Coast? Here's your comprehensive guide to making the transition smooth and successful:

      Before the Move

      1. Research and Planning
      - Timeline creation
      - Budget planning
      - Area research
      - School options
      - Healthcare facilities

      2. Housing Arrangements
      - Temporary housing
      - Rental options
      - Purchase timeline
      - Storage needs
      - Utility setup

      3. Employment
      - Job market
      - Major employers
      - Remote work
      - Business opportunities
      - Commute planning

      Moving Process

      1. Professional Movers
      - Company research
      - Cost estimates
      - Insurance options
      - Scheduling
      - Documentation

      2. DIY Moving
      - Truck rental
      - Packing supplies
      - Loading help
      - Route planning
      - Timeline management

      3. Specialty Items
      - Vehicle transport
      - Pet relocation
      - Valuable items
      - Plants
      - Documentation

      First Week Checklist

      1. Essential Setup
      - Utilities activation
      - Internet service
      - Mail forwarding
      - Basic supplies
      - Emergency contacts

      2. Administrative Tasks
      - Driver's license
      - Vehicle registration
      - Voter registration
      - Insurance updates
      - Medical records

      Getting Settled

      1. Community Integration
      - Neighborhood exploration
      - Local activities
      - Social groups
      - Religious organizations
      - Volunteer opportunities

      2. Essential Services
      - Healthcare providers
      - Banking setup
      - Shopping areas
      - Service providers
      - Emergency services

      Local Knowledge

      1. Weather Preparation
      - Hurricane season
      - Summer heat
      - Rain patterns
      - Storm protection
      - Emergency plans

      2. Local Culture
      - Community events
      - Social customs
      - Recreation options
      - Cultural activities
      - Local traditions

      Take advantage of local resources and connect with community groups to make your transition to Palm Coast smoother and more enjoyable.
    `
  },
  {
    title: "Cost of Living in Palm Coast",
    slug: "cost-of-living",
    author: "Mark Rodriguez",
    date: "2024-02-12",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800",
    preview: "Detailed breakdown of living expenses in Palm Coast, including housing, utilities, transportation, and daily expenses.",
    content: `
      Understanding Palm Coast's cost of living helps you plan your budget effectively. Here's a comprehensive breakdown:

      Housing Costs

      1. Home Prices
      - Average home: $350,000
      - Starter homes: $250,000
      - Luxury homes: $750,000+
      - New construction: $400,000+
      - Condos: $200,000+

      2. Rental Market
      - 1 bedroom: $1,200-1,500
      - 2 bedroom: $1,500-1,800
      - 3 bedroom: $1,800-2,500
      - Luxury rentals: $2,500+
      - Seasonal rates: Variable

      Utilities

      1. Monthly Averages
      - Electricity: $120-180
      - Water: $40-60
      - Gas: $30-50
      - Internet: $60-100
      - Cable TV: $50-120

      2. Setup Costs
      - Deposits
      - Connection fees
      - Equipment costs
      - Installation charges
      - Service initiation

      Transportation

      1. Vehicle Expenses
      - Gas prices
      - Insurance rates
      - Registration fees
      - Maintenance costs
      - Parking fees

      2. Public Transit
      - Bus fares
      - Shuttle services
      - Taxi rates
      - Ride-sharing
      - Bike sharing

      Daily Expenses

      1. Groceries
      - Basic items
      - Specialty foods
      - Organic options
      - Local markets
      - Bulk shopping

      2. Dining Out
      - Fast food: $8-15
      - Casual dining: $15-30
      - Fine dining: $50+
      - Delivery services
      - Special occasions

      Healthcare

      1. Insurance
      - Premium ranges
      - Coverage options
      - Provider networks
      - Prescription costs
      - Specialist fees

      2. Out-of-pocket
      - Co-pays
      - Deductibles
      - Dental care
      - Vision care
      - Alternative medicine

      Entertainment

      1. Activities
      - Movie tickets
      - Sports events
      - Beach access
      - Golf fees
      - Fitness memberships

      2. Family Fun
      - Theme parks
      - Museums
      - Zoo visits
      - Water parks
      - Local events

      Compare these costs with your current location to better understand how your expenses might change after moving to Palm Coast.
    `
  },
  {
    title: "Palm Coast Job Market Guide",
    slug: "job-market",
    author: "Lisa Chen",
    date: "2024-02-10",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
    preview: "Overview of employment opportunities, major employers, and growing industries in Palm Coast, plus job search strategies.",
    content: `
      Understanding Palm Coast's job market is crucial for a successful relocation. Here's what you need to know:

      Major Industries

      1. Healthcare
      - Hospitals
      - Medical practices
      - Senior care
      - Rehabilitation
      - Support services

      2. Tourism
      - Hotels
      - Restaurants
      - Attractions
      - Event planning
      - Recreation

      3. Construction
      - Residential
      - Commercial
      - Infrastructure
      - Specialty trades
      - Development

      Top Employers

      1. Healthcare Sector
      - AdventHealth
      - Medical centers
      - Specialty clinics
      - Care facilities
      - Support services

      2. Education
      - School district
      - Private schools
      - Training centers
      - Higher education
      - Support services

      3. Government
      - City offices
      - County services
      - State agencies
      - Federal positions
      - Public safety

      Growing Industries

      1. Technology
      - IT services
      - Software development
      - Digital marketing
      - Cybersecurity
      - Remote work

      2. Professional Services
      - Financial services
      - Legal services
      - Real estate
      - Insurance
      - Consulting

      Job Search Resources

      1. Online Platforms
      - Local job boards
      - Company websites
      - Professional networks
      - Industry groups
      - Remote work sites

      2. Local Resources
      - Employment agencies
      - Career centers
      - Networking events
      - Job fairs
      - Professional groups

      Salary Ranges

      1. Entry Level
      - Administrative: $30-40k
      - Technical: $40-50k
      - Sales: $35-45k
      - Service: $25-35k
      - Support: $30-40k

      2. Professional
      - Management: $60-80k
      - Healthcare: $70-100k
      - Technology: $65-90k
      - Finance: $55-85k
      - Education: $45-65k

      Remote Work

      1. Opportunities
      - Tech companies
      - Professional services
      - Creative industries
      - Customer service
      - Consulting

      2. Infrastructure
      - Internet services
      - Co-working spaces
      - Home office setup
      - Virtual platforms
      - Support services

      Connect with local professional networks and utilize online resources to explore job opportunities before and after your move.
    `
  },
  {
    title: "Family Life in Palm Coast",
    slug: "family-life",
    author: "Sarah Thompson",
    date: "2024-02-08",
    readTime: "13 min read",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800",
    preview: "Guide to family-friendly activities, education options, and community resources for families moving to Palm Coast.",
    content: `
      Palm Coast offers an excellent environment for families. Here's what you need to know about family life in our community:

      Education

      1. Public Schools
      - District overview
      - School ratings
      - Special programs
      - Extracurricular activities
      - Support services

      2. Private Schools
      - Religious options
      - Montessori programs
      - College prep
      - Special focus
      - Admissions

      Family Activities

      1. Outdoor Recreation
      - Parks
      - Beaches
      - Nature trails
      - Sports facilities
      - Playgrounds

      2. Indoor Activities
      - Community center
      - Libraries
      - Museums
      - Art centers
      - Entertainment venues

      Youth Programs

      1. Sports
      - League sports
      - Recreation programs
      - Summer camps
      - Swimming lessons
      - Martial arts

      2. Enrichment
      - Art classes
      - Music lessons
      - Dance studios
      - STEM programs
      - Language classes

      Community Resources

      1. Healthcare
      - Pediatricians
      - Family doctors
      - Dental care
      - Vision care
      - Specialists

      2. Support Services
      - Childcare
      - After-school programs
      - Family counseling
      - Special needs
      - Parent groups

      Family Events

      1. Regular Activities
      - Story time
      - Movie nights
      - Farmers markets
      - Cultural events
      - Holiday celebrations

      2. Annual Events
      - Festivals
      - Parades
      - Fairs
      - Concerts
      - Sports tournaments

      Safety

      1. Neighborhoods
      - Crime rates
      - School zones
      - Traffic patterns
      - Emergency services
      - Community watch

      2. Emergency Planning
      - Hurricane prep
      - Evacuation routes
      - Safety resources
      - Communication
      - Support systems

      Take advantage of community resources and programs to help your family settle into Palm Coast life smoothly.
    `
  }
]

export default function MovingGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Palm Coast Moving Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about relocating to Palm Coast, from essential planning to settling into your new community.
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
                      href={`/moving-guide/${article.slug}`}
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
            Planning Your Move to Palm Coast?
          </h2>
          <p className="text-primary-700 mb-6 max-w-2xl mx-auto">
            Connect with our local experts who can help make your relocation smooth and successful.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors shadow-sm"
          >
            Get Moving Assistance
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
} 