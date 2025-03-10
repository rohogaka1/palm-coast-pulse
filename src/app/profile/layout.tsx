'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const sidebarNavigation = [
  {
    name: 'Profile Overview',
    href: '/profile',
    icon: 'fas fa-user-circle',
  },
  {
    name: 'Business Settings',
    href: '/profile/business',
    icon: 'fas fa-store',
  },
  {
    name: 'Notification Preferences',
    href: '/profile/notifications',
    icon: 'fas fa-bell',
  },
  {
    name: 'Appearance',
    href: '/profile/appearance',
    icon: 'fas fa-paint-brush',
  },
  {
    name: 'Privacy & Security',
    href: '/profile/privacy',
    icon: 'fas fa-shield-alt',
  },
  {
    name: 'Subscription & Billing',
    href: '/profile/subscription',
    icon: 'fas fa-credit-card',
  },
]

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-3">
            <nav className="space-y-1">
              {sidebarNavigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-gray-700 hover:text-primary-700 hover:bg-gray-50'
                    }`}
                  >
                    <i
                      className={`${item.icon} w-6 h-6 mr-3 ${
                        isActive ? 'text-primary-700' : 'text-gray-400 group-hover:text-primary-700'
                      }`}
                    />
                    {item.name}
                  </Link>
                )
              })}
            </nav>
          </aside>

          {/* Main content */}
          <main className="mt-8 lg:col-span-9 lg:mt-0">
            <div className="bg-white shadow rounded-lg">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
} 