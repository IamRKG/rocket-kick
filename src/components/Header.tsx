'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path: string) => pathname === path

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/pages/about', label: 'About' },
    { href: '/pages/services', label: 'Services' },
    { href: '/pages/contact', label: 'Contact' },
  ]

  return (
    <header className={`fixed w-full z-50 bg-white transition-all duration-300 ${isScrolled ? 'shadow-lg py-2' : 'shadow-md py-4'}`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl sm:text-2xl font-bold text-blue-600 hover:text-blue-700 transition duration-300">
            Rocket<span className="text-gray-800 hover:text-gray-900 transition duration-300">Kick</span>
          </Link>
          <div className="hidden md:flex space-x-1 lg:space-x-6">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-3 py-2 rounded-md text-sm lg:text-base text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition duration-300 ${
                  isActive(href) ? 'bg-blue-100 text-blue-600 font-semibold' : ''
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
          <button 
            className="md:hidden focus:outline-none relative w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative">
              <span className={`absolute w-full h-0.5 bg-gray-700 transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 top-2' : 'top-0'}`}></span>
              <span className={`absolute w-full h-0.5 bg-gray-700 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100 top-2'}`}></span>
              <span className={`absolute w-full h-0.5 bg-gray-700 transform transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 top-2' : 'top-4'}`}></span>
            </div>
          </button>
        </div>
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`block py-2 px-4 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition duration-300 ${
                isActive(href) ? 'bg-blue-100 text-blue-600 font-semibold' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Header
