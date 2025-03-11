import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Palm Coast Schools & Education Guide',
  description: 'Comprehensive guide to schools, educational programs, and after-school activities in Palm Coast.',
}

const articles = [
  {
    title: "Guide to Palm Coast's Best Schools",
    slug: "best-schools",
    author: "Dr. Emily Martinez",
    date: "2024-02-12",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
    preview: "A comprehensive review of Palm Coast's top-rated public and private schools, including rankings, programs, and admission information.",
    content: `
      Palm Coast offers excellent educational opportunities through its diverse range of schools. Here's a detailed look at the top educational institutions:

      Public Schools

      1. Flagler Palm Coast High School
      - Ranking: A-rated school
      - Students: 2,500+
      - Programs: 
        * International Baccalaureate (IB)
        * Advanced Placement (AP)
        * Career and Technical Education
      - Sports: State-ranked athletics programs
      - Notable: 94% graduation rate

      2. Indian Trails Middle School
      - Ranking: A-rated school
      - Students: 1,200+
      - Programs:
        * STEM focus
        * Gifted education
        * Arts and music
      - Features: Modern technology labs

      3. Belle Terre Elementary
      - Ranking: A-rated school
      - Students: 1,100+
      - Programs:
        * Gifted program
        * Special education
        * Technology integration
      - Features: Award-winning music program

      Private Schools

      1. St. Elizabeth Ann Seton Catholic School
      - Grades: PreK-8
      - Class Size: 18 students average
      - Religious Affiliation: Catholic
      - Notable: Strong STEM curriculum

      2. Palm Coast Christian Academy
      - Grades: K-12
      - Class Size: 15 students average
      - Religious Affiliation: Christian
      - Notable: Character development focus

      Charter Schools

      1. Imagine School at Town Center
      - Grades: K-8
      - Focus: Project-based learning
      - Special Programs: 
        * Character development
        * Technology integration
      - Notable: High parent satisfaction

      School Selection Tips
      - Consider your child's learning style
      - Visit schools during regular hours
      - Review test scores and ratings
      - Evaluate extracurricular offerings
      - Check transportation options
      - Consider location and commute time

      Each school offers unique advantages, and the best choice depends on your child's individual needs and interests. Contact schools directly for current enrollment information and tour schedules.
    `
  },
  {
    title: "After-School Programs and Activities Guide",
    slug: "after-school-activities",
    author: "Lisa Thompson",
    date: "2024-02-08",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800",
    preview: "Discover the wide range of after-school activities and enrichment programs available to Palm Coast students.",
    content: `
      Palm Coast offers numerous after-school programs to enrich students' education and development. Here's your comprehensive guide:

      Sports Programs

      1. Palm Coast Little League
      - Ages: 4-16
      - Seasons: Spring and Fall
      - Locations: Multiple fields citywide
      - Programs: T-ball through Senior League

      2. Soccer Club
      - Ages: 3-18
      - Year-round programs
      - Recreational and competitive teams
      - Professional coaching

      3. Swimming Programs
      - Belle Terre Swim and Racquet Club
      - Year-round lessons
      - Competitive team options
      - Water safety courses

      Academic Enrichment

      1. Mathnasium Learning Center
      - Personalized math tutoring
      - Homework help
      - Test preparation
      - All grade levels

      2. Sylvan Learning Center
      - Reading programs
      - STEM courses
      - College prep
      - Study skills

      Arts and Music

      1. Palm Coast Arts Foundation
      - Visual arts classes
      - Music lessons
      - Theater programs
      - Summer camps

      2. School of Dance
      - Ballet, jazz, tap
      - Contemporary dance
      - Performance opportunities
      - All skill levels

      STEM Programs

      1. Code Ninjas
      - Programming classes
      - Robotics
      - Game development
      - Ages 7-14

      2. Mad Science
      - Hands-on experiments
      - STEM projects
      - Holiday camps
      - Birthday parties

      Community Programs

      1. Parks & Recreation
      - Youth sports leagues
      - Fitness classes
      - Summer camps
      - Special events

      2. Public Library Programs
      - Reading clubs
      - Homework help
      - STEAM activities
      - Teen programs

      Choosing the Right Program
      - Consider your child's interests
      - Check program schedules
      - Evaluate costs and financial aid
      - Read parent reviews
      - Visit during activities
      - Ask about staff qualifications

      Most programs offer trial periods or visitor days. Contact individual programs for current schedules and registration information.
    `
  },
  {
    title: "Special Education Resources in Palm Coast",
    slug: "special-education",
    author: "Dr. Michael Chen",
    date: "2024-02-05",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800",
    preview: "A comprehensive guide to special education services, resources, and support programs available in Palm Coast schools.",
    content: `
      Palm Coast is committed to providing quality education for all students, including those with special needs. Here's a detailed overview of special education resources:

      Available Services

      1. Early Intervention Programs
      - Ages: Birth to 5 years
      - Developmental screenings
      - Early identification
      - Family support services

      2. Individual Education Programs (IEP)
      - Personalized learning plans
      - Regular progress monitoring
      - Parent collaboration
      - Modified curriculum options

      3. Related Services
      - Speech therapy
      - Occupational therapy
      - Physical therapy
      - Behavioral support
      - Counseling services

      Support Programs

      1. Inclusive Classrooms
      - Mainstream integration
      - Co-teaching models
      - Peer mentoring
      - Adaptive technologies

      2. Resource Rooms
      - Small group instruction
      - Individual support
      - Study skills development
      - Academic intervention

      3. Life Skills Programs
      - Independent living skills
      - Social skills training
      - Vocational preparation
      - Community integration

      Parent Resources

      1. Support Groups
      - Monthly meetings
      - Information sharing
      - Emotional support
      - Resource networking

      2. Advocacy Training
      - Rights education
      - IEP meeting preparation
      - Documentation guidance
      - Communication strategies

      3. Community Resources
      - Local therapy providers
      - Recreational programs
      - Support organizations
      - Financial assistance

      Getting Started

      1. Evaluation Process
      - Request assessment
      - Complete testing
      - Team meetings
      - Service determination

      2. Documentation Needed
      - Medical records
      - Previous evaluations
      - School records
      - Parent observations

      3. Timeline
      - Initial request
      - Evaluation period
      - IEP development
      - Implementation
      - Regular reviews

      Success Strategies

      1. Communication
      - Regular teacher contact
      - Progress updates
      - Concern addressing
      - Team collaboration

      2. Home Support
      - Consistent routines
      - Homework strategies
      - Skill reinforcement
      - Positive environment

      3. Advocacy Tips
      - Know your rights
      - Document everything
      - Stay informed
      - Build relationships

      Contact the Exceptional Student Education department at your child's school or the district office to learn more about available services and support.
    `
  },
  {
    title: "College Preparation and Planning Guide",
    slug: "college-prep",
    author: "Sarah Johnson",
    date: "2024-02-01",
    readTime: "14 min read",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
    preview: "Essential guidance for Palm Coast students preparing for college, including timeline, test preparation, and application strategies.",
    content: `
      Preparing for college requires careful planning and preparation. Here's your comprehensive guide to college readiness in Palm Coast:

      Timeline by Grade

      9th Grade
      - Explore interests and careers
      - Take challenging courses
      - Join extracurricular activities
      - Start building your resume
      - Research college requirements

      10th Grade
      - Take PSAT/PreACT
      - Research colleges
      - Continue activities
      - Consider leadership roles
      - Meet with counselors
      - Start college visits

      11th Grade
      - Take SAT/ACT
      - Narrow college list
      - Visit target schools
      - Research scholarships
      - Begin applications
      - Request recommendations

      12th Grade
      - Complete applications
      - Submit FAFSA
      - Apply for scholarships
      - Make final decision
      - Plan transition

      Test Preparation

      1. SAT/ACT Prep
      - Local prep courses
      - Online resources
      - Practice tests
      - Study groups
      - Private tutoring

      2. AP/IB Programs
      - Available subjects
      - Study strategies
      - Exam preparation
      - Credit policies

      Application Process

      1. Components
      - Academic records
      - Test scores
      - Essays
      - Recommendations
      - Activities list
      - Portfolio (if needed)

      2. Timeline
      - Early decision
      - Early action
      - Regular decision
      - Rolling admission

      Financial Planning

      1. FAFSA
      - Application process
      - Required documents
      - Deadlines
      - Updates

      2. Scholarships
      - Local opportunities
      - National programs
      - Merit-based
      - Need-based
      - Special interests

      3. Financial Aid
      - Types available
      - Application process
      - Requirements
      - Deadlines

      Local Resources

      1. School Counseling
      - Individual meetings
      - College fairs
      - Information sessions
      - Application support

      2. Community Programs
      - College workshops
      - Essay writing help
      - FAFSA assistance
      - Scholarship search

      Success Tips

      1. Academic
      - Strong course load
      - Good grades
      - Test scores
      - Teacher relationships

      2. Extracurricular
      - Quality over quantity
      - Leadership roles
      - Consistent involvement
      - Meaningful impact

      3. Personal
      - Time management
      - Stress management
      - Decision making
      - Goal setting

      Contact your school's college counseling office for personalized guidance and support throughout the college preparation process.
    `
  }
]

export default function SchoolsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Palm Coast Schools & Education Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the excellent educational opportunities available in Palm Coast, from top-rated schools to enriching after-school programs.
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
                      href={`/schools/${article.slug}`}
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
            Need Help Choosing the Right School?
          </h2>
          <p className="text-primary-700 mb-6 max-w-2xl mx-auto">
            Connect with our education specialists who can help you find the perfect school and programs for your children.
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