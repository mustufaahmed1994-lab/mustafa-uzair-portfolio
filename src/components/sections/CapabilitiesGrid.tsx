'use client';

import { useRef, useEffect } from 'react';

const capabilities = [
  {
    icon: '◈',
    title: 'Design Systems',
    description: 'Scalable component libraries, token-based theming, and cross-platform consistency at 300K+ user scale.',
    skills: ['Figma', 'Component APIs', 'Design Tokens', 'Storybook'],
    color: '#8B5CF6',
  },
  {
    icon: '◎',
    title: 'Product Strategy',
    description: 'User research, journey mapping, and 0-to-1 product definition that aligns business goals with human needs.',
    skills: ['Research', 'Roadmapping', 'OKRs', 'Jobs-to-be-Done'],
    color: '#FF6B6B',
  },
  {
    icon: '⬡',
    title: 'Brand Identity',
    description: 'Full identity systems — logo, type, color, and voice — built to scale from startup to enterprise.',
    skills: ['Logo Design', 'Typography', 'Brand Guidelines', 'Naming'],
    color: '#F59E0B',
  },
  {
    icon: '◇',
    title: 'Motion & Interaction',
    description: 'Micro-interactions, scroll animations, and kinetic typography that make interfaces feel alive.',
    skills: ['Framer', 'Lottie', 'GSAP', 'Principle'],
    color: '#06B6D4',
  },
  {
    icon: '△',
    title: 'Growth Design',
    description: 'Conversion-focused landing pages and B2B GTM assets designed around enterprise buyer psychology.',
    skills: ['Landing Pages', 'A/B Testing', 'CRO', 'Webflow'],
    color: '#EC4899',
  },
  {
    icon: '□',
    title: 'Mobile & Cross-Platform',
    description: 'iOS and Android app design with platform-native patterns, accessibility, and performance in mind.',
    skills: ['iOS HIG', 'Material 3', 'React Native', 'Expo'],
    color: '#10B981',
  },
];

const tools = [
  { name: 'Figma', category: 'Design' },
  { name: 'FigJam', category: 'Collaboration' },
  { name: 'Framer', category: 'Prototyping' },
  { name: 'Webflow', category: 'No-code' },
  { name: 'Spline', category: '3D' },
  { name: 'Lottie', category: 'Animation' },
  { name: 'Notion', category: 'Documentation' },
  { name: 'Linear', category: 'Project Mgmt' },
  { name: 'Maze', category: 'Research' },
  { name: 'Hotjar', category: 'Analytics' },
  { name: 'Mixpanel', category: 'Product Analytics' },
  { name: 'Principle', category: 'Micro-interactions' },
];

export default function CapabilitiesGrid() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('revealed');
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll('.cap-item');
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="capabilities" className="relative py-32 px-6 md:px-12">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8B5CF6, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="mb-20 cap-item scroll-reveal">
          <span className="text-xs font-mono tracking-[0.3em] text-violet-400 uppercase mb-4 block">
            ◈ Capabilities
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="font-display text-5xl md:text-7xl font-bold text-cream leading-none">
              The full
              <br />
              <em className="text-violet-400 not-italic">stack</em> of craft.
            </h2>
            <p className="text-secondary text-lg max-w-md leading-relaxed">
              From pixel-perfect components to strategic product decisions — every layer of the design discipline, practiced daily.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {capabilities.map((cap, index) => (
            <div
              key={cap.title}
              className="cap-item scroll-reveal group relative rounded-2xl p-7 border border-white/5 overflow-hidden cursor-default transition-all duration-500 hover:border-white/10"
              style={{ transitionDelay: index * 60 + 'ms', background: 'rgba(22, 22, 30, 0.5)' }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: 'radial-gradient(circle at 30% 30%, ' + cap.color + '18, transparent 70%)' }}
              />
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'linear-gradient(90deg, transparent, ' + cap.color + ', transparent)' }}
              />
              <div className="relative">
                <div className="text-3xl mb-5 transition-all duration-300 group-hover:scale-110 inline-block"
                  style={{ color: cap.color }}>
                  {cap.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-cream mb-3 group-hover:text-white transition-colors duration-300">
                  {cap.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-5">
                  {cap.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cap.skills.map((skill) => (
                    <span key={skill}
                      className="text-xs font-mono px-2.5 py-1 rounded-md border border-white/5 text-muted group-hover:text-secondary group-hover:border-white/10 transition-all duration-300"
                      style={{ background: 'rgba(255,255,255,0.02)' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cap-item scroll-reveal">
          <div className="border border-white/5 rounded-2xl p-8" style={{ background: 'rgba(22,22,30,0.4)' }}>
            <p className="text-xs font-mono tracking-[0.3em] text-muted uppercase mb-6">◈ Tools & Platforms</p>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <div key={tool.name}
                  className="group flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/5 bg-white/2 hover:border-violet-500/30 hover:bg-violet-500/8 transition-all duration-300 cursor-default">
                  <span className="text-sm font-medium text-secondary group-hover:text-cream transition-colors duration-300">{tool.name}</span>
                  <span className="text-xs font-mono text-muted">{tool.category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 cap-item scroll-reveal">
          <div className="relative rounded-2xl p-8 md:p-12 overflow-hidden border border-violet-500/10"
            style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.08) 0%, rgba(236,72,153,0.05) 100%)' }}>
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none"
              style={{ background: '#8B5CF6', transform: 'translate(30%, -30%)' }} />
            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8">
              <div className="flex-1">
                <h3 className="font-display text-3xl md:text-4xl font-bold text-cream mb-3">4+ years of shipping.</h3>
                <p className="text-secondary text-lg leading-relaxed">
                  Not just designing — shipping. Strategy frameworks, product decisions, and design systems that moved real revenue at real scale.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6 flex-shrink-0">
                {[{ number: '50+', label: 'Projects' }, { number: '12+', label: 'Industries' }, { number: '300K+', label: 'Users' }].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-display text-3xl font-bold text-cream">{stat.number}</div>
                    <div className="text-xs font-mono text-muted mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
