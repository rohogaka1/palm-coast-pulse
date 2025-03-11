'use client'

import Link from 'next/link'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Explore Neighborhoods', href: '/neighborhoods' },
  { name: 'Businesses', href: '/businesses' },
  { name: 'Business Stories', href: '/business-stories' },
  { name: 'About', href: '/about' },
]

export default function Navigation() {
  const { data: session, status } = useSession()

  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-primary-600">
              Palm Coast
            </Link>
            <div className="ml-10 hidden space-x-8 lg:block">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-primary-600"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="ml-10 flex items-center space-x-4">
            {status === 'loading' ? (
              <div className="h-8 w-8 rounded-full bg-gray-200 animate-pulse" />
            ) : session ? (
              <div className="flex items-center gap-4">
                <Link
                  href="/profile"
                  className="btn-secondary group"
                >
                  <span>My Profile</span>
                  <svg
                    className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </Link>
                <button
                  onClick={() => signOut()}
                  className="btn-secondary border-2 border-gray-300 hover:border-gray-400"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link
                  href="/auth/signin"
                  className="btn-secondary group"
                >
                  <span>Sign In</span>
                  <svg
                    className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                </Link>
                <Link
                  href="/register"
                  className="btn-primary group"
                >
                  <span>Get Started</span>
                  <svg
                    className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
} 