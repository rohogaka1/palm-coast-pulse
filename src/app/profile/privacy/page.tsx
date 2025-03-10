'use client'

import { useState } from 'react'

interface PrivacySettings {
  profileVisibility: 'public' | 'registered' | 'private'
  showEmail: boolean
  showPhone: boolean
  showLocation: boolean
  allowMessages: boolean
  allowReviews: boolean
  twoFactorEnabled: boolean
  loginAlerts: boolean
  dataSharing: boolean
}

export default function PrivacyPage() {
  const [settings, setSettings] = useState<PrivacySettings>({
    profileVisibility: 'public',
    showEmail: false,
    showPhone: true,
    showLocation: true,
    allowMessages: true,
    allowReviews: true,
    twoFactorEnabled: false,
    loginAlerts: true,
    dataSharing: true,
  })

  const visibilityOptions = [
    {
      value: 'public',
      label: 'Public',
      description: 'Your profile is visible to everyone',
      icon: 'fa-globe',
    },
    {
      value: 'registered',
      label: 'Registered Users',
      description: 'Only registered users can view your profile',
      icon: 'fa-users',
    },
    {
      value: 'private',
      label: 'Private',
      description: 'Only you can view your profile',
      icon: 'fa-lock',
    },
  ] as const

  return (
    <div className="divide-y divide-gray-200">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Privacy & Security</h3>
        <p className="mt-1 text-sm text-gray-500">
          Manage your privacy preferences and security settings
        </p>
      </div>

      <div className="px-4 py-5 sm:p-6 space-y-6">
        {/* Profile Visibility */}
        <div>
          <label className="text-base font-medium text-gray-900">Profile Visibility</label>
          <p className="text-sm text-gray-500">Control who can see your profile</p>
          <div className="mt-4 space-y-4">
            {visibilityOptions.map(({ value, label, description, icon }) => (
              <div key={value} className="relative flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    type="radio"
                    checked={settings.profileVisibility === value}
                    onChange={() =>
                      setSettings({ ...settings, profileVisibility: value })
                    }
                    className="h-4 w-4 border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                </div>
                <div className="ml-3 flex items-center">
                  <i className={`fas ${icon} text-gray-400 mr-3`} />
                  <div>
                    <label className="text-sm font-medium text-gray-900">
                      {label}
                    </label>
                    <p className="text-sm text-gray-500">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Information Visibility */}
        <div>
          <label className="text-base font-medium text-gray-900">
            Information Visibility
          </label>
          <p className="text-sm text-gray-500">Choose what information is visible to others</p>
          <div className="mt-4 space-y-4">
            <div className="flex items-center">
              <input
                id="show-email"
                type="checkbox"
                checked={settings.showEmail}
                onChange={(e) =>
                  setSettings({ ...settings, showEmail: e.target.checked })
                }
                className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <label htmlFor="show-email" className="ml-3">
                <span className="text-sm font-medium text-gray-900">Show email address</span>
                <p className="text-sm text-gray-500">
                  Allow others to see your email address
                </p>
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="show-phone"
                type="checkbox"
                checked={settings.showPhone}
                onChange={(e) =>
                  setSettings({ ...settings, showPhone: e.target.checked })
                }
                className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <label htmlFor="show-phone" className="ml-3">
                <span className="text-sm font-medium text-gray-900">Show phone number</span>
                <p className="text-sm text-gray-500">
                  Allow others to see your phone number
                </p>
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="show-location"
                type="checkbox"
                checked={settings.showLocation}
                onChange={(e) =>
                  setSettings({ ...settings, showLocation: e.target.checked })
                }
                className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <label htmlFor="show-location" className="ml-3">
                <span className="text-sm font-medium text-gray-900">Show location</span>
                <p className="text-sm text-gray-500">
                  Display your business location on your profile
                </p>
              </label>
            </div>
          </div>
        </div>

        {/* Interaction Settings */}
        <div>
          <label className="text-base font-medium text-gray-900">
            Interaction Settings
          </label>
          <p className="text-sm text-gray-500">Control how others can interact with you</p>
          <div className="mt-4 space-y-4">
            <div className="flex items-center">
              <input
                id="allow-messages"
                type="checkbox"
                checked={settings.allowMessages}
                onChange={(e) =>
                  setSettings({ ...settings, allowMessages: e.target.checked })
                }
                className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <label htmlFor="allow-messages" className="ml-3">
                <span className="text-sm font-medium text-gray-900">Allow messages</span>
                <p className="text-sm text-gray-500">
                  Let others send you direct messages
                </p>
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="allow-reviews"
                type="checkbox"
                checked={settings.allowReviews}
                onChange={(e) =>
                  setSettings({ ...settings, allowReviews: e.target.checked })
                }
                className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <label htmlFor="allow-reviews" className="ml-3">
                <span className="text-sm font-medium text-gray-900">Allow reviews</span>
                <p className="text-sm text-gray-500">
                  Let others leave reviews on your business
                </p>
              </label>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div>
          <label className="text-base font-medium text-gray-900">Security Settings</label>
          <p className="text-sm text-gray-500">Enhance your account security</p>
          <div className="mt-4 space-y-4">
            <div className="flex items-center">
              <input
                id="two-factor"
                type="checkbox"
                checked={settings.twoFactorEnabled}
                onChange={(e) =>
                  setSettings({ ...settings, twoFactorEnabled: e.target.checked })
                }
                className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <label htmlFor="two-factor" className="ml-3">
                <span className="text-sm font-medium text-gray-900">
                  Two-factor authentication
                </span>
                <p className="text-sm text-gray-500">
                  Add an extra layer of security to your account
                </p>
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="login-alerts"
                type="checkbox"
                checked={settings.loginAlerts}
                onChange={(e) =>
                  setSettings({ ...settings, loginAlerts: e.target.checked })
                }
                className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <label htmlFor="login-alerts" className="ml-3">
                <span className="text-sm font-medium text-gray-900">Login alerts</span>
                <p className="text-sm text-gray-500">
                  Get notified of new login attempts
                </p>
              </label>
            </div>
          </div>
        </div>

        {/* Data Sharing */}
        <div>
          <label className="text-base font-medium text-gray-900">Data Sharing</label>
          <p className="text-sm text-gray-500">Control how your data is used</p>
          <div className="mt-4">
            <div className="flex items-center">
              <input
                id="data-sharing"
                type="checkbox"
                checked={settings.dataSharing}
                onChange={(e) =>
                  setSettings({ ...settings, dataSharing: e.target.checked })
                }
                className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <label htmlFor="data-sharing" className="ml-3">
                <span className="text-sm font-medium text-gray-900">
                  Share usage data
                </span>
                <p className="text-sm text-gray-500">
                  Help us improve Palm Coast Hub by sharing anonymous usage data
                </p>
              </label>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <i className="fas fa-save mr-2" />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
} 