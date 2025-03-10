export interface Business {
  id: string
  name: string
  description: string
  address: string
  logo_url: string
  category: string
  subcategory: string
  social_media?: {
    facebook?: string
    twitter?: string
    instagram?: string
    linkedin?: string
  }
}

export const sampleBusinesses: Business[] = [
  {
    id: '1',
    name: 'European Village',
    description: 'A unique shopping and entertainment destination featuring restaurants, boutiques, and live entertainment in a European-inspired setting.',
    address: '101 Palm Harbor Pkwy, Palm Coast, FL 32137',
    logo_url: 'https://images.unsplash.com/photo-1573108724029-4c46571d6490?w=800&auto=format&fit=crop&q=60',
    category: 'Shopping',
    subcategory: 'Entertainment',
    social_media: {
      facebook: 'https://www.facebook.com/EuropeanVillagePalmCoast',
      instagram: 'https://www.instagram.com/europeanvillage'
    }
  },
  {
    id: '2',
    name: 'Metro Diner Palm Coast',
    description: 'Classic American diner serving generous portions of traditional comfort food in a warm, welcoming atmosphere.',
    address: '250 Palm Coast Pkwy NE, Palm Coast, FL 32137',
    logo_url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&auto=format&fit=crop&q=60',
    category: 'Restaurants',
    subcategory: 'American',
    social_media: {
      facebook: 'https://www.facebook.com/MetroDinerPalmCoast',
      twitter: 'https://twitter.com/MetroDiner'
    }
  },
  {
    id: '3',
    name: 'Hammock Beach Golf Resort & Spa',
    description: 'Luxury oceanfront resort featuring world-class golf courses, a full-service spa, and multiple dining options.',
    address: '200 Ocean Crest Dr, Palm Coast, FL 32137',
    logo_url: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&auto=format&fit=crop&q=60',
    category: 'Hotels',
    subcategory: 'Resorts',
    social_media: {
      facebook: 'https://www.facebook.com/HammockBeach',
      instagram: 'https://www.instagram.com/hammockbeach',
      twitter: 'https://twitter.com/HammockBeach'
    }
  },
  {
    id: '4',
    name: 'Palm Coast Pharmacy',
    description: 'Independent pharmacy providing personalized care, prescriptions, and healthcare products with a focus on customer service.',
    address: '1755 E Moody Blvd, Bunnell, FL 32110',
    logo_url: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&auto=format&fit=crop&q=60',
    category: 'Health',
    subcategory: 'Pharmacy',
    social_media: {
      facebook: 'https://www.facebook.com/PalmCoastPharmacy'
    }
  },
  {
    id: '5',
    name: 'Flagler Palm Coast High School',
    description: 'Public high school offering comprehensive academic programs, athletics, and extracurricular activities.',
    address: '5500 E Moody Blvd, Palm Coast, FL 32164',
    logo_url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=60',
    category: 'Education',
    subcategory: 'High School',
    social_media: {
      facebook: 'https://www.facebook.com/FlaglerSchools',
      twitter: 'https://twitter.com/FlaglerSchools'
    }
  }
] 