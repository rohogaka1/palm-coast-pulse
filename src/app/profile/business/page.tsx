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
    youtube: string
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
      youtube: '',
    },
  })

  interface ListingFormData {
    id?: string
    title: string
    description: string
    image: string
    price?: string
    category: string
    tags: string[]
    contactEmail: string
    contactPhone: string
    validUntil: string
    isFeatured: boolean
    status: 'active' | 'draft' | 'expired'
  }

  const [listings, setListings] = useState<ListingFormData[]>([
    {
      id: '1',
      title: 'Featured Business Listing',
      description: 'Special promotion for our premium services',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
      price: '99.99',
      category: 'Services',
      tags: ['premium', 'special-offer'],
      contactEmail: 'contact@business.com',
      contactPhone: '(386) 555-0123',
      validUntil: '2024-12-31',
      isFeatured: true,
      status: 'active'
    }
  ])

  const [showNewListingForm, setShowNewListingForm] = useState(false)
  const [editingListing, setEditingListing] = useState<string | null>(null)
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof ListingFormData, string>>>({})
  const [imagePreview, setImagePreview] = useState<string>('')

  const emptyListingForm: ListingFormData = {
    title: '',
    description: '',
    image: '',
    price: '',
    category: '',
    tags: [],
    contactEmail: '',
    contactPhone: '',
    validUntil: new Date().toISOString().split('T')[0],
    isFeatured: false,
    status: 'draft'
  }

  const [newListing, setNewListing] = useState<ListingFormData>(emptyListingForm)

  const categories = [
    'Retail',
    'Restaurants',
    'Services',
    'Healthcare',
    'Entertainment',
    'Real Estate',
  ] as const

  const validateForm = (data: ListingFormData): boolean => {
    const errors: Partial<Record<keyof ListingFormData, string>> = {}
    
    if (!data.title.trim()) errors.title = 'Title is required'
    if (!data.description.trim()) errors.description = 'Description is required'
    if (!data.category.trim()) errors.category = 'Category is required'
    if (data.price && !/^\d+(\.\d{1,2})?$/.test(data.price)) errors.price = 'Invalid price format'
    if (!data.contactEmail.trim()) errors.contactEmail = 'Contact email is required'
    if (data.contactEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.contactEmail)) {
      errors.contactEmail = 'Invalid email format'
    }
    if (!data.contactPhone.trim()) errors.contactPhone = 'Contact phone is required'
    if (data.contactPhone && !/^\(\d{3}\) \d{3}-\d{4}$/.test(data.contactPhone)) {
      errors.contactPhone = 'Invalid phone format (XXX) XXX-XXXX'
    }
    if (!data.validUntil) errors.validUntil = 'Valid until date is required'

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleImageChange = (url: string) => {
    setImagePreview(url)
    if (editingListing) {
      setListings(listings.map(l => 
        l.id === editingListing ? { ...l, image: url } : l
      ))
    } else {
      setNewListing({ ...newListing, image: url })
    }
  }

  const handleTagsChange = (value: string) => {
    const tags = value.split(',').map(tag => tag.trim()).filter(Boolean)
    if (editingListing) {
      setListings(listings.map(l => 
        l.id === editingListing ? { ...l, tags } : l
      ))
    } else {
      setNewListing({ ...newListing, tags })
    }
  }

  const handleSaveListing = () => {
    const listingData = editingListing 
      ? listings.find(l => l.id === editingListing) || newListing
      : newListing

    if (!validateForm(listingData)) return

    if (editingListing) {
      setListings(listings.map(l => 
        l.id === editingListing ? { ...listingData, id: editingListing } : l
      ))
      setEditingListing(null)
    } else {
      setListings([...listings, { ...listingData, id: String(listings.length + 1) }])
    }

    setNewListing(emptyListingForm)
    setShowNewListingForm(false)
    setImagePreview('')
    setFormErrors({})
  }

  const handleEditListing = (id: string) => {
    const listing = listings.find(l => l.id === id)
    if (listing) {
      setNewListing(listing)
      setEditingListing(id)
      setShowNewListingForm(true)
      setImagePreview(listing.image)
    }
  }

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

          {/* Business Listings */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-md font-medium text-gray-900">Business Listings</h4>
              <button
                type="button"
                onClick={() => {
                  if (!showNewListingForm) {
                    setNewListing(emptyListingForm)
                    setEditingListing(null)
                    setImagePreview('')
                    setFormErrors({})
                  }
                  setShowNewListingForm(!showNewListingForm)
                }}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                {showNewListingForm ? 'Cancel' : 'Add New Listing'}
              </button>
            </div>

            {showNewListingForm && (
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="listingTitle" className="block text-sm font-medium text-gray-700">
                        Listing Title *
                      </label>
                      <input
                        type="text"
                        id="listingTitle"
                        value={newListing.title}
                        onChange={(e) => setNewListing({ ...newListing, title: e.target.value })}
                        className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm ${
                          formErrors.title ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-primary-500'
                        }`}
                      />
                      {formErrors.title && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.title}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="listingDescription" className="block text-sm font-medium text-gray-700">
                        Description *
                      </label>
                      <textarea
                        id="listingDescription"
                        rows={3}
                        value={newListing.description}
                        onChange={(e) => setNewListing({ ...newListing, description: e.target.value })}
                        className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm ${
                          formErrors.description ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-primary-500'
                        }`}
                      />
                      {formErrors.description && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.description}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="listingPrice" className="block text-sm font-medium text-gray-700">
                        Price
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input
                          type="text"
                          id="listingPrice"
                          value={newListing.price}
                          onChange={(e) => setNewListing({ ...newListing, price: e.target.value })}
                          className={`pl-7 block w-full rounded-md shadow-sm sm:text-sm ${
                            formErrors.price ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-primary-500'
                          }`}
                          placeholder="0.00"
                        />
                      </div>
                      {formErrors.price && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.price}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="listingCategory" className="block text-sm font-medium text-gray-700">
                        Category *
                      </label>
                      <select
                        id="listingCategory"
                        value={newListing.category}
                        onChange={(e) => setNewListing({ ...newListing, category: e.target.value })}
                        className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm ${
                          formErrors.category ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-primary-500'
                        }`}
                      >
                        <option value="">Select a category</option>
                        {categories.map((category) => (
                          <option key={category.toLowerCase()} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                      {formErrors.category && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.category}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="listingImage" className="block text-sm font-medium text-gray-700">
                        Image URL
                      </label>
                      <input
                        type="url"
                        id="listingImage"
                        value={newListing.image}
                        onChange={(e) => handleImageChange(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                      />
                      {imagePreview && (
                        <div className="mt-2 relative rounded-lg overflow-hidden h-40">
                          <img
                            src={imagePreview}
                            alt="Preview"
                            className="w-full h-full object-cover"
                            onError={() => setImagePreview('')}
                          />
                        </div>
                      )}
                    </div>

                    <div>
                      <label htmlFor="listingTags" className="block text-sm font-medium text-gray-700">
                        Tags (comma-separated)
                      </label>
                      <input
                        type="text"
                        id="listingTags"
                        value={newListing.tags.join(', ')}
                        onChange={(e) => handleTagsChange(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                        placeholder="premium, special-offer, etc."
                      />
                    </div>

                    <div>
                      <label htmlFor="listingEmail" className="block text-sm font-medium text-gray-700">
                        Contact Email *
                      </label>
                      <input
                        type="email"
                        id="listingEmail"
                        value={newListing.contactEmail}
                        onChange={(e) => setNewListing({ ...newListing, contactEmail: e.target.value })}
                        className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm ${
                          formErrors.contactEmail ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-primary-500'
                        }`}
                      />
                      {formErrors.contactEmail && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.contactEmail}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="listingPhone" className="block text-sm font-medium text-gray-700">
                        Contact Phone *
                      </label>
                      <input
                        type="tel"
                        id="listingPhone"
                        value={newListing.contactPhone}
                        onChange={(e) => setNewListing({ ...newListing, contactPhone: e.target.value })}
                        className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm ${
                          formErrors.contactPhone ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-primary-500'
                        }`}
                        placeholder="(XXX) XXX-XXXX"
                      />
                      {formErrors.contactPhone && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.contactPhone}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="listingValidUntil" className="block text-sm font-medium text-gray-700">
                        Valid Until *
                      </label>
                      <input
                        type="date"
                        id="listingValidUntil"
                        value={newListing.validUntil}
                        onChange={(e) => setNewListing({ ...newListing, validUntil: e.target.value })}
                        className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm ${
                          formErrors.validUntil ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-primary-500'
                        }`}
                        min={new Date().toISOString().split('T')[0]}
                      />
                      {formErrors.validUntil && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.validUntil}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="isFeatured"
                      checked={newListing.isFeatured}
                      onChange={(e) => setNewListing({ ...newListing, isFeatured: e.target.checked })}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <label htmlFor="isFeatured" className="ml-2 block text-sm text-gray-700">
                      Featured Listing
                    </label>
                  </div>

                  <div className="flex items-center space-x-4">
                    <select
                      value={newListing.status}
                      onChange={(e) => setNewListing({ ...newListing, status: e.target.value as ListingFormData['status'] })}
                      className="rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                    >
                      <option value="draft">Draft</option>
                      <option value="active">Active</option>
                      <option value="expired">Expired</option>
                    </select>

                    <button
                      type="button"
                      onClick={handleSaveListing}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    >
                      {editingListing ? 'Update Listing' : 'Create Listing'}
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-4">
              {listings.map((listing) => (
                <div key={listing.id} className="bg-white shadow rounded-lg overflow-hidden">
                  <div className="flex">
                    {listing.image && (
                      <div className="flex-shrink-0 w-48 h-48 relative">
                        <img
                          src={listing.image}
                          alt={listing.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/200x200?text=No+Image'
                          }}
                        />
                      </div>
                    )}
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h5 className="text-lg font-medium text-gray-900">{listing.title}</h5>
                          <p className="mt-1 text-sm text-gray-500">{listing.description}</p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {listing.isFeatured && (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                Featured
                              </span>
                            )}
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              listing.status === 'active' ? 'bg-green-100 text-green-800' :
                              listing.status === 'draft' ? 'bg-gray-100 text-gray-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {listing.status.charAt(0).toUpperCase() + listing.status.slice(1)}
                            </span>
                            {listing.category && (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                {listing.category}
                              </span>
                            )}
                            {listing.tags.map((tag) => (
                              <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="mt-4 text-sm text-gray-500">
                            <p>Contact: {listing.contactEmail} | {listing.contactPhone}</p>
                            <p>Valid until: {new Date(listing.validUntil).toLocaleDateString()}</p>
                            {listing.price && <p>Price: ${listing.price}</p>}
                          </div>
                        </div>
                        <div className="ml-4 flex-shrink-0 flex space-x-2">
                          <button
                            type="button"
                            onClick={() => handleEditListing(listing.id!)}
                            className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setListings(listings.filter(l => l.id !== listing.id))
                            }}
                            className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
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

              <div>
                <label htmlFor="youtube" className="block text-sm font-medium text-gray-700">
                  YouTube Channel
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
                    youtube.com/
                  </span>
                  <input
                    type="text"
                    id="youtube"
                    value={formData.socialMedia.youtube.replace('https://youtube.com/', '')}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        socialMedia: {
                          ...formData.socialMedia,
                          youtube: `https://youtube.com/${e.target.value}`,
                        },
                      })
                    }
                    placeholder="channel/YOUR_CHANNEL_ID"
                    className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  />
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  Enter your channel ID or custom URL
                </p>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
} 