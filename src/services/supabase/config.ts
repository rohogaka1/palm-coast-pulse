import { createClient } from '@supabase/supabase-js'
import { Database } from '@/types/supabase'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

export type Business = {
  id: string
  created_at: string
  name: string
  description: string
  address: string
  phone: string
  email: string
  website?: string
  category: string
  subcategory?: string
  logo_url?: string
  social_media?: {
    facebook?: string
    instagram?: string
    linkedin?: string
    twitter?: string
  }
  status: 'active' | 'pending' | 'inactive'
  featured: boolean
} 