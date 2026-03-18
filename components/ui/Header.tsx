'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCartStore } from '@/store/cartStore'

interface HeaderProps {
  onCartOpen: () => void
}

export default function Header({ onCartOpen }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const count = useCartStore((s) => s.count())

  useEffect(() => {
    setMounted(true)
  }, [])

  const navLinks = [
    { href: '/', label: 'Shop' },
    { href: '/science', label: 'Science' },
    { href: '/faq', label: 'FAQ' },
  ]

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: 'rgba(8, 10, 15, 0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 no-underline">
          <span
            className="text-xl tracking-wide"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              color: '#EDE8DF',
            }}
          >
            BIOFORGE
          </span>
          <span
            className="text-xs tracking-widest uppercase"
            style={{
              fontFamily: "'DM Mono', monospace",
              color: '#C8A96E',
              fontWeight: 400,
            }}
          >
            Peptides
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-widest no-underline transition-colors duration-200"
              style={{
                fontFamily: "'DM Mono', monospace",
                color: '#8A8070',
                fontWeight: 400,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#EDE8DF')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#8A8070')}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Cart + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={onCartOpen}
            className="relative flex items-center gap-2 transition-colors duration-200"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#8A8070',
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#EDE8DF')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#8A8070')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            Cart
            {mounted && count > 0 && (
              <span
                className="absolute -top-1.5 -right-3 w-4 h-4 flex items-center justify-center text-[10px] font-medium"
                style={{
                  background: '#C8A96E',
                  color: '#080A0F',
                  borderRadius: '50%',
                  fontFamily: "'DM Mono', monospace",
                }}
              >
                {count}
              </span>
            )}
          </button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#8A8070' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden px-4 pb-4"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 text-xs uppercase tracking-widest no-underline"
              style={{
                fontFamily: "'DM Mono', monospace",
                color: '#8A8070',
                borderBottom: '1px solid rgba(255,255,255,0.04)',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
