'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Work', href: '/work' },
  { label: 'Capabilities', href: '/capabilities' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Nav() {
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
          <Link href="/" className="flex items-center gap-3">
            <div style={{width:32,height:32,borderRadius:8,background:'var(--gradient-violet)',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <span style={{fontFamily:'var(--font-sans)',fontSize:'0.75rem',fontWeight:700,color:'white'}}>MU</span>
            </div>
            <span style={{fontFamily:'var(--font-sans)',fontSize:'0.8rem',fontWeight:600,letterSpacing:'0.08em',color:'var(--text-primary)',textDecoration:'none'}}>Mustafa Uzair</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
              return (
                <Link key={link.href} href={link.href} style={{fontFamily:'var(--font-sans)',fontSize:'0.8rem',fontWeight:500,letterSpacing:'0.05em',color:isActive?'var(--accent-violet-light)':'var(--text-secondary)',textDecoration:'none',transition:'color 0.2s',position:'relative',paddingBottom:4}}>
                  {link.label}
                  {isActive && <span style={{position:'absolute',bottom:-4,left:0,right:0,height:1,background:'var(--gradient-hero)'}} />}
                </Link>
              )
            })}
            <Link href="/contact" className="btn-primary" style={{padding:'10px 22px',fontSize:'0.75rem'}}>Let&apos;s Talk <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></Link>
          </div>
          <button className="md:hidden glass flex items-center justify-center rounded-lg" style={{width:40,height:40,border:'none',cursor:'pointer',background:'rgba(255,255,255,0.06)',backdropFilter:'blur(20px)'}} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">{menuOpen?<path d="M3 3l12 12M15 3L3 15" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>:<><line x1="2" y1="5" x2="16" y2="5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/><line x1="2" y1="9" x2="16" y2="9" stroke="white" strokeWidth="1.5" strokeLinecap="round"/><line x1="2" y1="13" x2="16" y2="13" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></>}</svg>
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div style={{position:'fixed',inset:0,zIndex:999,background:'rgba(10,10,15,0.96)',backdropFilter:'blur(40px)',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:32}}>
          <button style={{position:'absolute',top:24,right:24,background:'none',border:'none',cursor:'pointer',color:'var(--text-primary)'}} onClick={() => setMenuOpen(false)}><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg></button>
          {navLinks.map((link) => (<Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{fontFamily:'var(--font-sans)',fontSize:'2.5rem',fontWeight:600,color:pathname===link.href?'var(--accent-violet-light)':'var(--text-primary)',textDecoration:'none',letterSpacing:'-0.02em'}}>{link.label}</Link>))}
        </div>
      )}
    </>
  )
}
