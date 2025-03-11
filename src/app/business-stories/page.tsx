import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Local Business Stories - Palm Coast Business Community',
  description: 'Meet the entrepreneurs shaping Palm Coast\'s business community and discover the opportunities our city offers.',
}

// Sample YouTube video data
const interviews = [
  {
    id: '1',
    title: "Joe's Diner: 25 Years of Palm Coast Comfort Food",
    businessOwner: "Joe Smith",
    businessName: "Joe's Diner",
    youtubeId: "dQw4w9WgXcQ", // Famous video that's guaranteed to exist
    description: "Joe Smith shares his journey of building Palm Coast's favorite diner and creating a community gathering spot.",
    date: "2024-02-15",
    tags: ["Restaurant", "Local Business", "Community"]
  },
  {
    id: '2',
    title: "European Village: The Heart of Palm Coast",
    businessOwner: "Maria Rodriguez",
    businessName: "European Village Management",
    youtubeId: "9bZkp7q19f0", // Another famous video that's guaranteed to exist
    description: "Discover the story behind Palm Coast's unique European-style shopping and dining destination.",
    date: "2024-02-10",
    tags: ["Shopping", "Entertainment", "Tourism"]
  },
  {
    id: '3',
    title: "Palm Coast Fitness: Building a Healthier Community",
    businessOwner: "Mike Johnson",
    businessName: "Palm Coast Fitness",
    youtubeId: "JGwWNGJdvx8", // Another well-known video
    description: "How a local gym became a cornerstone of wellness in Palm Coast.",
    date: "2024-02-05",
    tags: ["Fitness", "Health", "Wellness"]
  }
]

function VideoCard({ interview }: { interview: typeof interviews[0] }) {
  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={`https://img.youtube.com/vi/${interview.youtubeId}/hqdefault.jpg`}
          alt={interview.title}
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
            {new Date(interview.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric'
            })}
          </span>
        </div>
      </div>
      
      <div className="flex-1 p-6 flex flex-col">
        <div className="flex-1">
          <div className="flex flex-wrap gap-2 mb-3">
            {interview.tags.map(tag => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
            {interview.title}
          </h2>
          
          <p className="text-sm font-medium text-primary-600 mb-3">
            {interview.businessOwner} • {interview.businessName}
          </p>
          
          <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed">
            {interview.description}
          </p>
        </div>
        
        <Link
          href={`https://youtube.com/watch?v=${interview.youtubeId}`}
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
  )
}

export default function BusinessStoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Local Business Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the entrepreneurs shaping Palm Coast's business community 
            and discover the opportunities our city offers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {interviews.map((interview) => (
            <VideoCard key={interview.id} interview={interview} />
          ))}
        </div>

        <div className="relative mt-20">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 transform -skew-y-2"></div>
          <div className="relative bg-white rounded-2xl shadow-xl p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Share Your Business Story
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Are you a Palm Coast business owner with a story to tell? We'd love to feature 
              your journey and help inspire others in our community.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-xl text-lg font-semibold hover:bg-primary-700 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Get Featured
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
      </div>
    </div>
  )
} 