export const metadata = {
  title: 'About - Palm Coast Pulse',
  description: 'Learn about Palm Coast Pulse and our mission to energize local businesses and community',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
            About Palm Coast Pulse
          </h1>

          <div className="prose prose-lg mx-auto">
            <p>
              Palm Coast Pulse is your premier destination for discovering
              and connecting with local businesses and community life in Palm Coast, Florida. 
              We're more than just a business directory - we're the heartbeat of the 
              local community, bringing together businesses and residents.
            </p>

            <h2>Our Mission</h2>
            <p>
              Our mission is to energize the local community by connecting businesses 
              with customers through cutting-edge technology and AI-powered solutions, 
              making it easier than ever to feel the pulse of Palm Coast.
            </p>

            <h2>What Makes Us Different</h2>
            <ul>
              <li>
                <strong>AI-Powered Marketing:</strong> We leverage advanced AI
                technology to help businesses create engaging content and
                optimize their online presence.
              </li>
              <li>
                <strong>Local Focus:</strong> We're dedicated to the Palm Coast
                community and understand the unique needs of local businesses.
              </li>
              <li>
                <strong>Comprehensive Platform:</strong> From business listings
                to lead generation and marketing automation, we provide all the
                tools businesses need to succeed.
              </li>
            </ul>

            <h2>Our Values</h2>
            <ul>
              <li>
                <strong>Innovation:</strong> We continuously evolve our platform
                with the latest technology to provide the best service.
              </li>
              <li>
                <strong>Community:</strong> We're committed to helping the Palm
                Coast business community thrive and grow.
              </li>
              <li>
                <strong>Excellence:</strong> We strive to provide the highest
                quality service and support to our business partners.
              </li>
            </ul>

            <h2>Join Our Community</h2>
            <p>
              Whether you're a business owner looking to grow your presence or a
              resident searching for local services, Palm Coast Pulse is
              here to help. Join our community today and be part of Palm
              Coast's digital transformation.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 