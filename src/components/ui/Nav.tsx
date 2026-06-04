'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Work', href: '/#work' },
  { label: 'Capabilities', href: '/#capabilities' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/#contact' },
  ]

export default function Nav() {
    const pathname = usePathname()
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
        <>
              <nav className={`nav-fixed ${scrolled ? 'nav-scrolled' : ''}`}>
                      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                                <Link href="/" className="flex items-center gap-3 group">
                                            <div className="w-9 h-9 rounded-lg flex items-center justify-center font-display font-bold text-sm text-white transition-all duration-300 group-hover:scale-105"
                                                            style={{ background: 'linear-gradient(135deg, #8B5CF6, #EC4899)' }}>
                                                          MU
                                            </div>div>
                                            <span className="font-display font-semibold text-cream text-base hidden sm:block">Mustafa Uzair</span>span>
                                </Link>Link>
                      
                                <div className="hidden md:flex items-center gap-8">
                                  {navLinks.map((link) => (
                        <Link
                                          key={link.label}
                                          href={link.href}
                                          className="text-sm font-mono tracking-wide text-secondary hover:text-cream transition-colors duration-300 relative group"
                                        >
                          {link.label}
                                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-violet-500 group-hover:w-full transition-all duration-300" />
                        </Link>Link>
                      ))}
                                </div>div>
                      
                                <div className="hidden md:flex items-center gap-4">
                                            <a href="mailto:mustafauzair@example.com"
                                                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-mono tracking-wide text-white transition-all duration-300 hover:opacity-90 hover:scale-105"
                                                            style={{ background: 'linear-gradient(135deg, #8B5CF6, #EC4899)' }}>
                                                          LET'S TALK →
                                            </a>a>
                                </div>div>
                      
                                <button
                                              className="md:hidden text-secondary hover:text-cream transition-colors p-2"
                                              onClick={() => setMenuOpen(!menuOpen)}
                                              aria-label="Toggle menu"
                                            >
                                            <div className="w-6 flex flex-col gap-1.5">
                                                          <span className={`h-px bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                                                          <span className={`h-px bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                                                          <span className={`h-px bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                                            </div>div>
                                </button>button>
                      </div>div>
              </nav>nav>
        
          {menuOpen && (
                  <div className="fixed inset-0 z-40 md:hidden" onClick={() => setMenuOpen(false)}>
                            <div className="absolute top-16 left-0 right-0 mx-4 rounded-2xl p-6 border border-white/10"
                                          style={{ background: 'rgba(22,22,30,0.95)', backdropFilter: 'blur(20px)' }}
                                          onClick={(e) => e.stopPropagation()}>
                                        <div className="flex flex-col gap-4">
                                          {navLinks.map((link) => (
                                                            <Link key={link.label} href={link.href}
                                                                                className="text-secondary hover:text-cream transition-colors font-mono text-sm py-2 border-b border-white/5"
                                                                                onClick={() => setMenuOpen(false)}>
                                                              {link.label}
                                                            </Link>Link>
                                                          ))}
                                                      <a href="mailto:mustafauzair@example.com"
                                                                        className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-mono text-white"
                                                                        style={{ background: 'linear-gradient(135deg, #8B5CF6, #EC4899)' }}>
                                                                      LET'S TALK →
                                                      </a>a>
                                        </div>div>
                            </div>div>
                  </div>div>
              )}
        </>>
      )
}</>
