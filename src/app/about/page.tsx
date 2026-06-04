'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function AboutPage() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  useEffect(() => {
    if (!mounted) return
    const obs = new IntersectionObserver((entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('a-visible') }), { threshold: 0.15 })
    document.querySelectorAll('.a-reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [mounted])

  const stats = [
    { value: '$100M+', label: 'Institutional Capital', accent: '#8B5CF6' },
    { value: '2.4M', label: 'Businesses Digitized', accent: '#F97316' },
    { value: 'HBS', label: 'Harvard Case Study', accent: '#06B6D4' },
    { value: '8+', label: 'Years of Execution', accent: '#10B981' },
  ]
  const timeline = [
    { period: 'Jun 2026 - Present', role: 'Marketing Director', company: 'FORJWELL', desc: 'Lead global marketing strategy and brand architecture for Forjocean.', accent: '#8B5CF6' },
    { period: 'Jan 2024 - Jan 2026', role: 'Head of Growth & Product Marketing', company: 'JUMPPACE / RIZZNART', desc: 'Co-founded Rizznart. Built growth engines lowering CAC via organic and creator-led distribution.', accent: '#F97316' },
    { period: '2021 - 2023', role: 'Creative Brand Manager', company: 'BAZAAR TECHNOLOGIES', desc: '30% brand awareness surge. 80% sentiment improvement. 25% acquisition uplift. HBS Case Study 822-098.', accent: '#06B6D4' },
  ]

  return (
    <main style={{ background: 'var(--color-ink)', minHeight: '100vh' }}>
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(80px,12vh,140px) clamp(24px,6vw,96px) clamp(40px,6vh,80px)', position: 'relative' }}>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', width: '100%' }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 'clamp(16px,3vh,32px)', opacity: mounted ? 1 : 0, transition: 'opacity 0.6s ease 0.2s' }}>About / The Human Behind the Work</p>
          <div style={{ overflow: 'hidden', marginBottom: 8 }}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3.5rem,9vw,10rem)', fontWeight: 400, lineHeight: 0.9, letterSpacing: '-0.03em', color: 'var(--color-paper)', margin: 0, transform: mounted ? 'translateY(0)' : 'translateY(110%)', transition: 'transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.3s' }}>Mustafa</h1>
          </div>
          <div style={{ overflow: 'hidden', marginBottom: 'clamp(24px,4vh,48px)' }}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3.5rem,9vw,10rem)', fontWeight: 400, lineHeight: 0.9, letterSpacing: '-0.03em', color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.3)', margin: 0, transform: mounted ? 'translateY(0)' : 'translateY(110%)', transition: 'transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.45s' }}>Uzair</h1>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(16px,3vw,48px)', maxWidth: 800 }}>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.9rem,1.4vw,1.1rem)', lineHeight: 1.65, color: 'var(--color-paper)', opacity: mounted ? 1 : 0, transition: 'opacity 0.8s ease 0.7s', margin: 0 }}>Tested in the high-stakes world of venture capital. Museum-quality aesthetics meets rigorous commercial intent.</p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.9rem,1.4vw,1.1rem)', lineHeight: 1.65, color: 'var(--color-muted)', opacity: mounted ? 1 : 0, transition: 'opacity 0.8s ease 0.85s', margin: 0 }}>I engineer visual stories that capture human psychology. Not just beautiful — strategically dominant.</p>
          </div>
        </div>
      </section>
      <section style={{ padding: '0 clamp(24px,6vw,96px) clamp(80px,10vh,120px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 'clamp(12px,2vw,24px)', marginBottom: 'clamp(60px,8vh,100px)' }}>
            {stats.map((s, i) => (
              <div key={s.value} className="a-reveal" style={{ padding: 'clamp(20px,3vw,36px) clamp(16px,2.5vw,28px)', border: '1px solid ' + s.accent + '33', borderTop: '2px solid ' + s.accent, background: 'linear-gradient(135deg,' + s.accent + '08 0%,transparent 60%)', transitionDelay: i * 0.1 + 's' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4vw,4rem)', fontWeight: 400, color: s.accent, lineHeight: 1, marginBottom: 8 }}>{s.value}</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-muted)' }}>{s.label}</div>
              </div>
            ))}
          </div>
          <div className="a-reveal" style={{ padding: 'clamp(32px,5vw,60px)', border: '1px solid rgba(255,255,255,0.06)', background: 'linear-gradient(135deg,rgba(139,92,246,0.05) 0%,rgba(249,115,22,0.03) 100%)', marginBottom: 'clamp(60px,8vh,100px)' }}>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 16 }}>Manifesto</p>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.4rem,3vw,2.8rem)', fontWeight: 400, color: 'var(--color-paper)', lineHeight: 1.25, letterSpacing: '-0.02em', margin: 0 }}>"High-fidelity art directly drives unit economics. Every pixel is a commercial argument."</p>
          </div>
        </div>
      </section>
      <section style={{ padding: '0 clamp(24px,6vw,96px) clamp(80px,10vh,120px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 'clamp(32px,5vh,64px)' }}>Career Trajectory</p>
          {timeline.map((job, i) => (
            <div key={job.company} className="a-reveal" style={{ display: 'grid', gridTemplateColumns: 'clamp(160px,20vw,220px) 1fr', gap: 'clamp(24px,4vw,60px)', paddingBottom: 'clamp(32px,5vh,56px)', marginBottom: 'clamp(32px,5vh,56px)', borderBottom: '1px solid rgba(255,255,255,0.05)', transitionDelay: i * 0.12 + 's' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: job.accent, marginBottom: 8 }}>{job.period}</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-muted)', fontWeight: 600 }}>{job.company}</div>
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.4rem,2.5vw,2.2rem)', fontWeight: 400, color: 'var(--color-paper)', margin: '0 0 12px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>{job.role}</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.85rem,1.2vw,0.95rem)', color: 'var(--color-muted)', lineHeight: 1.7, margin: 0 }}>{job.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section style={{ padding: '0 clamp(24px,6vw,96px) clamp(80px,10vh,120px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem,4vw,3.5rem)', fontWeight: 400, color: 'var(--color-paper)', letterSpacing: '-0.02em', margin: 0, lineHeight: 1.1 }}>Let us build something that moves markets.</p>
          <div style={{ display: 'flex', gap: 16 }}>
            <Link href="/contact" style={{ padding: '14px 28px', background: 'var(--color-paper)', color: 'var(--color-ink)', fontFamily: 'var(--font-sans)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, textDecoration: 'none' }}>Start Conversation</Link>
            <Link href="/work" style={{ padding: '14px 28px', border: '1px solid rgba(255,255,255,0.15)', color: 'var(--color-paper)', fontFamily: 'var(--font-sans)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}>View Work</Link>
          </div>
        </div>
      </section>
      <style>{`
        .a-reveal { opacity: 0; transform: translateY(32px); transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1); }
        .a-visible { opacity: 1 !important; transform: translateY(0) !important; }
      `}</style>
    </main>
  )
}
