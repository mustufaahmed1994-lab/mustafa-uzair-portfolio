'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const metaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simple fade-in animation without GSAP dependency at module level
    const elements = [headlineRef.current, subRef.current, ctaRef.current, metaRef.current]
    elements.forEach((el, i) => {
      if (el) {
        el.style.opacity = '0'
        el.style.transform = 'translateY(24px)'
        el.style.transition = `opacity 0.9s ease ${i * 0.15}s, transform 0.9s ease ${i * 0.15}s`
        setTimeout(() => {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
        }, 100)
      }
    })
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-24 overflow-hidden">
      {/* Background accent line */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#C8F135]/20 to-transparent pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl">
        {/* Eyebrow */}
        <p className="t-label text-[#C8F135] mb-8 tracking-widest" ref={metaRef}>
          Head of Growth & Product Marketing — Brand Strategy
        </p>

        {/* Hero headline */}
        <h1 ref={headlineRef} className="t-hero text-[#F0EDE6] mb-10 max-w-5xl">
          Turning design<br />
          into commercial<br />
          <span className="text-[#C8F135]">outcomes.</span>
        </h1>

        {/* Sub-headline */}
        <p ref={subRef} className="t-body text-[#3A3A3A] max-w-2xl mb-16 text-lg leading-relaxed">
          Eight years engineering visual narratives that capture market leadership.
          Part of the core team that scaled Bazaar Technologies to{' '}
          <span className="text-[#F0EDE6]">$100M+ in funding</span> — a journey
          documented in{' '}
          <span className="text-[#F0EDE6]">Harvard Business School Case Study 822-098</span>.
        </p>

        {/* CTA row */}
        <div ref={ctaRef} className="flex flex-wrap items-center gap-6">
          <Link
            href="/work"
            className="inline-flex items-center gap-3 bg-[#C8F135] text-[#080808] px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-[#F0EDE6] transition-colors duration-300"
          >
            View Work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 border border-[#3A3A3A] text-[#F0EDE6] px-8 py-4 text-sm font-medium tracking-wide uppercase hover:border-[#F0EDE6] transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-6 md:left-12 lg:left-24 flex items-center gap-4">
          <div className="w-8 h-px bg-[#3A3A3A]" />
          <span className="t-label text-[#3A3A3A] text-[10px]">Scroll to explore</span>
        </div>
      </div>
    </section>
  )
}
