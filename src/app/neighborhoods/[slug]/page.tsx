import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Expanded neighborhood data with more details
const neighborhoodDetails = {
  'grand-haven': {
    name: 'Grand Haven',
    type: 'Gated Community',
    description: 'Luxury gated community featuring a Jack Nicklaus golf course, waterfront properties, and resort-style amenities.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop&q=60',
    priceRange: '$400k - $2M+',
    commute: '10-15 min',
    features: [
      { icon: 'fas fa-golf-ball', label: 'Golf Course' },
      { icon: 'fas fa-swimming-pool', label: 'Pool' },
      { icon: 'fas fa-shield-alt', label: 'Gated' }
    ],
    details: {
      overview: 'Grand Haven is one of Palm Coast\'s most prestigious communities, offering luxury living in a secure, amenity-rich environment. The community is built around an 18-hole Jack Nicklaus Signature golf course and features stunning water views throughout.',
      amenities: [
        'Jack Nicklaus Signature Golf Course',
        'Private Beach Club',
        'Resort-style Swimming Pool',
        'Tennis and Pickleball Courts',
        'State-of-the-art Fitness Center',
        'Clubhouse with Dining Options',
        'Walking and Biking Trails',
        '24/7 Gated Security'
      ],
      schools: [
        { name: 'Belle Terre Elementary', rating: '8/10', distance: '1.2 miles' },
        { name: 'Indian Trails Middle School', rating: '7/10', distance: '2.5 miles' },
        { name: 'Flagler Palm Coast High School', rating: '8/10', distance: '3.1 miles' }
      ],
      lifestyle: 'Perfect for golf enthusiasts, retirees, and families seeking a luxury lifestyle with resort-style amenities. The community hosts regular social events and activities.',
      housing: {
        types: ['Single-family Homes', 'Custom Estates', 'Golf Villas'],
        sizes: '2,000 - 10,000+ sq ft',
        yearBuilt: '1998 - Present',
        architecturalStyles: ['Mediterranean', 'Contemporary', 'Coastal']
      }
    }
  },
  'pine-lakes': {
    name: 'Pine Lakes',
    type: 'Family-Friendly',
    description: 'Established neighborhood with large lots, mature trees, and a strong sense of community.',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&auto=format&fit=crop&q=60',
    priceRange: '$250k - $500k',
    commute: '15-20 min',
    features: [
      { icon: 'fas fa-tree', label: 'Large Lots' },
      { icon: 'fas fa-child', label: 'Family' },
      { icon: 'fas fa-home', label: 'Single Family' }
    ],
    details: {
      overview: 'Pine Lakes is a well-established neighborhood known for its spacious properties, family-friendly atmosphere, and beautiful natural surroundings. The community features winding streets lined with mature pine trees and offers a peaceful suburban lifestyle.',
      amenities: [
        'Community Park',
        'Children\'s Playground',
        'Basketball Courts',
        'Walking Trails',
        'Fishing Lakes',
        'Picnic Areas',
        'Dog Park',
        'Community Events'
      ],
      schools: [
        { name: 'Wadsworth Elementary', rating: '7/10', distance: '1.5 miles' },
        { name: 'Indian Trails Middle School', rating: '7/10', distance: '1.8 miles' },
        { name: 'Flagler Palm Coast High School', rating: '8/10', distance: '2.5 miles' }
      ],
      lifestyle: 'Ideal for families and those seeking a close-knit community with plenty of outdoor activities. Regular neighborhood events foster a strong sense of community.',
      housing: {
        types: ['Single-family Homes', 'Ranch-style Houses', 'Custom Homes'],
        sizes: '1,800 - 4,000 sq ft',
        yearBuilt: '1985 - 2005',
        architecturalStyles: ['Traditional', 'Ranch', 'Florida Contemporary']
      }
    }
  },
  'palm-harbor': {
    name: 'Palm Harbor',
    type: 'Waterfront',
    description: 'Beautiful waterfront community with a mix of luxury homes and condos, close to shopping and dining.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=60',
    priceRange: '$300k - $1.5M',
    commute: '5-10 min',
    features: [
      { icon: 'fas fa-water', label: 'Waterfront' },
      { icon: 'fas fa-shopping-bag', label: 'Shopping' },
      { icon: 'fas fa-utensils', label: 'Dining' }
    ],
    details: {
      overview: 'Palm Harbor offers a perfect blend of waterfront living and urban convenience. With its prime location near the Intracoastal Waterway, residents enjoy stunning water views and easy access to shopping, dining, and entertainment options.',
      amenities: [
        'Private Boat Docks',
        'Community Marina',
        'Waterfront Park',
        'Shopping Center',
        'Restaurants',
        'Fitness Center',
        'Swimming Pool',
        'Tennis Courts'
      ],
      schools: [
        { name: 'Old Kings Elementary', rating: '8/10', distance: '0.8 miles' },
        { name: 'Indian Trails Middle School', rating: '7/10', distance: '2.0 miles' },
        { name: 'Flagler Palm Coast High School', rating: '8/10', distance: '2.8 miles' }
      ],
      lifestyle: 'Perfect for boating enthusiasts and those who enjoy an active waterfront lifestyle with easy access to urban amenities.',
      housing: {
        types: ['Waterfront Homes', 'Luxury Condos', 'Town Houses'],
        sizes: '1,500 - 6,000 sq ft',
        yearBuilt: '1990 - Present',
        architecturalStyles: ['Coastal Contemporary', 'Mediterranean', 'Modern']
      }
    }
  },
  'belle-terre': {
    name: 'Belle Terre',
    type: 'Suburban',
    description: 'Popular suburban area with excellent schools and parks, perfect for families.',
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&auto=format&fit=crop&q=60',
    priceRange: '$200k - $400k',
    commute: '10-15 min',
    features: [
      { icon: 'fas fa-graduation-cap', label: 'Schools' },
      { icon: 'fas fa-tree', label: 'Parks' },
      { icon: 'fas fa-home', label: 'Affordable' }
    ],
    details: {
      overview: 'Belle Terre is a family-oriented suburban neighborhood known for its excellent schools, numerous parks, and affordable housing options. The area offers a perfect balance of residential comfort and convenient access to daily necessities.',
      amenities: [
        'Multiple Parks',
        'Sports Complex',
        'Community Center',
        'Bike Paths',
        'Public Library',
        'Shopping Centers',
        'Medical Facilities',
        'Public Transportation'
      ],
      schools: [
        { name: 'Belle Terre Elementary', rating: '8/10', distance: '0.5 miles' },
        { name: 'Indian Trails Middle School', rating: '7/10', distance: '1.0 miles' },
        { name: 'Flagler Palm Coast High School', rating: '8/10', distance: '2.0 miles' }
      ],
      lifestyle: 'Ideal for families with school-age children and first-time homebuyers seeking a safe, established neighborhood with strong community values.',
      housing: {
        types: ['Single-family Homes', 'Starter Homes', 'Mid-size Family Homes'],
        sizes: '1,200 - 2,800 sq ft',
        yearBuilt: '1980 - 2010',
        architecturalStyles: ['Traditional', 'Florida Ranch', 'Contemporary']
      }
    }
  },
  'european-village': {
    name: 'European Village',
    type: 'Urban Living',
    description: 'Mixed-use community with condos, shops, and restaurants in a European-inspired setting.',
    image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&auto=format&fit=crop&q=60',
    priceRange: '$150k - $400k',
    commute: '5-10 min',
    features: [
      { icon: 'fas fa-store', label: 'Shopping' },
      { icon: 'fas fa-glass-cheers', label: 'Nightlife' },
      { icon: 'fas fa-building', label: 'Condos' }
    ],
    details: {
      overview: 'European Village offers a unique urban living experience in Palm Coast, featuring a vibrant mix of residential condos, boutique shops, restaurants, and entertainment venues. The architecture and layout are inspired by traditional European town centers.',
      amenities: [
        'On-site Restaurants',
        'Retail Shops',
        'Entertainment Venues',
        'Resort-style Pool',
        'Fitness Center',
        'Courtyard',
        'Live Music Events',
        'Weekend Markets'
      ],
      schools: [
        { name: 'Palm Harbor Academy', rating: '7/10', distance: '1.0 miles' },
        { name: 'Indian Trails Middle School', rating: '7/10', distance: '3.2 miles' },
        { name: 'Flagler Palm Coast High School', rating: '8/10', distance: '3.5 miles' }
      ],
      lifestyle: 'Perfect for young professionals, empty nesters, and those seeking an active urban lifestyle with walkable access to dining, shopping, and entertainment.',
      housing: {
        types: ['Luxury Condos', 'Apartments', 'Live/Work Units'],
        sizes: '800 - 2,000 sq ft',
        yearBuilt: '2005 - Present',
        architecturalStyles: ['Mediterranean', 'European Contemporary']
      }
    }
  },
  'hammock-beach': {
    name: 'Hammock Beach',
    type: 'Luxury Resort',
    description: 'Exclusive oceanfront community with world-class golf, spa, and resort amenities.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=60',
    priceRange: '$500k - $3M+',
    commute: '20-25 min',
    features: [
      { icon: 'fas fa-umbrella-beach', label: 'Beach' },
      { icon: 'fas fa-golf-ball', label: 'Golf' },
      { icon: 'fas fa-spa', label: 'Resort' }
    ],
    details: {
      overview: 'Hammock Beach is an exclusive oceanfront resort community offering luxury living with world-class amenities. The community features two championship golf courses, a private beach club, and spectacular ocean views.',
      amenities: [
        'Private Beach Club',
        'Two Championship Golf Courses',
        'Luxury Spa',
        'Multiple Pools',
        'Tennis Complex',
        'Fine Dining',
        'Yacht Harbor',
        'Kids\' Programs'
      ],
      schools: [
        { name: 'Old Kings Elementary', rating: '8/10', distance: '3.5 miles' },
        { name: 'Indian Trails Middle School', rating: '7/10', distance: '4.2 miles' },
        { name: 'Flagler Palm Coast High School', rating: '8/10', distance: '5.0 miles' }
      ],
      lifestyle: 'Ideal for luxury buyers seeking an exclusive resort lifestyle with premium amenities and services. Perfect for golf enthusiasts and beach lovers.',
      housing: {
        types: ['Oceanfront Condos', 'Luxury Villas', 'Estate Homes'],
        sizes: '1,800 - 12,000+ sq ft',
        yearBuilt: '2000 - Present',
        architecturalStyles: ['Coastal Luxury', 'Mediterranean Revival', 'Contemporary']
      }
    }
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const neighborhood = neighborhoodDetails[params.slug as keyof typeof neighborhoodDetails]
  
  if (!neighborhood) {
    return {
      title: 'Neighborhood Not Found',
      description: 'The requested neighborhood could not be found.'
    }
  }

  return {
    title: `${neighborhood.name} - Palm Coast Neighborhood Guide`,
    description: neighborhood.description
  }
}

export default function NeighborhoodPage({ params }: { params: { slug: string } }) {
  const neighborhood = neighborhoodDetails[params.slug as keyof typeof neighborhoodDetails]

  if (!neighborhood) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/neighborhoods"
          className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-8"
        >
          <i className="fas fa-arrow-left mr-2" />
          Back to Neighborhoods
        </Link>

        {/* Hero Section */}
        <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
          <Image
            src={neighborhood.image}
            alt={neighborhood.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold mb-2">{neighborhood.name}</h1>
                <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm backdrop-blur-sm">
                  {neighborhood.type}
                </span>
              </div>
              <div className="text-right">
                <div className="text-2xl font-semibold">{neighborhood.priceRange}</div>
                <div className="text-sm opacity-80">Price Range</div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-gray-600">{neighborhood.details.overview}</p>
            </section>

            {/* Amenities */}
            <section className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
              <div className="grid grid-cols-2 gap-4">
                {neighborhood.details.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <i className="fas fa-check text-primary-600 mr-2" />
                    <span className="text-gray-600">{amenity}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Schools */}
            <section className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-semibold mb-4">Nearby Schools</h2>
              <div className="space-y-4">
                {neighborhood.details.schools.map((school, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-medium text-gray-900">{school.name}</h3>
                      <p className="text-sm text-gray-500">{school.distance}</p>
                    </div>
                    <div className="text-primary-600 font-medium">{school.rating}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Facts */}
            <section className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Quick Facts</h2>
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm text-gray-500">Commute to Downtown</dt>
                  <dd className="text-gray-900">{neighborhood.commute}</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Home Sizes</dt>
                  <dd className="text-gray-900">{neighborhood.details.housing.sizes}</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Year Built</dt>
                  <dd className="text-gray-900">{neighborhood.details.housing.yearBuilt}</dd>
                </div>
              </dl>
            </section>

            {/* Housing Types */}
            <section className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Housing Types</h2>
              <ul className="space-y-2">
                {neighborhood.details.housing.types.map((type, index) => (
                  <li key={index} className="flex items-center">
                    <i className="fas fa-home text-primary-600 mr-2" />
                    <span className="text-gray-600">{type}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Contact CTA */}
            <section className="bg-primary-50 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-primary-900 mb-2">
                Interested in {neighborhood.name}?
              </h2>
              <p className="text-primary-700 mb-4">
                Connect with a local expert to learn more about this neighborhood.
              </p>
              <Link
                href="/contact"
                className="block w-full text-center bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700"
              >
                Contact an Expert
              </Link>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
} 