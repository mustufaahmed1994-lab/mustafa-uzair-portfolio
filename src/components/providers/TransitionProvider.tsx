'use client';

import { ReactNode, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect';
import { gsap } from 'gsap';

export function TransitionProvider({ children }: { children: ReactNode }) {
  const curtainRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (curtainRef.current) {
        gsap.fromTo(
          curtainRef.current,
          { scaleY: 1 },
          {
            scaleY: 0,
            duration: 0.8,
            ease: 'power4.inOut',
            transformOrigin: 'top',
            delay: 0.1,
          }
        );
      }
    });
    return () => ctx.revert();
  }, [pathname]);

  return (
    <>
      <div
        ref={curtainRef}
        className="fixed inset-0 z-[200] bg-ink pointer-events-none origin-top"
        style={{ transform: 'scaleY(0)' }}
      />
      {children}
    </>
  );
}
