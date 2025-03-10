'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SocialLink {
  type: 'facebook' | 'twitter' | 'instagram' | 'linkedin'
  url: string
}

interface BusinessCardProps {
  business: {
    id: string
    name: string
    description: string
    address: string
    logo_url: string
    category: string
    subcategory?: string
    social_media?: {
      facebook?: string
      twitter?: string
      instagram?: string
      linkedin?: string
    }
  }
}

const SocialIcon = ({ type, url }: SocialLink) => {
  const socialStyles = {
    facebook: 'text-blue-600 hover:text-blue-700',
    twitter: 'text-blue-400 hover:text-blue-500',
    instagram: 'text-pink-600 hover:text-pink-700',
    linkedin: 'text-blue-700 hover:text-blue-800',
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={socialStyles[type]}
    >
      <i className={`fab fa-${type} text-lg`} />
    </a>
  )
}

const Badge = ({ text, variant = 'primary' }: { text: string; variant?: 'primary' | 'secondary' }) => (
  <span
    className={cn(
      'inline-flex items-center rounded-full px-2 py-1 text-xs font-medium',
      variant === 'primary'
        ? 'bg-blue-50 text-blue-700'
        : 'bg-gray-50 text-gray-600'
    )}
  >
    {text}
  </span>
)

export default function BusinessCard({ business }: BusinessCardProps) {
  const [imageError, setImageError] = useState(false)

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 3)
  }

  const socialLinks = Object.entries(business.social_media || {}).map(([type, url]) => (
    url && <SocialIcon key={type} type={type as SocialLink['type']} url={url} />
  )).filter(Boolean)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden rounded-lg bg-white shadow transition-shadow hover:shadow-md"
    >
      <div className="relative h-48 w-full bg-gray-100">
        {!imageError ? (
          <Image
            src={business.logo_url}
            alt={business.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary-100 to-primary-50">
            <span className="text-4xl font-bold text-primary-600 tracking-wider">
              {getInitials(business.name)}
            </span>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-900">{business.name}</h3>
          <div className="flex space-x-2">
            {socialLinks}
          </div>
        </div>
        <div className="mt-2 flex items-center space-x-2 text-sm text-gray-500">
          <Badge text={business.category} />
          {business.subcategory && (
            <Badge text={business.subcategory} variant="secondary" />
          )}
        </div>
        <p className="mt-4 text-sm text-gray-600 line-clamp-3">{business.description}</p>
        <div className="mt-4 flex items-center text-sm text-gray-500">
          <i className="fas fa-map-marker-alt mr-2 text-gray-400" />
          {business.address}
        </div>
        <div className="mt-6 flex items-center justify-between">
          <Link
            href={`/businesses/${business.id}`}
            className="text-sm font-medium text-primary-600 hover:text-primary-700"
          >
            View Details
            <span aria-hidden="true"> →</span>
          </Link>
          <button
            type="button"
            className="inline-flex items-center rounded-full bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            <i className="far fa-bookmark mr-2" />
            Save
          </button>
        </div>
      </div>
    </motion.div>
  )
} 