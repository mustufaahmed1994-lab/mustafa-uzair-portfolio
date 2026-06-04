'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

export default function AboutPage() {
    const [mounted, setMounted] = useState(false)
    const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
        setMounted(true)
  }, [])

  useEffect(() => {
        if (!mounted) return
        const els = document.querySelectorAll('.a-reveal')
        const obs = new IntersectionObserver(
                (entries) => entries.forEach(e => {
                          if (e.isIntersecting) e.target.classList.add('a-visible')
                }),
          { threshold: 0.15 }
              )
        els.forEach(el => obs.observe(el))
        return () => obs.disconnect()
  }, [mounted])

  const stats = [
    { value: '$100M+', label: 'Institutional Capital Raised', accent: '#8B5CF6' },
    { value: '2.4M', label: 'Businesses Digitized', accent: '#F97316' },
    { value: 'HBS', label: 'Harvard Case Study', accent: '#06B6D4' },
    { value: '8+', label: 'Years of Execution', accent: '#10B981' },
      ]

  const timeline = [
    {
            period: 'Jun 2026 - Present',
            role: 'Marketing Director',
            company: 'FORJWELL',
            desc: 'Lead global marketing strategy and brand architecture for the enterprise and parent company Forjocean.',
            accent: '#8B5CF6',
    },
    {
            period: 'Jan 2024 - Jan 2026',
            role: 'Head of Growth & Product Marketing',
            company: 'JUMPPACE / RIZZNART',
            desc: 'Co-founded Rizznart. Built growth engines lowering CAC via organic and creator-led distribution.',
            accent: '#F97316',
    },
    {
            period: '2021 - 2023',
            role: 'Creative Brand Manager',
            company: 'BAZAAR TECHNOLOGIES',
            desc: '30% surge in brand awareness. 80% improvement in sentiment. 25% customer acquisition uplift. Harvard Business School Case Study 822-098.',
            accent: '#06B6D4',
    },
      ]

  return (
        <>
              <main style={{ background: 'var(--color-ink)', minHeight: '100vh', overflow: 'hidden' }}>
              
                {/* CINEMATIC HERO FOLD */}
                      <section ref={heroRef} style={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: 'clamp(80px, 12vh, 140px) clamp(24px, 6vw, 96px) clamp(40px, 6vh, 80px)',
                    position: 'relative',
        }}>
                        {/* Background accent lines */}
                                <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                                            <div style={{ position: 'absolute', top: '15%', right: '8%', width: 1, height: '40%', background: 'linear-gradient(to bottom, transparent, rgba(139,92,246,0.4), transparent)', animation: 'lineFloat 4s ease-in-out infinite' }} />
                                            <div style={{ position: 'absolute', top: '30%', right: '18%', width: 1, height: '25%', background: 'linear-gradient(to bottom, transparent, rgba(249,115,22,0.3), transparent)', animation: 'lineFloat 6s ease-in-out infinite reverse' }} />
                                            <div style={{ position: 'absolute', top: '20%', left: '5%', width: 80, height: 80, borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)', animation: 'orbPulse 5s ease-in-out infinite' }} />
                                </div>div>
                      
                                <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', width: '100%' }}>
                                            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 'clamp(16px, 3vh, 32px)', opacity: mounted ? 1 : 0, transition: 'opacity 0.6s ease 0.2s' }}>
                                                          About / The Human Behind the Work
                                            </p>p>
                                
                                            <div style={{ overflow: 'hidden', marginBottom: 8 }}>
                                                          <h1 style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: 'clamp(3.5rem, 9vw, 10rem)',
                          fontWeight: 400,
                          lineHeight: 0.9,
                          letterSpacing: '-0.03em',
                          color: 'var(--color-paper)',
                          margin: 0,
                          transform: mounted ? 'translateY(0) skewY(0deg)' : 'translateY(100%) skewY(3deg)',
                          transition: 'transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.3s',
        }}>
                                                                          Mustafa
                                                          </h1>h1>
                                            </div>div>
                                            <div style={{ overflow: 'hidden', marginBottom: 'clamp(24px, 4vh, 48px)' }}>
                                                          <h1 style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: 'clamp(3.5rem, 9vw, 10rem)',
                          fontWeight: 400,
                          lineHeight: 0.9,
                          letterSpacing: '-0.03em',
                          color: 'transparent',
                          WebkitTextStroke: '1px rgba(255,255,255,0.3)',
                          margin: 0,
                          transform: mounted ? 'translateY(0) skewY(0deg)' : 'translateY(100%) skewY(3deg)',
                          transition: 'transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.45s',
        }}>
                                                                          Uzair
                                                          </h1>h1>
                                            </div>div>
                                
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(16px, 3vw, 48px)', maxWidth: 800 }}>
                                                          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.9rem, 1.4vw, 1.1rem)', lineHeight: 1.65, color: 'var(--color-paper)', opacity: mounted ? 1 : 0, transition: 'opacity 0.8s ease 0.7s', margin: 0 }}>
                                                                          Tested in the high-stakes world of venture capital. I believe true design requires both museum-quality aesthetics and rigorous commercial intent.
                                                          </p>p>
                                                          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.9rem, 1.4vw, 1.1rem)', lineHeight: 1.65, color: 'var(--color-muted)', opacity: mounted ? 1 : 0, transition: 'opacity 0.8s ease 0.85s', margin: 0 }}>
                                                                          I engineer visual stories that capture human psychology and dictate market leadership. Not just beautiful — strategically dominant.
                                                          </p>p>
                                            </div>div>
                                </div>div>
                      </section>section>
              
              
                {/* STATS GRID */}
                      <section style={{ padding: '0 clamp(24px, 6vw, 96px) clamp(80px, 10vh, 120px)' }}>
                                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'clamp(12px, 2vw, 24px)', marginBottom: 'clamp(60px, 8vh, 100px)' }}>
                                              {stats.map((s, i) => (
                          <div key={s.value} className="a-reveal" style={{
                                              padding: 'clamp(20px, 3vw, 36px) clamp(16px, 2.5vw, 28px)',
                                              border: `1px solid ${s.accent}33`,
                                              borderTop: `2px solid ${s.accent}`,
                                              background: `linear-gradient(135deg, ${s.accent}08 0%, transparent 60%)`,
                                              transitionDelay: `${i * 0.1}s`,
                          }}>
                                            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 4rem)', fontWeight: 400, color: s.accent, lineHeight: 1, marginBottom: 8 }}>{s.value}</div>div>
                                            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-muted)' }}>{s.label}</div>div>
                          </div>div>
                        ))}
                                            </div>div>
                                
                                  {/* MANIFESTO STRIP */}
                                            <div className="a-reveal" style={{
                        padding: 'clamp(32px, 5vw, 60px)',
                        border: '1px solid rgba(255,255,255,0.06)',
                        background: 'linear-gradient(135deg, rgba(139,92,246,0.05) 0%, rgba(249,115,22,0.03) 100%)',
                        marginBottom: 'clamp(60px, 8vh, 100px)',
        }}>
                                                          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 16 }}>Manifesto</p>p>
                                                          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.4rem, 3vw, 2.8rem)', fontWeight: 400, color: 'var(--color-paper)', lineHeight: 1.25, letterSpacing: '-0.02em', margin: 0 }}>
                                                                          "High-fidelity art directly drives unit economics. Every pixel is a commercial argument."
                                                          </p>p>
                                            </div>div>
                                </div>div>
                      </section>section>
              
              
                {/* CAREER TIMELINE */}
                      <section style={{ padding: '0 clamp(24px, 6vw, 96px) clamp(80px, 10vh, 120px)' }}>
                                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                                            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 'clamp(32px, 5vh, 64px)' }}>
                                                          Career Trajectory
                                            </p>p>
                                  {timeline.map((job, i) => (
                        <div key={job.company} className="a-reveal" style={{
                                          display: 'grid',
                                          gridTemplateColumns: 'clamp(160px, 20vw, 220px) 1fr',
                                          gap: 'clamp(24px, 4vw, 60px)',
                                          paddingBottom: 'clamp(32px, 5vh, 56px)',
                                          marginBottom: 'clamp(32px, 5vh, 56px)',
                                          borderBottom: '1px solid rgba(255,255,255,0.05)',
                                          transitionDelay: `${i * 0.12}s`,
                        }}>
                                        <div>
                                                          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: job.accent, marginBottom: 8 }}>{job.period}</div>div>
                                                          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-muted)', fontWeight: 600 }}>{job.company}</div>div>
                                        </div>div>
                                        <div>
                                                          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)', fontWeight: 400, color: 'var(--color-paper)', margin: '0 0 12px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>{job.role}</h3>h3>
                                                          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)', color: 'var(--color-muted)', lineHeight: 1.7, margin: 0 }}>{job.desc}</p>p>
                                        </div>div>
                        </div>div>
                      ))}
                                
                                  {/* EDUCATION */}
                                            <div className="a-reveal" style={{
                        display: 'grid',
                        gridTemplateColumns: 'clamp(160px, 20vw, 220px) 1fr',
                        gap: 'clamp(24px, 4vw, 60px)',
                        paddingTop: 'clamp(24px, 4vh, 48px)',
        }}>
                                                          <div>
                                                                          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#10B981', marginBottom: 8 }}>Education</div>div>
                                                                          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-muted)', fontWeight: 600 }}>IVS</div>div>
                                                          </div>div>
                                                          <div>
                                                                          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)', fontWeight: 400, color: 'var(--color-paper)', margin: '0 0 12px', letterSpacing: '-0.02em' }}>Bachelor in Communication Design</h3>h3>
                                                                          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)', color: 'var(--color-muted)', lineHeight: 1.7, margin: 0 }}>
                                                                                            Indus Valley School of Art and Architecture — GPA 4.0, Distinction in Thesis
                                                                          </p>p>
                                                          </div>div>
                                            </div>div>
                                </div>div>
                      </section>section>
              
              
                {/* CTA */}
                      <section style={{ padding: '0 clamp(24px, 6vw, 96px) clamp(80px, 10vh, 120px)' }}>
                                <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
                                            <div>
                                                          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 12 }}>Ready to Collaborate?</p>p>
                                                          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', fontWeight: 400, color: 'var(--color-paper)', letterSpacing: '-0.02em', margin: 0, lineHeight: 1.1 }}>Let us build something<br />that moves markets.</p>p>
                                            </div>div>
                                            <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                                                          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 28px', background: 'var(--color-paper)', color: 'var(--color-ink)', fontFamily: 'var(--font-sans)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, textDecoration: 'none', transition: 'opacity 0.2s' }}>
                                                                          Start Conversation
                                                          </Link>Link>
                                                          <Link href="/work" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 28px', border: '1px solid rgba(255,255,255,0.15)', color: 'var(--color-paper)', fontFamily: 'var(--font-sans)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', transition: 'border-color 0.2s' }}>
                                                                          View Work
                                                          </Link>Link>
                                            </div>div>
                                </div>div>
                      </section>section>
              
                      <style>{`
                                .a-reveal {
                                            opacity: 0;
                                                        transform: translateY(32px);
                                                                    transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1);
                                                                              }
                                                                                        .a-visible {
                                                                                                    opacity: 1 !important;
                                                                                                                transform: translateY(0) !important;
                                                                                                                          }
                                                                                                                                    @keyframes lineFloat {
                                                                                                                                                0%, 100% { opacity: 0.3; transform: scaleY(1); }
                                                                                                                                                            50% { opacity: 0.7; transform: scaleY(1.1); }
                                                                                                                                                                      }
                                                                                                                                                                                @keyframes orbPulse {
                                                                                                                                                                                            0%, 100% { transform: scale(1); opacity: 0.6; }
                                                                                                                                                                                                        50% { transform: scale(1.4); opacity: 1; }
                                                                                                                                                                                                                  }
                                                                                                                                                                                                                          `}</style>style>
              </main>main>
        </>>
      )
}
</>
