'use client';

import Link from 'next/link';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const workCategories = [
  {
    id: 'enterprise',
    number: '01',
    title: 'Enterprise Ecosystems',
    description: 'The Bazaar Suite — Easy Khata, Bazaar Pro, Shipper, Agent, Warehouse. Standardizing brand across Fintech & Marketplace. Scaled to 2.4M businesses.',
    href: '/work/enterprise',
    tags: ['Brand Systems', 'Fintech', 'Scale'],
  },
  {
    id: 'products',
    number: '02',
    title: '0-to-1 Product Incubation',
    description: 'Cross-platform consumer and medical apps: MemoryMag, EZMedrex, BeachLyfe, ActiveSOS, Pavblock. UI/UX design, app store deployment, CAC reduction.',
    href: '/work/products',
    tags: ['Product Design', 'UI/UX', 'Mobile'],
  },
  {
    id: 'saas',
    number: '03',
    title: 'B2B SaaS & Strategy',
    description: 'Feature8 UI/UX launch, Locus.sh creative content direction, Legacy Blinds brand repositioning. Growth strategy and design systems for B2B.',
    href: '/work/saas',
    tags: ['SaaS', 'Strategy', 'B2B'],
  },
  {
    id: 'brand',
    number: '04',
    title: 'Brand Identity',
    description: 'DARTE Ecosystem — character design with strict fidelity and exact proportions. Visual identity systems, brand architecture, and motion design.',
    href: '/work/brand',
    tags: ['Identity', 'DARTE', 'Character Design'],
  },
];

export function WorkIndex() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item, i) => {
        gsap.fromTo(
          item,
          { x: -30, opacity: 0 },
          {
            x: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: item, start: 'top 85%' },
            delay: i * 0.05,
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="work" className="py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16 border-b border-muted/20 pb-8">
          <p className="t-label text-muted uppercase tracking-[0.3em]">Selected Work</p>
          <Link href="/work" className="t-label text-muted hover:text-paper transition-colors uppercase tracking-widest">
            View All &rarr;
          </Link>
        </div>
        <div className="divide-y divide-muted/10">
          {workCategories.map((cat, i) => (
            <Link
              key={cat.id}
              href={cat.href}
              ref={(el) => { if (el) itemsRef.current[i] = el; }}
              className="group flex items-start gap-8 py-12 opacity-0 hover:bg-warm-gray/20 transition-colors -mx-4 px-4"
            >
              <span className="t-label text-muted mt-1 w-8 shrink-0">{cat.number}</span>
              <div className="flex-1">
                <h3 className="t-title text-paper mb-3 group-hover:text-accent transition-colors">{cat.title}</h3>
                <p className="t-body text-muted mb-4 max-w-2xl">{cat.description}</p>
                <div className="flex gap-3">
                  {cat.tags.map((tag) => (
                    <span key={tag} className="t-label text-muted border border-muted/30 px-3 py-1 text-xs uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className="t-label text-muted group-hover:text-paper transition-colors mt-1 opacity-0 group-hover:opacity-100">
                &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
