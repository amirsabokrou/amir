import { useState, useEffect } from 'react'
import { navLinks } from '../data/content'
import { Icon } from './Icons'

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen
            ? 'bg-ink/95 backdrop-blur-md border-b border-dark-border'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-[1600px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex flex-col leading-none" onClick={() => setMenuOpen(false)}>
            <span className="font-serif text-lg md:text-xl tracking-wide">TEEN</span>
            <span className="text-[9px] tracking-widest-2 uppercase text-muted mt-0.5">STUDIO</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[11px] tracking-widest-2 uppercase transition-colors duration-300 hover:text-gold ${
                  activeSection === link.href.slice(1) ? 'text-gold' : 'text-ivory/70'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center text-[11px] tracking-widest-2 uppercase border border-dark-border px-5 py-2.5 text-ivory/80 hover:text-gold hover:border-gold/60 transition-all duration-300"
            >
              Start a Project
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden text-ivory p-1"
              aria-label="Open menu"
            >
              <Icon name="menu" className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-ink lg:hidden">
          <div className="flex items-center justify-between h-20 px-6">
            <span className="font-serif text-lg">TEEN</span>
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="p-1 text-ivory">
              <Icon name="close" className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center gap-6 mt-16 px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-serif text-2xl text-ivory hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 border border-gold/40 px-6 py-3 text-[11px] tracking-widest-2 uppercase text-gold hover:bg-gold hover:text-ink transition-all"
            >
              Start a Project
            </a>
          </nav>
        </div>
      )}
    </>
  )
}
