'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const ROLES = ['Brand Strategist', 'Product Designer', 'Growth Architect', 'Creative Director']

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)

  // Typewriter effect
  useEffect(() => {
    const current = ROLES[roleIdx]
    let timeout: ReturnType<typeof setTimeout>
    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else {
      setIsDeleting(false)
      setRoleIdx((roleIdx + 1) % ROLES.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIdx])

  // Parallax mouse
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      setMousePos({ x, y })
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  // Scroll reveal
  useEffect(() => {
    const els = heroRef.current?.querySelectorAll('.reveal')
    if (!els) return
    const timer = setTimeout(() => {
      els.forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), i * 120)
      })
    }, 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      ref={heroRef}
      style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(80px, 10vw, 160px) clamp(24px, 5vw, 96px) clamp(48px, 6vw, 96px)', overflow: 'hidden', zIndex: 1 }}
    >
      {/* Gradient orbs */}
      <div style={{ position: 'absolute', top: '15%', right: '10%', width: 'clamp(300px, 40vw, 600px)', height: 'clamp(300px, 40vw, 600px)', background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none', transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`, transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)' }} />
      <div style={{ position: 'absolute', bottom: '20%', left: '-5%', width: 'clamp(200px, 30vw, 400px)', height: 'clamp(200px, 30vw, 400px)', background: 'radial-gradient(circle, rgba(255,107,107,0.08) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none', transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)`, transition: 'transform 0.8s cubic-bezier(0.16,1,0.3,1)' }} />

      <div style={{ maxWidth: 1200, position: 'relative', zIndex: 2 }}>
        {/* Eyebrow label */}
        <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
          <div style={{ width: 32, height: 1, background: 'var(--accent-violet)' }} />
          <span className="t-label-accent">Design × Strategy × Growth</span>
        </div>

        {/* Main headline - mixed typography */}
        <div className="reveal" style={{ marginBottom: 24 }}>
          <h1 style={{ margin: 0 }}>
            <span className="t-display" style={{ display: 'block', color: 'var(--text-primary)' }}>Turning</span>
            <span className="t-display-italic" style={{ display: 'block' }}>design</span>
            <span className="t-display" style={{ display: 'block', color: 'var(--text-primary)' }}>into</span>
            <span className="t-hero gradient-text" style={{ display: 'block', lineHeight: 1.1 }}>commercial outcomes.</span>
          </h1>
        </div>

        {/* Role typewriter */}
        <div className="reveal" style={{ marginBottom: 32, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', fontWeight: 400, color: 'var(--text-muted)' }}>Currently:</span>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', minWidth: 220 }}>
            {displayed}<span className="typed-cursor" />
          </span>
        </div>

        {/* Body copy - MUCH better readability */}
        <p className="reveal t-body-lg" style={{ maxWidth: 600, marginBottom: 48 }}>
          Eight years architecting visual systems that drive commercial results. Part of the founding team
          at <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Bazaar Technologies</span> that
          scaled to <span style={{ color: 'var(--accent-violet-light)', fontWeight: 600 }}>$100M+ institutional funding</span>,
          2.4M businesses digitized across 500+ cities — a story of design-led growth at scale.
        </p>

        {/* CTA buttons */}
        <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 64 }}>
          <Link href="/work" className="btn-primary">
            View Selected Work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link href="/contact" className="btn-secondary">
            Start a Conversation
          </Link>
        </div>

        {/* Social proof micro-badges */}
        <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {[
            { icon: '🏛️', label: 'HBS Case Study' },
            { icon: '💰', label: '$100M+ Raised' },
            { icon: '📱', label: '2.4M Businesses' },
            { icon: '⭐', label: '8+ Years' },
          ].map((badge) => (
            <div key={badge.label} className="glass" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: 100 }}>
              <span style={{ fontSize: '0.9rem' }}>{badge.icon}</span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>{badge.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: 40, left: 'clamp(24px, 5vw, 96px)', display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, transparent, var(--accent-violet))', marginBottom: 4 }} />
        <span className="t-label" style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}>Scroll</span>
      </div>
    </section>
  )
}
