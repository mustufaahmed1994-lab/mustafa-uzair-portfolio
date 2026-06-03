'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useCursor } from '@/components/providers/CursorProvider';

export function MagneticCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const { isHovering, cursorText } = useCursor();

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.to(cursor, { x: mouseX, y: mouseY, duration: 0.1, ease: 'power2.out' });
    };

    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;
      gsap.set(follower, { x: followerX, y: followerY });
      requestAnimationFrame(animateFollower);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    const raf = requestAnimationFrame(animateFollower);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[999] mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <div
          className="w-2 h-2 rounded-full bg-paper transition-transform duration-200"
          style={{ transform: isHovering ? 'scale(0)' : 'scale(1)' }}
        />
      </div>
      <div
        ref={followerRef}
        className="fixed top-0 left-0 pointer-events-none z-[998] mix-blend-difference transition-all duration-300 ease-out"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <div
          className="rounded-full border border-paper flex items-center justify-center transition-all duration-300"
          style={{
            width: isHovering ? '64px' : '32px',
            height: isHovering ? '64px' : '32px',
            opacity: isHovering ? 1 : 0.6,
          }}
        >
          {cursorText && (
            <span className="t-label text-paper text-[8px] uppercase tracking-widest">{cursorText}</span>
          )}
        </div>
      </div>
    </>
  );
}
