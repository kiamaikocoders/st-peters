import Link from 'next/link'
import Image from 'next/image'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Academics', href: '/academics' },
  { name: 'Fee Structure', href: '/fee-structure' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="St. Peter's Berry School Logo" width={60} height={60} className="rounded-full" />
            <span className="text-2xl font-bold text-primary">St. Peter's Berry School</span>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-600 hover:text-primary transition duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:hidden">
            {/* Mobile menu button */}
            <button className="text-gray-600 hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

