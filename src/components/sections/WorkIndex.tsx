'use client';

import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';

const works = [
  {
    id: '01',
    category: 'Enterprise Design Systems',
    title: 'Bazaar Suite',
    subtitle: 'Scaling Pakistan\'s Largest B2B Commerce Platform',
    description: 'Led end-to-end design across 5 interconnected products — Easy Khata, Bazaar Pro, Shipper, Agent & Warehouse Ops — serving 300K+ retailers across Pakistan. Built a unified design system from scratch that reduced design-to-dev handoff by 60%.',
    metrics: ['300K+ Retailers', '5 Products', '60% Faster Handoff', '2022–2024'],
    tags: ['Design Systems', 'Fintech', 'B2B Commerce', 'Research'],
    href: '/work/enterprise',
    color: '#8B5CF6',
    year: '2022–2024',
  },
  {
    id: '02',
    category: '0-to-1 Product Incubation',
    title: 'Product Studio',
    subtitle: 'Designing Consumer & Medical Apps from Concept to Launch',
    description: 'Took 4 products from blank canvas to App Store launch: MemoryMag (memory preservation), EZMedrex (medical dispensing automation), BeachLyfe (coastal lifestyle), ActiveSOS (emergency response). Each shipped within 90-day sprint cycles.',
    metrics: ['4 Apps Launched', 'iOS + Android', '90-Day Sprints', '2023–2025'],
    tags: ['Product Design', 'Mobile', 'Healthcare', 'Consumer'],
    href: '/work/products',
    color: '#FF6B6B',
    year: '2023–2025',
  },
  {
    id: '03',
    category: 'B2B SaaS & Creative Direction',
    title: 'Locus & Growth Clients',
    subtitle: 'Supply Chain Intelligence Meets Conversion Design',
    description: 'Creative direction for Locus — a $50M+ Series B supply chain SaaS operating across 30+ countries. Designed high-conversion landing pages, product storytelling, and B2B growth assets that aligned complex logistics tech with enterprise buyer psychology.',
    metrics: ['30+ Countries', '$50M+ Series B', 'Enterprise GTM', '2023–2024'],
    tags: ['SaaS', 'Growth Design', 'Creative Direction', 'B2B'],
    href: '/work/saas',
    color: '#06B6D4',
    year: '2023–2024',
  },
  {
    id: '04',
    category: 'Brand Identity & Visual Systems',
    title: 'DARTE & Brand Projects',
    subtitle: 'Identity Systems That Earn Instant Recognition',
    description: 'Crafted full brand identities for startups and SMEs: logo systems, typography hierarchies, color theory application, brand guidelines, and go-to-market creative. Every identity built to scale across digital, print, and physical touchpoints.',
    metrics: ['8+ Brands', 'Full Identity Systems', 'Print to Digital', '2021–2025'],
    tags: ['Branding', 'Identity', 'Typography', 'Visual Design'],
    href: '/work/brand',
    color: '#F59E0B',
    year: '2021–2025',
  },
];

export default function WorkIndex() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const cards = sectionRef.current?.querySelectorAll('.work-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="work" className="relative py-32 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-20 scroll-reveal work-card">
          <div>
            <span className="text-xs font-mono tracking-[0.3em] text-violet-400 uppercase mb-4 block">
              ◈ Selected Work
            </span>
            <h2 className="font-display text-5xl md:text-7xl font-bold text-cream leading-none">
              Work that
              <br />
              <em className="text-violet-400 not-italic">moves</em> markets.
            </h2>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-muted text-sm font-mono">
              2021 — 2025
              <br />
              4 disciplines
            </p>
          </div>
        </div>

        <div className="space-y-1">
          {works.map((work, index) => (
            <Link
              key={work.id}
              href={work.href}
              className="work-card scroll-reveal group block"
              style={{ transitionDelay: index * 80 + 'ms' }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div
                className="relative border border-white/5 rounded-2xl p-8 md:p-10 overflow-hidden transition-all duration-500"
                style={{
                  background: activeIndex === index
                    ? work.color + '10'
                    : 'rgba(22, 22, 30, 0.4)',
                  borderColor: activeIndex === index ? work.color + '30' : 'rgba(255,255,255,0.05)',
                  boxShadow: activeIndex === index ? '0 20px 60px ' + work.color + '15' : 'none',
                }}
              >
                <div
                  className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: work.color,
                    opacity: activeIndex === index ? 0.08 : 0,
                  }}
                />

                <div className="relative flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                  <div className="flex-shrink-0 w-full md:w-48">
                    <span
                      className="text-6xl md:text-8xl font-display font-bold leading-none transition-colors duration-300"
                      style={{ color: activeIndex === index ? work.color : 'rgba(255,255,255,0.06)' }}
                    >
                      {work.id}
                    </span>
                    <p className="text-xs font-mono tracking-widest uppercase mt-2 transition-colors duration-300"
                      style={{ color: activeIndex === index ? work.color : '#5C5875' }}>
                      {work.category}
                    </p>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-cream mb-2 group-hover:text-white transition-colors duration-300">
                      {work.title}
                    </h3>
                    <p className="text-secondary text-base mb-4 font-medium">
                      {work.subtitle}
                    </p>
                    <p className="text-muted text-sm leading-relaxed max-w-2xl">
                      {work.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-5">
                      {work.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono px-3 py-1 rounded-full border transition-all duration-300"
                          style={{
                            borderColor: activeIndex === index ? work.color + '40' : 'rgba(255,255,255,0.08)',
                            color: activeIndex === index ? work.color : '#5C5875',
                            background: activeIndex === index ? work.color + '10' : 'transparent',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="hidden lg:flex flex-col gap-3 flex-shrink-0 w-48">
                    {work.metrics.map((metric) => (
                      <div key={metric} className="text-right">
                        <span className="text-xs font-mono text-muted group-hover:text-secondary transition-colors duration-300">
                          {metric}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex-shrink-0">
                    <div
                      className="w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-500"
                      style={{
                        borderColor: activeIndex === index ? work.color + '60' : 'rgba(255,255,255,0.08)',
                        background: activeIndex === index ? work.color + '15' : 'transparent',
                        transform: activeIndex === index ? 'rotate(-45deg)' : 'rotate(0deg)',
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                        style={{ color: activeIndex === index ? work.color : '#5C5875' }}
                      >
                        <path d="M3 9h12M9 3l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 text-center scroll-reveal work-card">
          <p className="text-muted font-mono text-sm mb-6 tracking-wide">
            Every project. Every decision. Documented.
          </p>
          <Link
            href="/work/enterprise"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-violet-500/30 text-violet-400 hover:bg-violet-500/10 transition-all duration-300 font-mono text-sm tracking-wide group"
          >
            Explore all case studies
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
