'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    title: 'Consultation',
    description: 'Executive advisory on brand architecture, growth strategy, and go-to-market execution.',
    services: ['Brand Audits', 'GTM Strategy', 'Growth Systems', 'Fractional CMO'],
  },
  {
    title: 'Brand Strategy',
    description: 'Full-funnel brand positioning from vision to voice. Creating identity systems that drive commercial outcomes.',
    services: ['Positioning', 'Messaging Frameworks', 'Brand Architecture', 'Visual Identity'],
  },
  {
    title: 'Design',
    description: 'Museum-quality creative direction. UI/UX systems, product design, motion, and visual storytelling.',
    services: ['UI/UX Design', 'Product Design', 'Creative Direction', 'Motion & Animation'],
  },
  {
    title: 'Development',
    description: 'Production-grade web and mobile development engineered for performance and scale.',
    services: ['Next.js / React', 'Mobile Apps', 'Design Systems', 'Web Platforms'],
  },
];

export function CapabilitiesGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current, { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-8 bg-warm-gray">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16 border-b border-muted/20 pb-8">
          <div>
            <p className="t-label text-muted uppercase tracking-[0.3em] mb-2">What I Do</p>
            <h2 className="t-display text-paper">Capabilities</h2>
          </div>
          <Link href="/capabilities" className="t-label text-muted hover:text-paper transition-colors uppercase tracking-widest">
            Full Scope &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-muted/10">
          {capabilities.map((cap, i) => (
            <div key={cap.title} ref={(el) => { if (el) cardsRef.current[i] = el; }} className="bg-warm-gray p-8 opacity-0">
              <h3 className="t-title text-paper mb-4">{cap.title}</h3>
              <p className="t-body text-muted mb-6 leading-relaxed">{cap.description}</p>
              <ul className="space-y-2">
                {cap.services.map((service) => (
                  <li key={service} className="t-label text-muted flex items-center gap-2">
                    <span className="w-1 h-1 bg-accent rounded-full shrink-0" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
