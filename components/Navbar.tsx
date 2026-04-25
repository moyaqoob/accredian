'use client'
import { useEffect, useState } from 'react'

type NavLink = {
  label: string
  href: string
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Clients', href: '#clients' },
  { label: 'Stats', href: '#stats' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Programs', href: '#programs' },
  { label: 'Testimonials', href: '#testimonials' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-slate-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-lg group-hover:shadow-brand-500/30 transition-shadow duration-300">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8L6.5 11.5L13 4.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="font-display font-semibold text-xl text-slate-900 tracking-tight">Accredian</span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-brand-500 animated-underline transition-colors duration-200 pb-0.5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href="#contact" className="text-sm font-medium text-slate-700 hover:text-brand-500 transition-colors px-4 py-2">
              Sign in
            </a>
            <a href="#contact" className="btn-primary text-sm font-medium text-white px-5 py-2.5 rounded-lg">
              Enquire Now
            </a>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block h-0.5 bg-slate-700 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block h-0.5 bg-slate-700 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 bg-slate-700 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-90 pb-6' : 'max-h-0'}`}>
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-brand-500 hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 mt-3 pt-3 border-t border-slate-100">
              <a
                href="#contact"
                className="flex-1 text-center text-sm font-medium text-slate-700 border border-slate-200 px-4 py-2.5 rounded-lg hover:border-brand-500 hover:text-brand-500 transition-colors"
              >
                Sign in
              </a>
              <a href="#contact" className="flex-1 text-center btn-primary text-sm font-medium text-white px-4 py-2.5 rounded-lg">
                Enquire Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
