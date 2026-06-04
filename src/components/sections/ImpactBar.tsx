'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: '$100M+', label: 'Institutional Funding', sub: 'Tiger Global & Dragoneer' },
  { value: '2.4M', label: 'Businesses Digitized', sub: 'Easy Khata across 500+ cities' },
  { value: '300K+', label: 'Monthly Active Users', sub: 'Across all products' },
  { value: '8+', label: 'Years High-Stakes', sub: 'VC-backed environments' },
]

export default function ImpactBar() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    const targets = [100, 2.4, 300, 8]
    const durations = [1200, 1400, 1600, 1000]
    targets.forEach((target, i) => {
      const steps = 40
      const increment = target / steps
      let current = 0
      const interval = setInterval(() => {
        current = Math.min(current + increment, target)
        setCounts(prev => {
          const next = [...prev]
          next[i] = current
          return next
        })
        if (current >= target) clearInterval(interval)
      }, durations[i] / steps)
    })
  }, [visible])

  const formatCount = (idx: number, val: number) => {
    if (idx === 0) return val >= 100 ? '$100M+' : `$${Math.floor(val)}M`
    if (idx === 1) return val >= 2.4 ? '2.4M' : `${val.toFixed(1)}M`
    if (idx === 2) return val >= 300 ? '300K+' : `${Math.floor(val)}K`
    return val >= 8 ? '8+' : `${Math.floor(val)}`
  }

  return (
    <section ref={sectionRef} style={{ padding: 'clamp(48px,6vw,80px) clamp(24px,5vw,96px)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'clamp(32px,4vw,64px)' }}>
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(32px)',
              transition: `opacity 0.7s ease ${i * 0.15}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.15}s`,
              textAlign: 'center',
            }}
          >
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 700, background: 'linear-gradient(135deg,#8B5CF6,#EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1, marginBottom: 8 }}>
              {formatCount(i, counts[i])}
            </div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>
              {stat.label}
            </div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              {stat.sub}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
