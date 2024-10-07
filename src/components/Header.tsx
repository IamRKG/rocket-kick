'use client'
import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Rocket<span className="text-gray-800">Kick</span>
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition duration-300">Home</Link>
            <Link href="/pages/about" className="text-gray-700 hover:text-blue-600 transition duration-300">About</Link>
            <Link href="/pages/services" className="text-gray-700 hover:text-blue-600 transition duration-300">Services</Link>
            <Link href="/pages/contact" className="text-gray-700 hover:text-blue-600 transition duration-300">Contact</Link>
          </div>
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <Link href="/" className="block py-2 text-gray-700 hover:text-blue-600 transition duration-300">Home</Link>
            <Link href="/pages/about" className="block py-2 text-gray-700 hover:text-blue-600 transition duration-300">About</Link>
            <Link href="/pages/services" className="block py-2 text-gray-700 hover:text-blue-600 transition duration-300">Services</Link>
            <Link href="/pages/contact" className="block py-2 text-gray-700 hover:text-blue-600 transition duration-300">Contact</Link>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
