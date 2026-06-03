'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '$100M+', label: 'Institutional Funding', sub: 'Tiger Global & Dragoneer' },
  { value: '2.4M', label: 'Businesses Digitized', sub: 'Easy Khata across 500 cities' },
  { value: 'HBS', label: 'Case Study 822-098', sub: 'Harvard Business School' },
  { value: '8+', label: 'Years High-Stakes', sub: 'VC-backed environments' },
];

export function ImpactBar() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(itemsRef.current, { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-8 border-t border-muted/20">
      <div className="max-w-7xl mx-auto">
        <p className="t-label text-muted uppercase tracking-[0.3em] mb-16">Validated at Scale</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <div key={stat.label} ref={(el) => { if (el) itemsRef.current[i] = el; }} className="opacity-0">
              <div className="t-hero text-paper mb-2 font-light">{stat.value}</div>
              <div className="t-title text-paper mb-1">{stat.label}</div>
              <div className="t-label text-muted">{stat.sub}</div>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-muted/20">
          <p className="t-body text-muted max-w-2xl">
            Work featured in{' '}
            <span className="text-paper">Harvard Business School Case Study 822-098</span>
            {' '}&mdash; documenting brand-led growth during Bazaar Technologies hyper-growth phase.
          </p>
        </div>
      </div>
    </section>
  );
}
