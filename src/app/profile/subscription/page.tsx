'use client'

import { useState } from 'react'
import { PLAN_FEATURES, type SubscriptionPlan } from '@/services/stripe/config'

interface BillingHistory {
  id: string
  date: string
  amount: number
  status: 'paid' | 'pending' | 'failed'
  description: string
}

interface PaymentMethod {
  id: string
  type: 'card'
  last4: string
  expiry: string
  brand: string
  isDefault: boolean
}

export default function SubscriptionPage() {
  const [currentPlan] = useState<SubscriptionPlan>('STARTER')
  const [billingHistory] = useState<BillingHistory[]>([
    {
      id: 'INV-001',
      date: '2024-03-01',
      amount: 0,
      status: 'paid',
      description: 'Starter Plan - March 2024',
    },
    {
      id: 'INV-002',
      date: '2024-02-01',
      amount: 0,
      status: 'paid',
      description: 'Starter Plan - February 2024',
    },
  ])
  const [paymentMethods] = useState<PaymentMethod[]>([
    {
      id: 'pm_1',
      type: 'card',
      last4: '4242',
      expiry: '12/24',
      brand: 'visa',
      isDefault: true,
    },
  ])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div className="divide-y divide-gray-200">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Subscription & Billing
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Manage your subscription plan and billing information
        </p>
      </div>

      <div className="px-4 py-5 sm:p-6 space-y-6">
        {/* Current Plan */}
        <div>
          <h4 className="text-base font-medium text-gray-900">Current Plan</h4>
          <div className="mt-4 bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <h5 className="text-lg font-medium text-gray-900">
                  {PLAN_FEATURES[currentPlan].name}
                </h5>
                <p className="text-sm text-gray-500">
                  {formatCurrency(PLAN_FEATURES[currentPlan].price)}/month
                </p>
              </div>
              <button
                type="button"
                className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Change Plan
              </button>
            </div>
            <div className="mt-4">
              <h6 className="text-sm font-medium text-gray-900">Plan Features:</h6>
              <ul className="mt-2 space-y-2">
                {PLAN_FEATURES[currentPlan].features.map((feature) => (
                  <li key={feature} className="flex items-start text-sm text-gray-500">
                    <svg
                      className="h-5 w-5 text-green-500 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div>
          <div className="flex items-center justify-between">
            <h4 className="text-base font-medium text-gray-900">Payment Methods</h4>
            <button
              type="button"
              className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <i className="fas fa-plus mr-2" />
              Add Payment Method
            </button>
          </div>
          <div className="mt-4 space-y-4">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className="flex items-center justify-between bg-white p-4 border rounded-lg"
              >
                <div className="flex items-center">
                  {method.brand === 'visa' && (
                    <i className="fab fa-cc-visa text-2xl text-blue-600 mr-3" />
                  )}
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      •••• {method.last4}
                    </p>
                    <p className="text-sm text-gray-500">
                      Expires {method.expiry}
                      {method.isDefault && (
                        <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Default
                        </span>
                      )}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <i className="fas fa-trash" />
                  <span className="sr-only">Remove payment method</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Billing History */}
        <div>
          <h4 className="text-base font-medium text-gray-900">Billing History</h4>
          <div className="mt-4 bg-white border rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {billingHistory.map((invoice) => (
                  <tr key={invoice.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatDate(invoice.date)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {invoice.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatCurrency(invoice.amount)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          invoice.status === 'paid'
                            ? 'bg-green-100 text-green-800'
                            : invoice.status === 'pending'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        type="button"
                        className="text-primary-600 hover:text-primary-900"
                      >
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Cancel Subscription */}
        <div className="border-t pt-6">
          <div className="rounded-lg bg-red-50 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <i className="fas fa-exclamation-circle text-red-400" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">
                  Cancel Subscription
                </h3>
                <div className="mt-2 text-sm text-red-700">
                  <p>
                    Canceling your subscription will downgrade your account to the free
                    plan at the end of your current billing period.
                  </p>
                </div>
                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex items-center px-3 py-2 border border-red-300 shadow-sm text-sm leading-4 font-medium rounded-md text-red-700 bg-red-50 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Cancel Subscription
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 