—'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const ROLES = ['Brand Strategist', 'Product Designer', 'Growth Architect', 'Creative Director']

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [mounted, setMounted] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const lineRef1 = useRef<HTMLSpanElement>(null)
  const lineRef2 = useRef<HTMLSpanElement>(null)
  const lineRef3 = useRef<HTMLSpanElement>(null)
  const lineRef4 = useRef<HTMLSpanElement>(null)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    if (!mounted) return
    const refs = [lineRef1, lineRef2, lineRef3, lineRef4]
    refs.forEach((ref, i) => {
      setTimeout(() => {
        if (ref.current) {
          ref.current.style.opacity = '1'
          ref.current.style.transform = 'translateY(0) skewY(0deg)'
        }
      }, 300 + i * 150)
    })
    const cards = heroRef.current?.querySelectorAll('.h-reveal')
    cards?.forEach((el, i) => {
      setTimeout(() => el.classList.add('h-visible'), 900 + i * 120)
    })
  }, [mounted])

  useEffect(() => {
    const current = ROLES[roleIdx]
    let timeout: ReturnType<typeof setTimeout>
    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75)
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    } else {
      setIsDeleting(false)
      setRoleIdx((roleIdx + 1) % ROLES.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIdx])

  return (
    <section ref={heroRef} style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 clamp(24px,6vw,96px)', paddingTop: 'clamp(100px,12vh,140px)', paddingBottom: 'clamp(60px,8vh,100px)', overflow: 'hidden', zIndex: 1 }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, backgroundImage: 'linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)', backgroundSize: '80px 80px', maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black, transparent)', WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black, transparent)' }} />
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '42%', pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '20%', right: '10%', width: 'clamp(240px,28vw,480px)', height: 'clamp(240px,28vw,480px)', background: 'radial-gradient(circle at 40% 40%, rgba(139,92,246,0.18) 0%, rgba(139,92,246,0.06) 40%, transparent 70%)', borderRadius: '50%', animation: 'orbFloat1 8s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', bottom: '15%', right: '20%', width: 'clamp(160px,20vw,320px)', height: 'clamp(160px,20vw,320px)', background: 'radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 70%)', borderRadius: '50%', animation: 'orbFloat2 11s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', top: '28%', right: '15%', background: 'rgba(22,22,30,0.7)', backdropFilter: 'blur(20px)', border: '1px solid rgba(139,92,246,0.25)', borderRadius: 16, padding: '20px 28px', minWidth: 180, animation: 'cardFloat1 6s ease-in-out infinite', boxShadow: '0 8px 40px rgba(139,92,246,0.15)' }}>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 700, color: '#A78BFA', lineHeight: 1 }}>$100M+</div>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(168,164,184,0.7)', marginTop: 6 }}>Institutional funding</div>
          <div style={{ width: '100%', height: 2, background: 'linear-gradient(90deg,#8B5CF6,#EC4899)', borderRadius: 1, marginTop: 12, transformOrigin: 'left', animation: 'barGrow 3s ease-in-out infinite' }} />
        </div>
        <div style={{ position: 'absolute', top: '52%', right: '8%', background: 'rgba(22,22,30,0.65)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,107,107,0.2)', borderRadius: 16, padding: '18px 24px', minWidth: 160, animation: 'cardFloat2 7s ease-in-out infinite' }}>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 700, color: '#FF8585', lineHeight: 1 }}>2.4M</div>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(168,164,184,0.7)', marginTop: 6 }}>Businesses digitized</div>
        </div>
        <div style={{ position: 'absolute', top: '68%', right: '30%', background: 'rgba(22,22,30,0.6)', backdropFilter: 'blur(20px)', border: '1px solid rgba(6,182,212,0.2)', borderRadius: 12, padding: '14px 20px', animation: 'cardFloat3 9s ease-in-out infinite' }}>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.2rem,2vw,1.8rem)', fontWeight: 700, color: '#22D3EE', lineHeight: 1 }}>HBS</div>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(168,164,184,0.6)', marginTop: 4 }}>Case Study</div>
        </div>
      </div>
      <div style={{ maxWidth: 720, position: 'relative', zIndex: 2 }}>
        <div className="h-reveal" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 'clamp(20px,3vh,36px)' }}>
          <div style={{ width: 40, height: 1, background: 'linear-gradient(90deg, #8B5CF6, transparent)' }} />
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.68rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#A78BFA' }}>Design x Strategy x Growth</span>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: 4 }}>
          <span ref={lineRef1} style={{ display: 'block', fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.8rem,6.5vw,7.5rem)', fontWeight: 400, lineHeight: 0.92, letterSpacing: '-0.03em', color: 'var(--color-paper)', opacity: 0, transform: 'translateY(100%) skewY(3deg)', transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)' }}>Turning</span>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: 4 }}>
          <span ref={lineRef2} style={{ display: 'block', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(2.8rem,6.5vw,7.5rem)', fontWeight: 400, lineHeight: 0.92, letterSpacing: '-0.02em', color: '#A78BFA', opacity: 0, transform: 'translateY(100%) skewY(3deg)', transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)' }}>design</span>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: 4 }}>
          <span ref={lineRef3} style={{ display: 'block', fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.8rem,6.5vw,7.5rem)', fontWeight: 400, lineHeight: 0.92, letterSpacing: '-0.03em', color: 'var(--color-paper)', opacity: 0, transform: 'translateY(100%) skewY(3deg)', transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)' }}>into</span>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: 'clamp(20px,3vh,36px)' }}>
          <span ref={lineRef4} style={{ display: 'block', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.6rem,4vw,4.5rem)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.025em', color: '#A78BFA', opacity: 0, transform: 'translateY(100%) skewY(3deg)', transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)' }}>commercial outcomes.</span>
        </div>
        <div className="h-reveal" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 'clamp(16px,2.5vh,28px)' }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--color-muted)' }}>Currently:</span>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 600, color: 'var(--color-paper)', minWidth: 200 }}>{displayed}<span className="typed-cursor" /></span>
        </div>
        <p className="h-reveal" style={{ maxWidth: 540, marginBottom: 'clamp(24px,4vh,44px)', fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.9rem,1.1vw,1.05rem)', lineHeight: 1.8, color: 'var(--color-muted)' }}>
          Eight years architecting visual systems that drive commercial results. Founding team at{' '}
          <span style={{ color: 'var(--color-paper)', fontWeight: 500 }}>Bazaar Technologies</span> scaled to{' '}
          <span style={{ color: '#A78BFA', fontWeight: 600 }}>$100M+ institutional funding</span>, 2.4M businesses digitized.
        </p>
        <div className="h-reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginBottom: 'clamp(32px,5vh,56px)' }}>
          <Link href="/work" className="btn-primary">View Selected Work</Link>
          <Link href="/contact" className="btn-secondary">Start a Conversation</Link>
        </div>
        <div className="h-reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {['HBS Case Study', '$100M+ Raised', '2.4M Businesses', '8+ Years'].map((label) => (
            <div key={label} className="glass" style={{ padding: '7px 14px', borderRadius: 100 }}>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-muted)' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="h-reveal" style={{ position: 'absolute', bottom: 32, left: 'clamp(24px,6vw,96px)', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 1, height: 36, background: 'linear-gradient(to bottom, transparent, #8B5CF6)' }} />
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-muted)', writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}>Scroll</span>
      </div>
      <style>{`
        .h-reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1); }
        .h-visible { opacity: 1 !important; transform: translateY(0) !important; }
        .typed-cursor { display: inline-block; width: 2px; height: 1.1em; background: #A78BFA; margin-left: 2px; animation: blink 1s step-end infinite; vertical-align: text-bottom; }
        @keyframes blink { 0%,100% { opacity: 1 } 50% { opacity: 0 } }
        @keyframes orbFloat1 { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-30px) scale(1.05)} }
        @keyframes orbFloat2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(20px) rotate(8deg)} }
        @keyframes cardFloat1 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes cardFloat2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(10px)} }
        @keyframes cardFloat3 { 0%,100%{transform:translateY(0) rotate(-2deg)} 50%{transform:translateY(-8px) rotate(2deg)} }
        @keyframes barGrow { 0%,100%{transform:scaleX(0.6)} 50%{transform:scaleX(1)} }
      `}</style>
    </section>
  )
}
