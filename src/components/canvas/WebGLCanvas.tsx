'use client';
import { useRef, useEffect } from 'react';
const COLORS = ['#8B5CF6', '#EC4899', '#F59E0B', '#06B6D4', '#FF6B6B'];
export default function WebGLCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animId;
    let t = 0;
    const mouse = { x: 0, y: 0 };
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    const particles = Array.from({ length: 180 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 0.5,
      op: Math.random() * 0.5 + 0.15,
      c: COLORS[Math.floor(Math.random() * COLORS.length)],
      ph: Math.random() * Math.PI * 2,
    }));
    const onMM = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    window.addEventListener('mousemove', onMM);
    window.addEventListener('resize', resize);
    const draw = () => {
      t += 0.005;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const g = ctx.createRadialGradient(canvas.width/2, canvas.height*0.35, 0, canvas.width/2, canvas.height*0.35, canvas.width*0.5);
      g.addColorStop(0, 'rgba(139,92,246,0.07)');
      g.addColorStop(0.6, 'rgba(236,72,153,0.03)');
      g.addColorStop(1, 'transparent');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.x += p.vx + Math.sin(t + p.ph) * 0.18;
        p.y += p.vy + Math.cos(t * 0.7 + p.ph) * 0.12;
        const dx = p.x - mouse.x; const dy = p.y - mouse.y;
        const d = Math.sqrt(dx*dx+dy*dy);
        if (d < 80) { p.x += dx/d*1.2; p.y += dy/d*1.2; }
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
        particles.slice(i+1, i+5).forEach(p2 => {
          const dd = Math.sqrt((p.x-p2.x)**2+(p.y-p2.y)**2);
          if (dd < 110) { ctx.beginPath(); ctx.strokeStyle = p.c+'22'; ctx.lineWidth=0.5; ctx.moveTo(p.x,p.y); ctx.lineTo(p2.x,p2.y); ctx.stroke(); }
        });
        const sz = p.r + Math.sin(t*2+p.ph)*0.4;
        ctx.beginPath(); ctx.arc(p.x,p.y,sz,0,Math.PI*2);
        ctx.fillStyle = p.c + Math.floor(p.op*255).toString(16).padStart(2,'0');
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('mousemove', onMM); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.7 }} />;
}
