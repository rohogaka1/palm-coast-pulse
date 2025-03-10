'use client'

import { useState } from 'react'

type Theme = 'light' | 'dark' | 'system'
type ColorScheme = 'blue' | 'green' | 'purple' | 'orange'
type FontSize = 'small' | 'medium' | 'large'

interface AppearanceSettings {
  theme: Theme
  colorScheme: ColorScheme
  fontSize: FontSize
  reducedMotion: boolean
  compactView: boolean
}

export default function AppearancePage() {
  const [settings, setSettings] = useState<AppearanceSettings>({
    theme: 'system',
    colorScheme: 'blue',
    fontSize: 'medium',
    reducedMotion: false,
    compactView: false,
  })

  const themes: { value: Theme; label: string; icon: string }[] = [
    { value: 'light', label: 'Light', icon: 'fa-sun' },
    { value: 'dark', label: 'Dark', icon: 'fa-moon' },
    { value: 'system', label: 'System', icon: 'fa-desktop' },
  ]

  const colorSchemes: { value: ColorScheme; label: string; class: string }[] = [
    { value: 'blue', label: 'Blue', class: 'bg-blue-500' },
    { value: 'green', label: 'Green', class: 'bg-green-500' },
    { value: 'purple', label: 'Purple', class: 'bg-purple-500' },
    { value: 'orange', label: 'Orange', class: 'bg-orange-500' },
  ]

  const fontSizes: { value: FontSize; label: string }[] = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' },
  ]

  return (
    <div className="divide-y divide-gray-200">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Appearance</h3>
        <p className="mt-1 text-sm text-gray-500">
          Customize how Palm Coast Hub looks and feels
        </p>
      </div>

      <div className="px-4 py-5 sm:p-6 space-y-6">
        {/* Theme Selection */}
        <div>
          <label className="text-base font-medium text-gray-900">Theme</label>
          <p className="text-sm text-gray-500">Choose your preferred theme</p>
          <div className="mt-4 grid grid-cols-3 gap-4">
            {themes.map(({ value, label, icon }) => (
              <button
                key={value}
                type="button"
                onClick={() => setSettings({ ...settings, theme: value })}
                className={`${
                  settings.theme === value
                    ? 'border-primary-500 ring-2 ring-primary-500'
                    : 'border-gray-200'
                } relative flex flex-col items-center justify-center rounded-lg border p-4 hover:border-primary-400 focus:outline-none`}
              >
                <i className={`fas ${icon} text-xl ${settings.theme === value ? 'text-primary-500' : 'text-gray-400'}`} />
                <span className="mt-2 text-sm font-medium text-gray-900">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Color Scheme */}
        <div>
          <label className="text-base font-medium text-gray-900">Color Scheme</label>
          <p className="text-sm text-gray-500">Select your preferred color scheme</p>
          <div className="mt-4 flex flex-wrap gap-4">
            {colorSchemes.map(({ value, label, class: bgClass }) => (
              <button
                key={value}
                type="button"
                onClick={() => setSettings({ ...settings, colorScheme: value })}
                className={`${
                  settings.colorScheme === value
                    ? 'ring-2 ring-offset-2 ring-primary-500'
                    : ''
                } relative h-10 w-10 rounded-full focus:outline-none`}
              >
                <span className="sr-only">{label}</span>
                <span
                  className={`absolute inset-0 rounded-full ${bgClass}`}
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Font Size */}
        <div>
          <label className="text-base font-medium text-gray-900">Font Size</label>
          <p className="text-sm text-gray-500">Adjust the text size</p>
          <div className="mt-4">
            <div className="flex items-center justify-between max-w-lg">
              <div className="flex items-center space-x-3">
                <i className="fas fa-text-height text-gray-400" />
                <select
                  value={settings.fontSize}
                  onChange={(e) => setSettings({ ...settings, fontSize: e.target.value as FontSize })}
                  className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
                >
                  {fontSizes.map(({ value, label }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
              <span className="text-sm text-gray-500">Aa</span>
            </div>
          </div>
        </div>

        {/* Accessibility Options */}
        <div>
          <label className="text-base font-medium text-gray-900">Accessibility</label>
          <p className="text-sm text-gray-500">Customize your accessibility preferences</p>
          <div className="mt-4 space-y-4">
            <div className="flex items-center">
              <input
                id="reduced-motion"
                type="checkbox"
                checked={settings.reducedMotion}
                onChange={(e) => setSettings({ ...settings, reducedMotion: e.target.checked })}
                className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <label htmlFor="reduced-motion" className="ml-3">
                <span className="text-sm font-medium text-gray-900">Reduced motion</span>
                <p className="text-sm text-gray-500">Minimize animations and transitions</p>
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="compact-view"
                type="checkbox"
                checked={settings.compactView}
                onChange={(e) => setSettings({ ...settings, compactView: e.target.checked })}
                className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <label htmlFor="compact-view" className="ml-3">
                <span className="text-sm font-medium text-gray-900">Compact view</span>
                <p className="text-sm text-gray-500">Show more content with less spacing</p>
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