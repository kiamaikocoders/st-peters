import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'

const poppins = Poppins({ 
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "St. Peter's Berry School",
  description: 'A mixed primary school providing day and boarding options in Mirangine, Nakuru',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} bg-gray-50 text-gray-900`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  )
}

