'use client'

import { useRef, useEffect } from 'react'

export default function WebGLCanvas() {
      const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
          const canvas = canvasRef.current
          if (!canvas) return
          const ctx = canvas.getContext('2d')
          if (!ctx) return

                let animId: number
          let time = 0
          const mouse = { x: -9999, y: -9999, px: -9999, py: -9999, active: false, vx: 0, vy: 0 }

                const resize = () => {
                          canvas.width = window.innerWidth
                          canvas.height = window.innerHeight
                }
          resize()

                const BLOB_COUNT = 7
          interface Blob { x: number; y: number; vx: number; vy: number; radius: number; hue: number; phase: number; speed: number }
          const blobs: Blob[] = Array.from({ length: BLOB_COUNT }, (_, i) => ({
                    x: window.innerWidth * (0.1 + 0.8 * Math.random()),
                    y: window.innerHeight * (0.1 + 0.8 * Math.random()),
                    vx: (Math.random() - 0.5) * 0.4,
                    vy: (Math.random() - 0.5) * 0.4,
                    radius: window.innerWidth * (0.12 + 0.1 * Math.random()),
                    hue: 250 + i * 18,
                    phase: Math.random() * Math.PI * 2,
                    speed: 0.2 + Math.random() * 0.3,
          }))

                const PARTICLE_COUNT = 120
          interface Particle { x: number; y: number; ox: number; oy: number; vx: number; vy: number; size: number; hue: number; phase: number; alpha: number; speed: number }
          const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => {
                    const ox = Math.random() * window.innerWidth
                    const oy = Math.random() * window.innerHeight
                    return { x: ox, y: oy, ox, oy, vx: 0, vy: 0, size: 1 + Math.random() * 2, hue: 260 + Math.random() * 70, phase: Math.random() * Math.PI * 2, alpha: 0.3 + Math.random() * 0.5, speed: 0.15 + Math.random() * 0.35 }
          })

                interface Ripple { x: number; y: number; r: number; maxR: number; alpha: number; hue: number }
          const ripples: Ripple[] = []
                  let lastRipple = 0

                interface Comet { x: number; y: number; vx: number; vy: number; life: number; maxLife: number; hue: number; size: number }
          const comets: Comet[] = []
                  let lastComet = 0

                const spawnComet = () => {
                          const edge = Math.floor(Math.random() * 4)
                          let x = 0, y = 0, vx = 0, vy = 0
                          const spd = 1.5 + Math.random() * 2.5
                          if (edge === 0) { x = Math.random() * canvas.width; y = -10; vx = (Math.random()-0.5)*0.8; vy = spd }
                          else if (edge === 1) { x = canvas.width + 10; y = Math.random() * canvas.height; vx = -spd; vy = (Math.random()-0.5)*0.8 }
                          else if (edge === 2) { x = Math.random() * canvas.width; y = canvas.height + 10; vx = (Math.random()-0.5)*0.8; vy = -spd }
                          else { x = -10; y = Math.random() * canvas.height; vx = spd; vy = (Math.random()-0.5)*0.8 }
                          comets.push({ x, y, vx, vy, life: 0, maxLife: 200 + Math.random() * 200, hue: 260 + Math.random() * 80, size: 1 + Math.random() * 1.5 })
                }

                const onMove = (e: MouseEvent) => {
                          mouse.vx = e.clientX - mouse.x; mouse.vy = e.clientY - mouse.y
                          mouse.px = mouse.x; mouse.py = mouse.y
                          mouse.x = e.clientX; mouse.y = e.clientY; mouse.active = true
                          const now = Date.now()
                          if (now - lastRipple > 400) {
                                      ripples.push({ x: mouse.x, y: mouse.y, r: 0, maxR: 90 + Math.random() * 60, alpha: 0.6, hue: 260 + Math.random() * 80 })
                                      lastRipple = now
                          }
                }
          const onLeave = () => { mouse.active = false; mouse.vx = 0; mouse.vy = 0 }
          window.addEventListener('mousemove', onMove)
          window.addEventListener('mouseleave', onLeave)
          window.addEventListener('resize', resize)

                const TAU = Math.PI * 2

                const draw = () => {
                          const W = canvas.width, H = canvas.height
                          time += 0.008
                          ctx.globalAlpha = 0.18
                          ctx.fillStyle = '#070710'
                          ctx.fillRect(0, 0, W, H)
                          ctx.globalAlpha = 1

                          const breathe = 0.5 + 0.5 * Math.sin(time * 0.7)
                          const gcx = W * 0.5, gcy = H * 0.45
                          const ambient = ctx.createRadialGradient(gcx, gcy, 0, gcx, gcy, W * 0.55)
                          ambient.addColorStop(0, `hsla(270,50%,10%,${0.06 + 0.04 * breathe})`)
                          ambient.addColorStop(1, 'transparent')
                          ctx.fillStyle = ambient
                          ctx.fillRect(0, 0, W, H)

                          blobs.forEach((b) => {
                                      b.x += b.vx + Math.sin(time * b.speed + b.phase) * 0.35
                                      b.y += b.vy + Math.cos(time * b.speed * 0.8 + b.phase) * 0.35
                                      if (b.x < -b.radius * 0.5) b.vx += 0.015
                                      if (b.x > W + b.radius * 0.5) b.vx -= 0.015
                                      if (b.y < -b.radius * 0.5) b.vy += 0.015
                                      if (b.y > H + b.radius * 0.5) b.vy -= 0.015
                                      b.vx *= 0.995; b.vy *= 0.995
                                      if (mouse.active) {
                                                    const dx = mouse.x - b.x, dy = mouse.y - b.y
                                                    const dist = Math.sqrt(dx*dx + dy*dy)
                                                    if (dist < 320 && dist > 1) { const f = (320 - dist) / 320 * 0.006; b.vx += dx / dist * f; b.vy += dy / dist * f }
                                      }
                                      const pulse = 1 + 0.06 * Math.sin(time * 2.5 + b.phase)
                                      const r = b.radius * pulse
                                      const alpha = 0.028 + 0.012 * breathe
                                      const bg = ctx.createRadialGradient(b.x - r*0.3, b.y - r*0.3, 0, b.x, b.y, r)
                                      bg.addColorStop(0, `hsla(${b.hue},70%,65%,${alpha * 1.6})`)
                                      bg.addColorStop(0.5, `hsla(${b.hue},60%,50%,${alpha})`)
                                      bg.addColorStop(1, `hsla(${b.hue},50%,40%,0)`)
                                      ctx.beginPath(); ctx.arc(b.x, b.y, r, 0, TAU); ctx.fillStyle = bg; ctx.fill()
                          })

                          particles.forEach((p) => {
                                      p.ox += Math.sin(time * p.speed + p.phase) * 0.2
                                      p.oy += Math.cos(time * p.speed * 0.9 + p.phase) * 0.2
                                      if (mouse.active) {
                                                    const dx = mouse.x - p.x, dy = mouse.y - p.y
                                                    const d = Math.sqrt(dx*dx + dy*dy)
                                                    if (d < 150 && d > 1) { const f = (150 - d) / 150 * 0.5; p.vx -= dx / d * f; p.vy -= dy / d * f }
                                      }
                                      p.vx += (p.ox - p.x) * 0.012; p.vy += (p.oy - p.y) * 0.012
                                      p.vx *= 0.92; p.vy *= 0.92; p.x += p.vx; p.y += p.vy
                                      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0
                                      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0
                                      const pulse = 0.5 + 0.5 * Math.sin(time * 3 + p.phase)
                                      const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 7)
                                      glow.addColorStop(0, `hsla(${p.hue},80%,75%,${p.alpha * pulse})`); glow.addColorStop(1, 'transparent')
                                      ctx.beginPath(); ctx.arc(p.x, p.y, p.size * 7, 0, TAU); ctx.fillStyle = glow; ctx.fill()
                                      ctx.beginPath(); ctx.arc(p.x, p.y, p.size * (0.4 + 0.6 * pulse), 0, TAU)
                                      ctx.fillStyle = `hsla(${p.hue},85%,82%,${Math.min(p.alpha * pulse * 1.4, 0.9)})`; ctx.fill()
                          })

                          ctx.save()
                          for (let i = 0; i < particles.length; i++) {
                                      for (let j = i + 1; j < particles.length; j++) {
                                                    const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y
                                                    const d = Math.sqrt(dx*dx + dy*dy)
                                                    if (d < 110) {
                                                                    const a = (1 - d/110) * 0.06
                                                                    ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y)
                                                                    ctx.strokeStyle = `hsla(${(particles[i].hue+particles[j].hue)/2},70%,70%,${a})`
                                                                    ctx.lineWidth = (1 - d/110) * 0.8; ctx.stroke()
                                                    }
                                      }
                          }
                          ctx.restore()

                          for (let i = ripples.length - 1; i >= 0; i--) {
                                      const rp = ripples[i]; rp.r += 3; rp.alpha *= 0.965
                                      ctx.beginPath(); ctx.arc(rp.x, rp.y, rp.r, 0, TAU)
                                      ctx.strokeStyle = `hsla(${rp.hue},70%,72%,${rp.alpha})`; ctx.lineWidth = 1.2; ctx.stroke()
                                      if (rp.alpha < 0.008 || rp.r > rp.maxR) ripples.splice(i, 1)
                          }

                          const nowMs = Date.now()
                          if (nowMs - lastComet > 2800 + Math.random() * 2000) { spawnComet(); lastComet = nowMs }
                          for (let i = comets.length - 1; i >= 0; i--) {
                                      const c = comets[i]; c.x += c.vx; c.y += c.vy; c.life++
                                      const prog = c.life / c.maxLife
                                      const alpha = Math.sin(prog * Math.PI) * 0.55
                                      const tailLen = 28 + c.size * 8
                                      const grd = ctx.createLinearGradient(c.x, c.y, c.x - c.vx * tailLen, c.y - c.vy * tailLen)
                                      grd.addColorStop(0, `hsla(${c.hue},80%,78%,${alpha})`); grd.addColorStop(1, `hsla(${c.hue},70%,65%,0)`)
                                      ctx.beginPath(); ctx.moveTo(c.x, c.y); ctx.lineTo(c.x - c.vx * tailLen, c.y - c.vy * tailLen)
                                      ctx.strokeStyle = grd; ctx.lineWidth = c.size * (1 - prog * 0.6); ctx.lineCap = 'round'; ctx.stroke()
                                      ctx.beginPath(); ctx.arc(c.x, c.y, c.size * 1.5 * (1 - prog * 0.5), 0, TAU)
                                      ctx.fillStyle = `hsla(${c.hue},90%,88%,${alpha * 1.3})`; ctx.fill()
                                      if (c.life >= c.maxLife) comets.splice(i, 1)
                          }

                          animId = requestAnimationFrame(draw)
                }
          draw()

                return () => {
                          cancelAnimationFrame(animId)
                          window.removeEventListener('mousemove', onMove)
                          window.removeEventListener('mouseleave', onLeave)
                          window.removeEventListener('resize', resize)
                }
  }, [])

  return (
          <canvas
                    ref={canvasRef}
                    style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}
                  />
        )
}
