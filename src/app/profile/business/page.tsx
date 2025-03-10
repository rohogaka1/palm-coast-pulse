'use client'

import { useState } from 'react'

type DaySchedule = {
  open: string
  close: string
  closed: boolean
}

type WeekSchedule = {
  monday: DaySchedule
  tuesday: DaySchedule
  wednesday: DaySchedule
  thursday: DaySchedule
  friday: DaySchedule
  saturday: DaySchedule
  sunday: DaySchedule
}

type BusinessFormData = {
  businessName: string
  category: string
  subcategory: string
  description: string
  address: string
  phone: string
  website: string
  hours: WeekSchedule
  socialMedia: {
    facebook: string
    instagram: string
    twitter: string
    linkedin: string
  }
}

export default function BusinessSettingsPage() {
  const [formData, setFormData] = useState<BusinessFormData>({
    businessName: 'My Business',
    category: 'retail',
    subcategory: 'clothing',
    description: 'A local business serving the Palm Coast community.',
    address: '123 Palm Coast Pkwy, Palm Coast, FL 32137',
    phone: '(386) 555-0123',
    website: 'www.mybusiness.com',
    hours: {
      monday: { open: '09:00', close: '17:00', closed: false },
      tuesday: { open: '09:00', close: '17:00', closed: false },
      wednesday: { open: '09:00', close: '17:00', closed: false },
      thursday: { open: '09:00', close: '17:00', closed: false },
      friday: { open: '09:00', close: '17:00', closed: false },
      saturday: { open: '10:00', close: '15:00', closed: false },
      sunday: { open: '00:00', close: '00:00', closed: true },
    },
    socialMedia: {
      facebook: 'https://facebook.com/mybusiness',
      instagram: 'https://instagram.com/mybusiness',
      twitter: '',
      linkedin: '',
    },
  })

  const categories = [
    'Retail',
    'Restaurants',
    'Services',
    'Healthcare',
    'Entertainment',
    'Real Estate',
  ] as const

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add save logic here
  }

  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'] as const

  return (
    <div className="divide-y divide-gray-200">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Business Settings</h3>
        <p className="mt-1 text-sm text-gray-500">
          Manage your business information and preferences
        </p>
      </div>

      <div className="px-4 py-5 sm:p-6">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <div>
            <h4 className="text-md font-medium text-gray-900 mb-4">Basic Information</h4>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">
                  Business Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  id="category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                >
                  {categories.map((category) => (
                    <option key={category.toLowerCase()} value={category.toLowerCase()}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  id="description"
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-md font-medium text-gray-900 mb-4">Contact Information</h4>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                  Website
                </label>
                <input
                  type="url"
                  id="website"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-md font-medium text-gray-900 mb-4">Business Hours</h4>
            <div className="space-y-4">
              {days.map((day) => (
                <div key={day} className="flex items-center space-x-4">
                  <div className="w-28">
                    <span className="text-sm font-medium text-gray-700 capitalize">
                      {day}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="time"
                      value={formData.hours[day].open}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          hours: {
                            ...formData.hours,
                            [day]: { ...formData.hours[day], open: e.target.value },
                          },
                        })
                      }
                      disabled={formData.hours[day].closed}
                      className="rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm disabled:bg-gray-100"
                    />
                    <span className="text-gray-500">to</span>
                    <input
                      type="time"
                      value={formData.hours[day].close}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          hours: {
                            ...formData.hours,
                            [day]: { ...formData.hours[day], close: e.target.value },
                          },
                        })
                      }
                      disabled={formData.hours[day].closed}
                      className="rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm disabled:bg-gray-100"
                    />
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.hours[day].closed}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            hours: {
                              ...formData.hours,
                              [day]: { ...formData.hours[day], closed: e.target.checked },
                            },
                          })
                        }
                        className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Closed</span>
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-md font-medium text-gray-900 mb-4">Social Media</h4>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="facebook" className="block text-sm font-medium text-gray-700">
                  Facebook
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
                    facebook.com/
                  </span>
                  <input
                    type="text"
                    id="facebook"
                    value={formData.socialMedia.facebook.replace('https://facebook.com/', '')}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        socialMedia: {
                          ...formData.socialMedia,
                          facebook: `https://facebook.com/${e.target.value}`,
                        },
                      })
                    }
                    className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="instagram" className="block text-sm font-medium text-gray-700">
                  Instagram
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
                    instagram.com/
                  </span>
                  <input
                    type="text"
                    id="instagram"
                    value={formData.socialMedia.instagram.replace('https://instagram.com/', '')}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        socialMedia: {
                          ...formData.socialMedia,
                          instagram: `https://instagram.com/${e.target.value}`,
                        },
                      })
                    }
                    className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <i className="fas fa-save mr-2" />
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  )
} 