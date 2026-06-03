'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useCursor } from '@/components/providers/CursorProvider';

export function ContactFooter() {
  const sectionRef = useRef<HTMLElement>(null);
  const emailRef = useRef<HTMLAnchorElement>(null);
  const { setIsHovering, setCursorText } = useCursor();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
      tl.fromTo('.contact-line', { width: 0 }, { width: '100%', duration: 1, ease: 'power4.inOut' })
        .fromTo('.contact-cta', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.4')
        .fromTo('.contact-meta', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' }, '-=0.3');
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleEmailHover = (entering: boolean) => {
    setIsHovering(entering);
    setCursorText(entering ? 'Email' : '');
  };

  return (
    <footer ref={sectionRef} className="py-32 px-8 border-t border-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="contact-line h-px bg-muted/30 mb-20 w-0" />
        
        <div className="contact-cta opacity-0 mb-20">
          <p className="t-label text-muted uppercase tracking-[0.3em] mb-8">Start a Conversation</p>
          <a
            ref={emailRef}
            href="mailto:mustufa.ahmed1994@gmail.com"
            className="t-hero text-paper hover:text-accent transition-colors duration-300 block"
            onMouseEnter={() => handleEmailHover(true)}
            onMouseLeave={() => handleEmailHover(false)}
          >
            mustufa.ahmed1994
            <br />
            @gmail.com
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-muted/10 pt-12">
          <div className="contact-meta opacity-0">
            <p className="t-label text-muted uppercase tracking-widest mb-2">Location</p>
            <p className="t-body text-paper">Karachi, Pakistan</p>
          </div>
          <div className="contact-meta opacity-0">
            <p className="t-label text-muted uppercase tracking-widest mb-2">Phone</p>
            <a href="tel:+923108999025" className="t-body text-paper hover:text-accent transition-colors">
              +92 310 899 9025
            </a>
          </div>
          <div className="contact-meta opacity-0">
            <p className="t-label text-muted uppercase tracking-widest mb-2">LinkedIn</p>
            <a
              href="https://linkedin.com/in/mustafa-uzair-8712231a1/"
              target="_blank"
              rel="noopener noreferrer"
              className="t-body text-paper hover:text-accent transition-colors"
            >
              mustafa-uzair
            </a>
          </div>
          <div className="contact-meta opacity-0">
            <p className="t-label text-muted uppercase tracking-widest mb-2">Current</p>
            <p className="t-body text-paper">Marketing Director @ FORJWELL</p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-muted/10 flex items-center justify-between">
          <p className="t-label text-muted">
            &copy; {new Date().getFullYear()} Mustafa Uzair. All rights reserved.
          </p>
          <p className="t-label text-muted uppercase tracking-widest">
            Design &times; Strategy &times; Growth
          </p>
        </div>
      </div>
    </footer>
  );
}
