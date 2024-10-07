'use client'
import Link from 'next/link'
import { useState, useEffect, useMemo } from 'react'
import { usePathname } from 'next/navigation'

import React from 'react'
import { debounce } from 'lodash'

const Header = React.memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = debounce(() => {
      setIsScrolled(window.scrollY > 20)
    }, 100)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = debounce(() => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }, 100)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isActive = (path: string) => pathname === path

  const navItems = useMemo(() => [
    { href: '/', label: 'Home' },
    { href: '/pages/about', label: 'About' },
    { href: '/pages/services', label: 'Services' },
    { href: '/pages/contact', label: 'Contact' },
  ], [])
  return (
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className={`text-xl sm:text-2xl font-bold transition duration-300 ${
            isScrolled ? 'text-blue-600' : 'text-white'
          }`}>
            Rocket<span className={`bg-clip-text text-transparent bg-gradient-to-r ${
              isScrolled ? 'from-blue-500 to-blue-700' : 'from-blue-100 to-blue-300'
            }`}>Kick</span>
          </Link>
          <div className="hidden md:flex space-x-1 lg:space-x-6">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-3 py-2 rounded-md text-sm lg:text-base transition duration-300 transform hover:scale-105 ${
                  isActive(href)
                    ? isScrolled
                      ? 'bg-blue-100 text-blue-600 font-semibold'
                      : 'bg-white bg-opacity-20 text-white font-semibold'
                    : isScrolled
                    ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    : 'text-gray-200 hover:text-white hover:bg-white hover:bg-opacity-10'
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
              <span className={`absolute w-full h-0.5 transform transition-all duration-300 ease-in-out ${
                isScrolled ? 'bg-blue-600' : 'bg-white'
              } ${isMenuOpen ? 'rotate-45 top-2' : 'top-0'}`}></span>
              <span className={`absolute w-full h-0.5 transition-all duration-300 ease-in-out ${
                isScrolled ? 'bg-blue-600' : 'bg-white'
              } ${isMenuOpen ? 'opacity-0' : 'opacity-100 top-2'}`}></span>
              <span className={`absolute w-full h-0.5 transform transition-all duration-300 ease-in-out ${
                isScrolled ? 'bg-blue-600' : 'bg-white'
              } ${isMenuOpen ? '-rotate-45 top-2' : 'top-4'}`}></span>
            </div>
          </button>
        </div>
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
  isMenuOpen ? 'h-auto opacity-100 visible' : 'h-0 opacity-0 invisible'
} ${isScrolled ? 'bg-white' : 'bg-black bg-opacity-70'}`}>
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`block py-3 px-4 transition duration-300 ${
                isActive(href)
                  ? isScrolled
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'bg-white bg-opacity-20 text-white font-semibold'
                  : isScrolled
                  ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  : 'text-gray-200 hover:text-white hover:bg-white hover:bg-opacity-10'
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
})

export default Header
