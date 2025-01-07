import Image from 'next/image'
import Link from 'next/link'
import NewsHighlights from './components/NewsHighlights'
import AIEnhancedSearch from './components/AIEnhancedSearch'

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-secondary to-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden perspective-3d">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-background.jpg"
            alt="School background"
            layout="fill"
            objectFit="cover"
            priority
            className="rotate-3d"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <div className="container mx-auto px-4 z-20 text-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-4 animate-float text-3d">
            Welcome to St. Peter's Berry School
          </h1>
          <p className="text-xl text-white mb-8">Nurturing Minds, Shaping Futures</p>
          <Link href="/admissions" className="btn-primary text-lg inline-block">
            Apply Now
          </Link>
        </div>
      </section>

      {/* AI-Enhanced Search Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary text-3d">Search Our School</h2>
          <AIEnhancedSearch />
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gradient-radial">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center text-white text-3d">Our Mission</h2>
          <p className="text-xl text-center max-w-3xl mx-auto leading-relaxed text-white">
            St. Peter's Berry School is committed to providing a nurturing and inclusive learning environment
            that empowers students to achieve academic excellence, develop strong character, and become
            responsible global citizens.
          </p>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary text-3d">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/admissions" className="card group perspective-3d">
              <div className="rotate-3d">
                <h3 className="text-xl font-bold mb-2 text-primary group-hover:text-accent transition duration-300">Admissions</h3>
                <p>Learn about our admission process and apply online.</p>
              </div>
            </Link>
            <Link href="/fee-structure" className="card group perspective-3d">
              <div className="rotate-3d">
                <h3 className="text-xl font-bold mb-2 text-primary group-hover:text-accent transition duration-300">Fee Structure</h3>
                <p>View our comprehensive fee structure and payment options.</p>
              </div>
            </Link>
            <Link href="/contact" className="card group perspective-3d">
              <div className="rotate-3d">
                <h3 className="text-xl font-bold mb-2 text-primary group-hover:text-accent transition duration-300">Contact Us</h3>
                <p>Get in touch with us for any inquiries or information.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* News Highlights Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary text-3d">Latest News</h2>
          <NewsHighlights />
        </div>
      </section>
    </div>
  )
}

