import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-sm">St. Peter's Berry School is committed to providing a nurturing and inclusive learning environment that empowers students to achieve academic excellence.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/admissions" className="hover:text-secondary transition duration-300">Admissions</Link></li>
              <li><Link href="/fee-structure" className="hover:text-secondary transition duration-300">Fee Structure</Link></li>
              <li><Link href="/academics" className="hover:text-secondary transition duration-300">Academics</Link></li>
              <li><Link href="/gallery" className="hover:text-secondary transition duration-300">Gallery</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="mb-2">Phone: +254 725 911 651</p>
            <p className="mb-2">Email: st.peterberry24@gmail.com</p>
            <p>Location: Mirangine, Nakuru County</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://web.facebook.com/profile.php?id=61569976937723" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition duration-300">
                <Facebook />
              </a>
              <a href="#" className="hover:text-secondary transition duration-300">
                <Instagram />
              </a>
              <a href="#" className="hover:text-secondary transition duration-300">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p>&copy; {new Date().getFullYear()} St. Peter's Berry School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

