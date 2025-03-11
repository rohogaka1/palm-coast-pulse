import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Palm Coast Employment Guide',
  description: 'Comprehensive guide to job opportunities, career resources, and employment services in Palm Coast.',
}

const articles = [
  {
    title: "Palm Coast Job Market Overview",
    slug: "job-market",
    author: "Mark Johnson",
    date: "2024-02-15",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
    preview: "Explore Palm Coast's growing job market, major employers, and emerging industries.",
    content: `
      Understanding Palm Coast's job market:

      Major Industries

      1. Healthcare
      - Hospitals
      - Medical practices
      - Senior care
      - Support services
      - Healthcare tech

      2. Tourism & Hospitality
      - Hotels
      - Restaurants
      - Attractions
      - Event planning
      - Tourism services

      Top Employers

      1. Healthcare Sector
      - AdventHealth
      - Medical centers
      - Specialty clinics
      - Rehabilitation
      - Home health

      2. Education
      - School district
      - Private schools
      - Training centers
      - Support services
      - Administration

      Growth Sectors

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

      Discover employment opportunities in Palm Coast's diverse job market.
    `
  },
  {
    title: "Career Development Resources",
    slug: "career-resources",
    author: "Lisa Martinez",
    date: "2024-02-12",
    readTime: "14 min read",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800",
    preview: "Access career development resources, training programs, and professional development opportunities.",
    content: `
      Advance your career with local resources:

      Education & Training

      1. Higher Education
      - Local colleges
      - Online programs
      - Certificate courses
      - Degree programs
      - Continuing education

      2. Vocational Training
      - Trade schools
      - Apprenticeships
      - Skills training
      - Certification programs
      - Industry training

      Career Services

      1. Job Search
      - Resume writing
      - Interview prep
      - Job fairs
      - Networking events
      - Career counseling

      2. Professional Development
      - Workshops
      - Seminars
      - Leadership training
      - Skills assessment
      - Career planning

      Support Services

      1. Career Centers
      - Job listings
      - Resource libraries
      - Computer access
      - Skills workshops
      - Career guidance

      2. Workforce Programs
      - Job placement
      - Training assistance
      - Career transition
      - Veterans services
      - Disability services

      Take advantage of career development resources to advance your professional goals.
    `
  },
  {
    title: "Starting a Business in Palm Coast",
    slug: "business-startup",
    author: "Michael Chen",
    date: "2024-02-10",
    readTime: "13 min read",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
    preview: "Guide to entrepreneurship, business resources, and startup support in Palm Coast.",
    content: `
      Launch your business in Palm Coast:

      Business Planning

      1. Getting Started
      - Market research
      - Business plan
      - Legal structure
      - Licensing
      - Permits

      2. Funding Options
      - Small business loans
      - Grants
      - Investors
      - Crowdfunding
      - Financial planning

      Support Resources

      1. Business Development
      - SCORE mentoring
      - SBA resources
      - Chamber of Commerce
      - Networking groups
      - Industry associations

      2. Startup Services
      - Incubators
      - Coworking spaces
      - Business coaching
      - Legal services
      - Accounting help

      Growth Strategies

      1. Marketing
      - Digital presence
      - Local advertising
      - Social media
      - PR strategies
      - Brand building

      2. Operations
      - Location selection
      - Staffing
      - Technology
      - Suppliers
      - Management

      Start and grow your business with local support and resources.
    `
  },
  {
    title: "Remote Work Opportunities",
    slug: "remote-work",
    author: "Sarah Thompson",
    date: "2024-02-08",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1521898284481-a5ec348cb555?w=800",
    preview: "Explore remote work opportunities, digital nomad resources, and work-from-home support.",
    content: `
      Embrace remote work opportunities in Palm Coast:

      Remote Jobs

      1. Industries
      - Technology
      - Customer service
      - Marketing
      - Writing
      - Consulting

      2. Companies
      - Remote-first
      - Hybrid options
      - Local remote
      - Freelance
      - Contract work

      Work Setup

      1. Home Office
      - Equipment
      - Internet
      - Workspace
      - Technology
      - Security

      2. Coworking
      - Shared spaces
      - Private offices
      - Meeting rooms
      - Networking
      - Amenities

      Remote Resources

      1. Technology
      - Communication tools
      - Project management
      - Cloud services
      - Security
      - Productivity apps

      2. Support Services
      - IT support
      - Virtual assistance
      - Professional development
      - Remote communities
      - Work-life balance

      Find and succeed in remote work opportunities from Palm Coast.
    `
  }
]

export default function EmploymentPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Palm Coast Employment Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your comprehensive resource for job opportunities, career development, and employment services in Palm Coast.
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
                      href={`/employment/${article.slug}`}
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
            Ready to Start Your Career in Palm Coast?
          </h2>
          <p className="text-primary-700 mb-6 max-w-2xl mx-auto">
            Connect with local employers and career resources to find your next opportunity.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors shadow-sm"
          >
            Explore Opportunities
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
} 