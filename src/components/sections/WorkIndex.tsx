'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const works = [
  { id: '01', category: 'Enterprise Design Systems', title: 'Bazaar Suite', subtitle: "Scaling Pakistan's Largest B2B Commerce Platform", description: 'Led end-to-end design across 5 products serving 300K+ retailers. Unified design system cut handoff time by 60%.', metrics: ['300K+ Retailers', '5 Products', '60% Faster'], href: '/work/enterprise', color: '#8B5CF6', year: '2022-2024', bg: 'grid' },
  { id: '02', category: '0-to-1 Product Incubation', title: 'Product Studio', subtitle: 'Four Apps from Concept to App Store in 90-Day Sprints', description: 'Took 4 products from blank canvas to launch: MemoryMag, EZMedrex, BeachLyfe, ActiveSOS. Each shipped in 90 days.', metrics: ['4 Apps Launched', 'iOS + Android', '90-Day Sprints'], href: '/work/products', color: '#F97316', year: '2023-2025', bg: 'dots' },
  { id: '03', category: 'B2B SaaS & Creative Direction', title: 'Locus & Growth Clients', subtitle: 'Supply Chain Intelligence Meets Conversion Design', description: "Creative direction for Locus - a $50M+ Series B SaaS across 30+ countries. Enterprise storytelling and growth assets.", metrics: ['30+ Countries', '$50M+ Series B', 'Enterprise GTM'], href: '/work/saas', color: '#06B6D4', year: '2023-2024', bg: 'lines' },
  { id: '04', category: 'Brand Identity & Visual Systems', title: 'DARTE & Brand Projects', subtitle: 'Identity Systems That Earn Instant Recognition', description: 'Full brand identities for startups: logos, typography, color, guidelines. Built to scale across all touchpoints.', metrics: ['8+ Brands', 'Full Identity Systems', 'Print to Digital'], href: '/work/brand', color: '#F59E0B', year: '2021-2025', bg: 'radial' },
]

function getBg(bg: string, c: string) {
  if (bg === 'grid') return { backgroundImage: 'linear-gradient(' + c + '20 1px, transparent 1px), linear-gradient(90deg, ' + c + '20 1px, transparent 1px), radial-gradient(ellipse at 70% 40%, ' + c + '22 0%, transparent 55%)', backgroundSize: '32px 32px, 32px 32px, 100% 100%' }
  if (bg === 'dots') return { backgroundImage: 'radial-gradient(circle, ' + c + '45 1.5px, transparent 1.5px), radial-gradient(ellipse at 30% 60%, ' + c + '18 0%, transparent 50%)', backgroundSize: '24px 24px, 100% 100%' }
  if (bg === 'lines') return { backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 12px, ' + c + '16 12px, ' + c + '16 13px), radial-gradient(ellipse at 60% 30%, ' + c + '20 0%, transparent 55%)' }
  return { backgroundImage: 'radial-gradient(circle at 50% 50%, ' + c + '28 0%, ' + c + '06 40%, transparent 65%)' }
}

export default function WorkIndex() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('wi-vis') }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.wi-card').forEach((c) => obs.observe(c))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="work" style={{ padding: 'clamp(60px,10vh,120px) clamp(24px,6vw,96px)', background: 'var(--color-ink)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="wi-card" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 'clamp(40px,7vh,72px)', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#8B5CF6', marginBottom: 12 }}>Selected Work</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem,6vw,5.5rem)', fontWeight: 400, color: 'var(--color-paper)', lineHeight: 0.95, letterSpacing: '-0.03em', margin: 0 }}>Work that moves markets.</h2>
          </div>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', color: 'var(--color-muted)', letterSpacing: '0.1em', lineHeight: 1.8 }}>2021 - 2025 / 4 disciplines</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'clamp(12px,1.5vw,20px)' }}>
          {works.map((w, i) => (
            <Link key={w.id} href={w.href} className="wi-card" style={{ textDecoration: 'none', display: 'block', transitionDelay: i * 80 + 'ms' }} onMouseEnter={() => setActive(i as any)} onMouseLeave={() => setActive(null)}>
              <div style={{ border: '1px solid ' + (active === i ? w.color + '45' : 'rgba(255,255,255,0.06)'), borderRadius: 4, overflow: 'hidden', background: active === i ? w.color + '09' : 'rgba(14,14,20,0.6)', transition: 'all 0.4s ease', boxShadow: active === i ? '0 24px 64px ' + w.color + '18' : 'none' }}>
                <div style={{ height: 'clamp(140px,18vw,220px)', position: 'relative', overflow: 'hidden', background: 'rgba(8,8,14,0.8)', ...getBg(w.bg, w.color) }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, ' + w.color + '12 0%, transparent 60%)' }} />
                  <div style={{ position: 'absolute', top: 'clamp(16px,3vw,28px)', left: 'clamp(16px,3vw,28px)' }}>
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem,5vw,5.5rem)', fontWeight: 400, color: w.color, opacity: active === i ? 0.9 : 0.3, transition: 'opacity 0.4s', lineHeight: 1 }}>{w.id}</span>
                  </div>
                  <div style={{ position: 'absolute', top: 'clamp(16px,3vw,28px)', right: 'clamp(16px,3vw,28px)' }}>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.58rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: w.color, opacity: 0.6 }}>{w.year}</span>
                  </div>
                  <div style={{ position: 'absolute', bottom: 'clamp(12px,2vw,20px)', right: 'clamp(12px,2vw,20px)', width: 34, height: 34, border: '1px solid ' + w.color + '50', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: active === i ? w.color + '20' : 'transparent', transition: 'all 0.4s', transform: active === i ? 'rotate(-45deg)' : 'rotate(0)' }}>
                    <span style={{ color: w.color, fontSize: 14 }}>{'>'}</span>
                  </div>
                </div>
                <div style={{ padding: 'clamp(16px,2.5vw,28px)' }}>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.58rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: w.color, margin: '0 0 8px' }}>{w.category}</p>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.2rem,2vw,1.75rem)', fontWeight: 400, color: 'var(--color-paper)', margin: '0 0 6px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>{w.title}</h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.72rem,1.1vw,0.82rem)', color: 'var(--color-muted)', margin: '0 0 10px', lineHeight: 1.5 }}>{w.subtitle}</p>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.68rem,0.95vw,0.77rem)', color: 'rgba(255,255,255,0.38)', lineHeight: 1.65, margin: '0 0 14px' }}>{w.description}</p>
                  <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
                    {w.metrics.map((m) => (
                      <span key={m} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 9px', border: '1px solid ' + w.color + '28', color: w.color, opacity: 0.8, borderRadius: 2 }}>{m}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="wi-card" style={{ marginTop: 'clamp(40px,6vh,64px)', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.62rem', color: 'var(--color-muted)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 18 }}>Every project. Every decision. Documented.</p>
          <Link href="/work/enterprise" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '13px 28px', border: '1px solid rgba(139,92,246,0.3)', color: '#8B5CF6', fontFamily: 'var(--font-sans)', fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: 2 }}>
            Explore all case studies
          </Link>
        </div>
      </div>
      <style>{`
        .wi-card { opacity: 0; transform: translateY(22px); transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1); }
        .wi-vis { opacity: 1 !important; transform: translateY(0) !important; }
      `}</style>
    </section>
  )
}
