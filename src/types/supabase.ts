export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      businesses: {
        Row: {
          id: string
          created_at: string
          name: string
          description: string
          address: string
          phone: string
          email: string
          website: string | null
          category: string
          subcategory: string | null
          logo_url: string | null
          social_media: Json | null
          status: 'active' | 'pending' | 'inactive'
          featured: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          description: string
          address: string
          phone: string
          email: string
          website?: string | null
          category: string
          subcategory?: string | null
          logo_url?: string | null
          social_media?: Json | null
          status?: 'active' | 'pending' | 'inactive'
          featured?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          description?: string
          address?: string
          phone?: string
          email?: string
          website?: string | null
          category?: string
          subcategory?: string | null
          logo_url?: string | null
          social_media?: Json | null
          status?: 'active' | 'pending' | 'inactive'
          featured?: boolean
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
} 