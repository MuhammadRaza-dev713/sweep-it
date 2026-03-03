'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Header(){
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="w-full bg-white border-b relative">
      <div className="mx-auto container-wide flex items-center justify-between py-2 px-4">
        <div className="flex flex-col items-start">
          <Link href="/" className="flex items-center">
            <img src="/logo.png" alt="Sweep-It" className="w-28 sm:w-34" />
          </Link>
          <span className="text-[10px] sm:text-[8px] text-slate-500 font-medium ml-0 mt-0.5">All-In-One Platform for<br />Chimney Sweeps</span>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-4">
          <Link 
            href="/" 
            className={`px-3 lg:px-4 py-2 rounded-md transition text-sm lg:text-base ${
              pathname === '/' 
                ? 'bg-gradient-to-r from-[#0099cc] via-[#0077b6] to-[#0044cc] text-white' 
                : 'text-slate-700 hover:text-deep hover:bg-slate-100'
            }`}
          >
            Home
          </Link>
          <Link 
            href="/features" 
            className={`px-3 lg:px-4 py-2 rounded-md transition text-sm lg:text-base whitespace-nowrap ${
              pathname === '/features' 
                ? 'bg-gradient-to-r from-[#0099cc] via-[#0077b6] to-[#0044cc] text-white' 
                : 'text-slate-700 hover:text-deep hover:bg-slate-100'
            }`}
          >
            Features & Functions
          </Link>
          <Link 
            href="/contact" 
            className={`px-3 lg:px-4 py-2 rounded-md transition text-sm lg:text-base whitespace-nowrap ${
              pathname === '/contact' 
                ? 'bg-gradient-to-r from-[#0099cc] via-[#0077b6] to-[#0044cc] text-white' 
                : 'text-slate-700 hover:text-deep hover:bg-slate-100'
            }`}
          >
            Contact Us
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg z-50">
          <nav className="flex flex-col p-4 space-y-2">
            <Link 
              href="/" 
              onClick={closeMenu}
              className={`px-4 py-3 rounded-lg transition text-center ${
                pathname === '/' 
                  ? 'bg-gradient-to-r from-[#0099cc] via-[#0077b6] to-[#0044cc] text-white' 
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/features" 
              onClick={closeMenu}
              className={`px-4 py-3 rounded-lg transition text-center ${
                pathname === '/features' 
                  ? 'bg-gradient-to-r from-[#0099cc] via-[#0077b6] to-[#0044cc] text-white' 
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              Features & Functions
            </Link>
            <Link 
              href="/contact" 
              onClick={closeMenu}
              className={`px-4 py-3 rounded-lg transition text-center ${
                pathname === '/contact' 
                  ? 'bg-gradient-to-r from-[#0099cc] via-[#0077b6] to-[#0044cc] text-white' 
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
