'use client';

import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mustafa-uzair/', icon: '◎' },
  { label: 'Dribbble', href: 'https://dribbble.com/mustafauzair', icon: '◈' },
  { label: 'Behance', href: 'https://www.behance.net/mustafauzair', icon: '⬡' },
  { label: 'Email', href: 'mailto:mustafa.uzair@example.com', icon: '△' },
];

export default function ContactFooter() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('revealed');
        });
      },
      { threshold: 0.1 }
    );
    const items = sectionRef.current?.querySelectorAll('.contact-item');
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={sectionRef} id="contact" className="relative pt-32 pb-16 px-6 md:px-12 overflow-hidden">
      {/* Large gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-3xl opacity-8"
          style={{ background: 'radial-gradient(ellipse, #8B5CF6, transparent 70%)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Giant CTA headline */}
        <div className="mb-24 contact-item scroll-reveal">
          <span className="text-xs font-mono tracking-[0.3em] text-violet-400 uppercase mb-6 block">
            ◈ Let's Work Together
          </span>

          <h2 className="font-display font-bold text-cream leading-none mb-8"
            style={{ fontSize: 'clamp(3rem, 10vw, 9rem)' }}>
            Have a project
            <br />
            <em className="text-transparent not-italic"
              style={{ WebkitTextStroke: '1px rgba(139,92,246,0.6)' }}>
              in mind?
            </em>
          </h2>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <a
              href="mailto:mustafauzair@example.com"
              className="group inline-flex items-center gap-4 px-8 py-5 rounded-full text-base font-mono tracking-wide transition-all duration-500"
              style={{
                background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
                boxShadow: '0 0 40px rgba(139,92,246,0.3)',
              }}
            >
              <span className="text-white font-semibold">Start a conversation</span>
              <span className="text-white/80 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>

            <a
              href="https://cal.com/mustafauzair"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-5 rounded-full border border-white/10 text-secondary hover:border-violet-500/40 hover:text-cream transition-all duration-300 font-mono text-base"
            >
              Book a call
              <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
            </a>
          </div>
        </div>

        {/* Info grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 contact-item scroll-reveal">
          {/* Availability */}
          <div className="border border-white/5 rounded-2xl p-6" style={{ background: 'rgba(22,22,30,0.4)' }}>
            <p className="text-xs font-mono tracking-widest text-muted uppercase mb-3">Status</p>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-cream font-medium">Available for projects</span>
            </div>
            <p className="text-muted text-sm">Accepting select clients Q3 2025</p>
          </div>

          {/* Location + Time */}
          <div className="border border-white/5 rounded-2xl p-6" style={{ background: 'rgba(22,22,30,0.4)' }}>
            <p className="text-xs font-mono tracking-widest text-muted uppercase mb-3">Location</p>
            <p className="text-cream font-medium mb-1">Karachi, Pakistan</p>
            <p className="text-muted text-sm font-mono">
              Local time: <span className="text-violet-400">{time}</span>
            </p>
          </div>

          {/* Response time */}
          <div className="border border-white/5 rounded-2xl p-6" style={{ background: 'rgba(22,22,30,0.4)' }}>
            <p className="text-xs font-mono tracking-widest text-muted uppercase mb-3">Response</p>
            <p className="text-cream font-medium mb-1">Within 24 hours</p>
            <p className="text-muted text-sm">Always responsive, always prepared</p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 contact-item scroll-reveal">
          {/* Logo + tagline */}
          <div>
            <div className="font-display text-2xl font-bold text-cream mb-1">
              Mustafa <em className="text-violet-400 not-italic">Uzair</em>
            </div>
            <p className="text-muted text-sm font-mono">
              Product Designer & Brand Strategist
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-2 text-muted hover:text-cream transition-colors duration-300"
                onMouseEnter={() => setHovered(link.label)}
                onMouseLeave={() => setHovered(null)}
              >
                <span
                  className="text-lg transition-all duration-300"
                  style={{ color: hovered === link.label ? '#8B5CF6' : 'inherit' }}
                >
                  {link.icon}
                </span>
                <span className="text-sm font-mono hidden sm:block">{link.label}</span>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-muted text-xs font-mono">
            © 2025 Mustafa Uzair. Crafted with intent.
          </p>
        </div>
      </div>
    </footer>
  );
}
