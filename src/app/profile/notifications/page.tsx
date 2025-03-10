'use client'

import { useState } from 'react'

type NotificationChannel = 'email' | 'push' | 'sms'
type NotificationType = 'messages' | 'reviews' | 'bookings' | 'promotions' | 'updates'

type NotificationSetting = {
  enabled: boolean
  channels: NotificationChannel[]
}

type NotificationPreferences = Record<NotificationType, NotificationSetting>

export default function NotificationsPage() {
  const [preferences, setPreferences] = useState<NotificationPreferences>({
    messages: { enabled: true, channels: ['email', 'push'] },
    reviews: { enabled: true, channels: ['email', 'push'] },
    bookings: { enabled: true, channels: ['email', 'push', 'sms'] },
    promotions: { enabled: false, channels: ['email'] },
    updates: { enabled: true, channels: ['email'] },
  })

  const notificationTypes: { type: NotificationType; label: string; description: string }[] = [
    {
      type: 'messages',
      label: 'New Messages',
      description: 'Get notified when you receive new messages from customers',
    },
    {
      type: 'reviews',
      label: 'Reviews & Ratings',
      description: 'Get notified when someone leaves a review for your business',
    },
    {
      type: 'bookings',
      label: 'Booking Updates',
      description: 'Get notified about new bookings and appointment changes',
    },
    {
      type: 'promotions',
      label: 'Promotional Updates',
      description: 'Receive updates about promotional opportunities and marketing tips',
    },
    {
      type: 'updates',
      label: 'Platform Updates',
      description: 'Stay informed about new features and platform changes',
    },
  ]

  const channels: { id: NotificationChannel; label: string; icon: string }[] = [
    { id: 'email', label: 'Email', icon: 'fa-envelope' },
    { id: 'push', label: 'Push Notifications', icon: 'fa-bell' },
    { id: 'sms', label: 'SMS', icon: 'fa-mobile-alt' },
  ]

  const handleToggleNotification = (type: NotificationType) => {
    setPreferences((prev) => ({
      ...prev,
      [type]: {
        ...prev[type],
        enabled: !prev[type].enabled,
      },
    }))
  }

  const handleToggleChannel = (type: NotificationType, channel: NotificationChannel) => {
    setPreferences((prev) => ({
      ...prev,
      [type]: {
        ...prev[type],
        channels: prev[type].channels.includes(channel)
          ? prev[type].channels.filter((c) => c !== channel)
          : [...prev[type].channels, channel],
      },
    }))
  }

  return (
    <div className="divide-y divide-gray-200">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Notification Preferences
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Choose how and when you want to be notified
        </p>
      </div>

      <div className="px-4 py-5 sm:p-6">
        <div className="space-y-6">
          {notificationTypes.map(({ type, label, description }) => (
            <div key={type} className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h4 className="text-base font-medium text-gray-900">{label}</h4>
                  <p className="mt-1 text-sm text-gray-500">{description}</p>
                </div>
                <div className="ml-4">
                  <button
                    type="button"
                    onClick={() => handleToggleNotification(type)}
                    className={`${
                      preferences[type].enabled
                        ? 'bg-primary-600'
                        : 'bg-gray-200'
                    } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2`}
                  >
                    <span
                      className={`${
                        preferences[type].enabled ? 'translate-x-5' : 'translate-x-0'
                      } pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                    >
                      <span
                        className={`${
                          preferences[type].enabled
                            ? 'opacity-0 duration-100 ease-out'
                            : 'opacity-100 duration-200 ease-in'
                        } absolute inset-0 flex h-full w-full items-center justify-center transition-opacity`}
                      >
                        <i className="fas fa-times text-gray-400 text-xs" />
                      </span>
                      <span
                        className={`${
                          preferences[type].enabled
                            ? 'opacity-100 duration-200 ease-in'
                            : 'opacity-0 duration-100 ease-out'
                        } absolute inset-0 flex h-full w-full items-center justify-center transition-opacity`}
                      >
                        <i className="fas fa-check text-primary-600 text-xs" />
                      </span>
                    </span>
                  </button>
                </div>
              </div>

              {preferences[type].enabled && (
                <div className="mt-4 border-t border-gray-200 pt-4">
                  <div className="flex flex-wrap gap-4">
                    {channels.map(({ id, label, icon }) => (
                      <label
                        key={id}
                        className="relative flex cursor-pointer items-start"
                      >
                        <div className="flex items-center h-5">
                          <input
                            type="checkbox"
                            checked={preferences[type].channels.includes(id)}
                            onChange={() => handleToggleChannel(type, id)}
                            className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                          />
                        </div>
                        <div className="ml-2 flex items-center">
                          <i className={`fas ${icon} text-gray-400 mr-2`} />
                          <span className="text-sm text-gray-700">{label}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <i className="fas fa-save mr-2" />
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  )
} 