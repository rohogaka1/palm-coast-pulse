import Link from 'next/link'

export const metadata = {
  title: 'Moving Checklist - Palm Coast Relocation Guide',
  description: 'Comprehensive moving checklist and timeline for relocating to Palm Coast, Florida.',
}

export default function MovingChecklistPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Your Palm Coast Moving Checklist
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Stay organized with our comprehensive moving checklist. We've broken down the moving process 
            into manageable steps to help make your transition to Palm Coast smooth and stress-free.
          </p>
          <div className="mt-8 flex justify-center gap-x-4">
            <button className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">
              Download PDF Checklist
            </button>
            <Link
              href="/contact"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Get Moving Assistance
            </Link>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-16">
          <div className="grid gap-8">
            {timelineItems.map((item, index) => (
              <div key={item.title} className="relative">
                <div className="flex items-start gap-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-white">
                    {item.timeframe}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <ul className="mt-4 space-y-4">
                      {item.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg
                              className="h-6 w-6 text-primary-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                          </div>
                          <p className="ml-3 text-gray-600">{task}</p>
                        </li>
                      ))}
                    </ul>
                    {item.resources && (
                      <div className="mt-4 rounded-md bg-primary-50 p-4">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <i className="fas fa-link text-primary-600"></i>
                          </div>
                          <div className="ml-3">
                            <h4 className="text-sm font-medium text-primary-800">
                              Helpful Resources
                            </h4>
                            <div className="mt-2 text-sm text-primary-700">
                              <ul className="list-disc space-y-1 pl-5">
                                {item.resources.map((resource, resourceIndex) => (
                                  <li key={resourceIndex}>
                                    <Link
                                      href={resource.href}
                                      className="hover:text-primary-900 hover:underline"
                                    >
                                      {resource.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {index < timelineItems.length - 1 && (
                  <div className="absolute left-5 top-10 -ml-px h-full w-0.5 bg-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Additional Resources</h2>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {additionalResources.map((resource) => (
              <div
                key={resource.title}
                className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm hover:shadow flex items-center space-x-3"
              >
                <div className="flex-shrink-0">
                  <i className={`${resource.icon} text-2xl text-primary-600`}></i>
                </div>
                <div className="flex-1 min-w-0">
                  <Link href={resource.href} className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-medium text-gray-900">{resource.title}</p>
                    <p className="text-sm text-gray-500 truncate">{resource.description}</p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const timelineItems = [
  {
    timeframe: '8w',
    title: '8 Weeks Before Moving',
    tasks: [
      'Research Palm Coast neighborhoods and housing options',
      'Get quotes from moving companies',
      'Create a moving budget and timeline',
      'Start decluttering and organizing belongings',
      'Research schools if moving with children',
      'Begin gathering important documents'
    ],
    resources: [
      {
        title: 'Palm Coast Neighborhood Guide',
        href: '/neighborhoods'
      },
      {
        title: 'School Information',
        href: '/education'
      },
      {
        title: 'Moving Cost Calculator',
        href: '/resources/moving-calculator'
      }
    ]
  },
  {
    timeframe: '6w',
    title: '6 Weeks Before Moving',
    tasks: [
      'Book moving company or rental truck',
      'Begin packing non-essential items',
      'Plan new home layout',
      'Schedule utility transfers',
      'Research Florida driver\'s license requirements',
      'Plan for pet transportation if needed'
    ],
    resources: [
      {
        title: 'Florida DMV Information',
        href: '/resources/dmv-guide'
      },
      {
        title: 'Utility Setup Guide',
        href: '/resources/utilities'
      }
    ]
  },
  {
    timeframe: '4w',
    title: '4 Weeks Before Moving',
    tasks: [
      'Change address with USPS',
      'Notify important parties of address change',
      'Schedule final walk-through of new home',
      'Continue packing room by room',
      'Plan for specialty item moving',
      'Research local medical providers'
    ],
    resources: [
      {
        title: 'Healthcare Directory',
        href: '/healthcare'
      },
      {
        title: 'Change of Address Checklist',
        href: '/resources/address-change'
      }
    ]
  },
  {
    timeframe: '2w',
    title: '2 Weeks Before Moving',
    tasks: [
      'Confirm moving company details',
      'Pack essential items box',
      'Transfer or close local memberships',
      'Schedule cleaning services',
      'Plan for moving day meals',
      'Arrange for child or pet care during move'
    ]
  },
  {
    timeframe: '1w',
    title: 'Final Week',
    tasks: [
      'Pack remaining items',
      'Clean current home',
      'Withdraw cash for moving expenses',
      'Prepare important documents folder',
      'Check weather forecast',
      'Pack personal items and valuables'
    ]
  }
]

const additionalResources = [
  {
    title: 'Moving Services Directory',
    description: 'Find reliable local moving companies and services',
    icon: 'fas fa-truck-moving',
    href: '/resources/moving-services'
  },
  {
    title: 'New Resident Guide',
    description: 'Essential information for new Palm Coast residents',
    icon: 'fas fa-home',
    href: '/resources/new-residents'
  },
  {
    title: 'School Registration',
    description: 'Guide to enrolling children in local schools',
    icon: 'fas fa-graduation-cap',
    href: '/resources/school-registration'
  },
  {
    title: 'Utility Setup',
    description: 'Information on local utility providers and setup',
    icon: 'fas fa-plug',
    href: '/resources/utilities'
  },
  {
    title: 'Community Groups',
    description: 'Connect with local community organizations',
    icon: 'fas fa-users',
    href: '/resources/community'
  },
  {
    title: 'Local Services',
    description: 'Directory of essential local services',
    icon: 'fas fa-concierge-bell',
    href: '/resources/local-services'
  }
] 