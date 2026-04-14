import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-900/90 backdrop-blur-md border-b border-white/5 shadow-xl' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-18 py-5">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center glow transition-all group-hover:bg-brand-400">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
              <path d="M4 12C4 7.582 7.582 4 12 4C14.485 4 16.712 5.064 18.272 6.772L15.456 9.588C14.608 8.608 13.376 8 12 8C9.792 8 8 9.792 8 12C8 14.208 9.792 16 12 16C13.376 16 14.608 15.392 15.456 14.412L18.272 17.228C16.712 18.936 14.485 20 12 20C7.582 20 4 16.418 4 12Z" fill="white"/>
              <rect x="14" y="10" width="6" height="4" rx="0.75" fill="white"/>
            </svg>
          </div>
          <span className="font-display font-bold text-xl text-white tracking-tight">GigaCorp</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-white/60 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-lg bg-brand-500 hover:bg-brand-400 text-white text-sm font-semibold transition-all hover:shadow-lg hover:shadow-brand-500/25 active:scale-95"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`w-5 h-0.5 bg-white transition-all duration-200 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-5 h-0.5 bg-white transition-all duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-0.5 bg-white transition-all duration-200 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-dark-800/95 backdrop-blur-md border-b border-white/5 px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-white/70 hover:text-white transition-colors block"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-6 block text-center px-5 py-3 rounded-lg bg-brand-500 hover:bg-brand-400 text-white text-sm font-semibold transition-all"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  )
}
