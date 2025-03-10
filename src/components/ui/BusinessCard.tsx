import Image from 'next/image'
import Link from 'next/link'
import { cn, truncateText } from '@/lib/utils'
import type { Business } from '@/services/supabase/config'

interface BusinessCardProps {
  business: Business
  className?: string
}

export function BusinessCard({ business, className }: BusinessCardProps) {
  return (
    <div className={cn(
      'bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]',
      className
    )}>
      <div className="relative h-48 w-full">
        {business.logo_url ? (
          <Image
            src={business.logo_url}
            alt={`${business.name} logo`}
            fill
            className="object-cover"
          />
        ) : (
          <div className="h-full w-full bg-primary-100 flex items-center justify-center">
            <span className="text-4xl font-bold text-primary-600">
              {business.name.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}
        {business.featured && (
          <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 text-xs font-semibold px-2 py-1 rounded">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">
          <Link href={`/business/${business.id}`} className="hover:text-primary-600">
            {business.name}
          </Link>
        </h3>
        
        <p className="text-gray-600 text-sm mb-3">
          {truncateText(business.description, 120)}
        </p>
        
        <div className="flex items-center text-sm text-gray-500">
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {business.address}
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <span className="inline-block bg-primary-50 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded">
            {business.category}
          </span>
          <Link
            href={`/business/${business.id}`}
            className="text-primary-600 hover:text-primary-700 text-sm font-medium"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  )
} 