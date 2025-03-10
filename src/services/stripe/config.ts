import { loadStripe } from '@stripe/stripe-js'

const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

if (!stripePublishableKey) {
  throw new Error('Missing Stripe publishable key')
}

export const stripePromise = loadStripe(stripePublishableKey)

// Subscription plan IDs
export const SUBSCRIPTION_PLANS = {
  STARTER: 'price_starter',
  GROWTH: 'price_growth',
  PREMIUM: 'price_premium',
} as const

export type SubscriptionPlan = keyof typeof SUBSCRIPTION_PLANS

export interface PlanFeatures {
  name: string
  price: number
  features: string[]
  planId: string
}

export const PLAN_FEATURES: Record<SubscriptionPlan, PlanFeatures> = {
  STARTER: {
    name: 'Starter',
    price: 0,
    features: [
      'Basic business listing',
      'Business profile page',
      'Category listing',
      'Contact form',
    ],
    planId: SUBSCRIPTION_PLANS.STARTER,
  },
  GROWTH: {
    name: 'Growth',
    price: 50,
    features: [
      'Everything in Starter',
      'Featured listing',
      'Email support',
      '2 social media posts per week',
      'Analytics dashboard',
      'Customer reviews',
    ],
    planId: SUBSCRIPTION_PLANS.GROWTH,
  },
  PREMIUM: {
    name: 'Premium',
    price: 100,
    features: [
      'Everything in Growth',
      'Priority listing placement',
      'Priority support',
      'Daily social media posts',
      'Advanced analytics',
      'Competitor insights',
      'Marketing consultation',
    ],
    planId: SUBSCRIPTION_PLANS.PREMIUM,
  },
} 