import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Palm Coast Healthcare Guide',
  description: 'Comprehensive guide to healthcare facilities, medical services, and wellness resources in Palm Coast.',
}

const articles = [
  {
    title: "Medical Facilities & Hospitals",
    slug: "medical-facilities",
    author: "Dr. James Anderson",
    date: "2024-02-15",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800",
    preview: "Overview of Palm Coast's hospitals, urgent care centers, and specialized medical facilities.",
    content: `
      Explore Palm Coast's comprehensive medical facilities:

      Major Hospitals

      1. AdventHealth Palm Coast
      - Emergency services
      - Surgical center
      - Specialty departments
      - Imaging services
      - Rehabilitation

      2. Urgent Care Centers
      - Walk-in clinics
      - Extended hours
      - Minor emergencies
      - Lab services
      - X-ray facilities

      Specialized Centers

      1. Medical Specialties
      - Cardiology
      - Orthopedics
      - Oncology
      - Neurology
      - Women's health

      2. Diagnostic Centers
      - Advanced imaging
      - Laboratory services
      - Cardiac testing
      - Sleep studies
      - Physical therapy

      Emergency Services

      1. Emergency Rooms
      - 24/7 care
      - Trauma services
      - Critical care
      - Ambulance access
      - Helipad facilities

      2. First Responders
      - Fire stations
      - EMT services
      - Response times
      - Coverage areas
      - Emergency planning

      Find the right medical facility for your healthcare needs in Palm Coast.
    `
  },
  {
    title: "Primary Care & Specialists",
    slug: "doctors-guide",
    author: "Dr. Sarah Miller",
    date: "2024-02-12",
    readTime: "14 min read",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800",
    preview: "Guide to finding primary care physicians and medical specialists in Palm Coast.",
    content: `
      Find the right healthcare provider for your needs:

      Primary Care

      1. Family Medicine
      - General health
      - Preventive care
      - Chronic conditions
      - Health screenings
      - Vaccinations

      2. Internal Medicine
      - Adult healthcare
      - Complex conditions
      - Preventive medicine
      - Health management
      - Specialist referrals

      Medical Specialists

      1. Common Specialties
      - Cardiology
      - Dermatology
      - Orthopedics
      - Pediatrics
      - OB/GYN

      2. Subspecialties
      - Endocrinology
      - Neurology
      - Pulmonology
      - Rheumatology
      - Gastroenterology

      Healthcare Networks

      1. Insurance Networks
      - Major providers
      - Coverage options
      - In-network doctors
      - Referral processes
      - Benefits verification

      2. Medical Groups
      - Multi-specialty
      - Coordinated care
      - Electronic records
      - Patient portals
      - Appointment scheduling

      Choose the right healthcare provider for your specific needs.
    `
  },
  {
    title: "Mental Health Resources",
    slug: "mental-health",
    author: "Dr. Michael Chen",
    date: "2024-02-10",
    readTime: "13 min read",
    image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=800",
    preview: "Comprehensive guide to mental health services and support resources in Palm Coast.",
    content: `
      Access mental health support in Palm Coast:

      Professional Services

      1. Counseling
      - Individual therapy
      - Family counseling
      - Group therapy
      - Marriage counseling
      - Child psychology

      2. Psychiatry
      - Medication management
      - Behavioral health
      - Crisis intervention
      - Addiction treatment
      - Telepsychiatry

      Support Resources

      1. Support Groups
      - Depression
      - Anxiety
      - Addiction recovery
      - Grief support
      - PTSD

      2. Crisis Services
      - 24/7 hotlines
      - Emergency response
      - Crisis counseling
      - Intervention services
      - Support networks

      Wellness Programs

      1. Mental Wellness
      - Stress management
      - Mindfulness
      - Meditation
      - Life coaching
      - Work-life balance

      2. Community Support
      - Education programs
      - Awareness events
      - Resource centers
      - Family support
      - Advocacy groups

      Find the mental health support you need in Palm Coast.
    `
  },
  {
    title: "Wellness & Alternative Medicine",
    slug: "wellness",
    author: "Lisa Thompson",
    date: "2024-02-08",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800",
    preview: "Explore wellness centers, alternative medicine options, and holistic health resources.",
    content: `
      Discover holistic health options in Palm Coast:

      Wellness Centers

      1. Fitness Centers
      - Gyms
      - Yoga studios
      - Pilates
      - Personal training
      - Group classes

      2. Spa Services
      - Massage therapy
      - Skincare
      - Relaxation
      - Beauty treatments
      - Wellness packages

      Alternative Medicine

      1. Holistic Practices
      - Acupuncture
      - Chiropractic
      - Naturopathy
      - Herbalism
      - Energy healing

      2. Integrative Medicine
      - Combined approaches
      - Natural remedies
      - Nutrition
      - Lifestyle medicine
      - Prevention

      Wellness Resources

      1. Nutrition
      - Dietitians
      - Meal planning
      - Supplements
      - Health food stores
      - Cooking classes

      2. Mind-Body
      - Meditation
      - Stress reduction
      - Movement therapy
      - Breathing work
      - Mindfulness

      Explore comprehensive wellness options for optimal health.
    `
  }
]

export default function HealthcarePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Palm Coast Healthcare Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your comprehensive resource for healthcare facilities, medical services, and wellness options in Palm Coast.
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
                      href={`/healthcare/${article.slug}`}
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
            Need Healthcare Assistance?
          </h2>
          <p className="text-primary-700 mb-6 max-w-2xl mx-auto">
            Connect with local healthcare providers and wellness experts to find the right care for you and your family.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors shadow-sm"
          >
            Find Healthcare Providers
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
} 