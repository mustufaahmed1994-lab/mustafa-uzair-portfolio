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
        let t = 0
        const mouse = { x: -9999, y: -9999, active: false }

                const resize = () => {
                        canvas.width = window.innerWidth
                        canvas.height = window.innerHeight
                }
        resize()

                // ---- Morphing geometry nodes ----
                const NODE_COUNT = 80
        interface Node {
                x: number; y: number; ox: number; oy: number
                vx: number; vy: number; r: number
                hue: number; phase: number; speed: number
        }
        const nodes: Node[] = Array.from({ length: NODE_COUNT }, () => {
                const ox = Math.random() * window.innerWidth
                const oy = Math.random() * window.innerHeight
                return {
                          x: ox, y: oy, ox, oy,
                          vx: 0, vy: 0,
                          r: Math.random() * 2.5 + 0.5,
                          hue: 260 + Math.random() * 80,
                          phase: Math.random() * Math.PI * 2,
                          speed: 0.3 + Math.random() * 0.7,
                }
        })

                // ---- Fluid wave lines ----
                const WAVE_COUNT = 6
        interface Wave {
                amp: number; freq: number; speed: number; offset: number
                hue: number; alpha: number; width: number
        }
        const waves: Wave[] = Array.from({ length: WAVE_COUNT }, (_, i) => ({
                amp: 40 + i * 20,
                freq: 0.003 + i * 0.0008,
                speed: 0.4 + i * 0.15,
                offset: (i / WAVE_COUNT) * Math.PI * 2,
                hue: 260 + i * 20,
                alpha: 0.04 - i * 0.004,
                width: 1.5 - i * 0.15,
        }))

                // ---- Shooting particles ----
                interface Spark { x: number; y: number; vx: number; vy: number; life: number; maxLife: number; hue: number }
        const sparks: Spark[] = []
              const spawnSpark = (mx: number, my: number) => {
                      for (let k = 0; k < 3; k++) {
                                const angle = Math.random() * Math.PI * 2
                                const speed = 1.5 + Math.random() * 3
                                sparks.push({ x: mx, y: my, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, life: 1, maxLife: 40 + Math.random() * 40, hue: 260 + Math.random() * 100 })
                      }
              }

                // ---- Geometric rings ----
                interface Ring { x: number; y: number; r: number; maxR: number; alpha: number; hue: number }
        const rings: Ring[] = []
              let lastRingTime = 0

                const onMM = (e: MouseEvent) => {
                        mouse.x = e.clientX; mouse.y = e.clientY; mouse.active = true
                        if (Math.random() < 0.03) spawnSpark(mouse.x, mouse.y)
                }
        const onML = () => { mouse.active = false }
        window.addEventListener('mousemove', onMM)
        window.addEventListener('mouseleave', onML)
        window.addEventListener('resize', resize)

                const draw = () => {
                        ctx.clearRect(0, 0, canvas.width, canvas.height)
                        t += 0.012

                        // ---- Animated background gradient ----
                        const bx = canvas.width * (0.5 + 0.3 * Math.sin(t * 0.3))
                        const by = canvas.height * (0.3 + 0.2 * Math.cos(t * 0.2))
                        const bg = ctx.createRadialGradient(bx, by, 0, bx, by, canvas.width * 0.7)
                        bg.addColorStop(0, `hsla(270,60%,12%,0.6)`)
                        bg.addColorStop(0.5, `hsla(280,40%,8%,0.4)`)
                        bg.addColorStop(1, 'transparent')
                        ctx.fillStyle = bg
                        ctx.fillRect(0, 0, canvas.width, canvas.height)

                        // ---- Fluid waves ----
                        waves.forEach((w) => {
                                  ctx.beginPath()
                                  for (let x = 0; x <= canvas.width; x += 4) {
                                              const y = canvas.height * 0.5
                                                + w.amp * Math.sin(x * w.freq + t * w.speed + w.offset)
                                                + (w.amp * 0.5) * Math.sin(x * w.freq * 2.1 - t * w.speed * 0.7)
                                              x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
                                  }
                                  ctx.strokeStyle = `hsla(${w.hue},70%,65%,${w.alpha})`
                                  ctx.lineWidth = w.width
                                  ctx.stroke()
                        })

                        // ---- Update & draw nodes ----
                        nodes.forEach((n) => {
                                  // Organic drift
                                              n.ox += Math.sin(t * n.speed + n.phase) * 0.3
                                  n.oy += Math.cos(t * n.speed * 0.7 + n.phase) * 0.3
                                  // Mouse gravity/repulsion
                                              if (mouse.active) {
                                                          const dx = mouse.x - n.x
                                                          const dy = mouse.y - n.y
                                                          const dist = Math.sqrt(dx * dx + dy * dy)
                                                          if (dist < 180) {
                                                                        const force = (180 - dist) / 180
                                                                        n.vx -= (dx / dist) * force * 0.4
                                                                        n.vy -= (dy / dist) * force * 0.4
                                                          }
                                              }
                                  n.vx += (n.ox - n.x) * 0.01
                                  n.vy += (n.oy - n.y) * 0.01
                                  n.vx *= 0.94
                                  n.vy *= 0.94
                                  n.x += n.vx
                                  n.y += n.vy
                                  // Wrap
                                              if (n.x < 0) n.x = canvas.width
                                  if (n.x > canvas.width) n.x = 0
                                  if (n.y < 0) n.y = canvas.height
                                  if (n.y > canvas.height) n.y = 0

                                              const pulse = 0.6 + 0.4 * Math.sin(t * 2 + n.phase)
                                  const alpha = 0.4 + 0.3 * pulse
                                  // Glow
                                              const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 8)
                                  grd.addColorStop(0, `hsla(${n.hue},80%,70%,${alpha})`)
                                  grd.addColorStop(1, 'transparent')
                                  ctx.beginPath()
                                  ctx.arc(n.x, n.y, n.r * 8, 0, Math.PI * 2)
                                  ctx.fillStyle = grd
                                  ctx.fill()
                                  // Core dot
                                              ctx.beginPath()
                                  ctx.arc(n.x, n.y, n.r * pulse, 0, Math.PI * 2)
                                  ctx.fillStyle = `hsla(${n.hue},90%,80%,${alpha + 0.3})`
                                  ctx.fill()
                        })

                        // ---- Draw connections ----
                        for (let i = 0; i < nodes.length; i++) {
                                  for (let j = i + 1; j < nodes.length; j++) {
                                              const dx = nodes[i].x - nodes[j].x
                                              const dy = nodes[i].y - nodes[j].y
                                              const d = Math.sqrt(dx * dx + dy * dy)
                                              if (d < 140) {
                                                            const alpha = (1 - d / 140) * 0.15
                                                            const hue = (nodes[i].hue + nodes[j].hue) / 2
                                                            ctx.beginPath()
                                                            ctx.moveTo(nodes[i].x, nodes[i].y)
                                                            ctx.lineTo(nodes[j].x, nodes[j].y)
                                                            ctx.strokeStyle = `hsla(${hue},70%,65%,${alpha})`
                                                            ctx.lineWidth = (1 - d / 140) * 1.2
                                                            ctx.stroke()
                                              }
                                  }
                        }

                        // ---- Mouse trail rings ----
                        const now = Date.now()
                        if (mouse.active && now - lastRingTime > 600) {
                                  rings.push({ x: mouse.x, y: mouse.y, r: 0, maxR: 80 + Math.random() * 60, alpha: 0.5, hue: 260 + Math.random() * 80 })
                                  lastRingTime = now
                        }
                        for (let i = rings.length - 1; i >= 0; i--) {
                                  const ring = rings[i]
                                  ring.r += 2.5
                                  ring.alpha *= 0.96
                                  ctx.beginPath()
                                  ctx.arc(ring.x, ring.y, ring.r, 0, Math.PI * 2)
                                  ctx.strokeStyle = `hsla(${ring.hue},70%,70%,${ring.alpha})`
                                  ctx.lineWidth = 1.5
                                  ctx.stroke()
                                  if (ring.alpha < 0.01 || ring.r > ring.maxR) rings.splice(i, 1)
                        }

                        // ---- Sparks ----
                        for (let i = sparks.length - 1; i >= 0; i--) {
                                  const s = sparks[i]
                                  s.x += s.vx; s.y += s.vy
                                  s.vx *= 0.97; s.vy *= 0.97
                                  s.life++
                                  const prog = s.life / s.maxLife
                                  const alpha = (1 - prog) * 0.7
                                  ctx.beginPath()
                                  ctx.arc(s.x, s.y, (1 - prog) * 2.5, 0, Math.PI * 2)
                                  ctx.fillStyle = `hsla(${s.hue},90%,75%,${alpha})`
                                  ctx.fill()
                                  if (s.life >= s.maxLife) sparks.splice(i, 1)
                        }

                        // ---- Floating geometric accents ----
                        for (let i = 0; i < 5; i++) {
                                  const fx = canvas.width * 0.1 + (canvas.width * 0.8 * i / 4)
                                  const fy = canvas.height * 0.5 + Math.sin(t * 0.5 + i * 1.2) * canvas.height * 0.15
                                  const size = 20 + i * 8
                                  const rot = t * 0.3 + i * 0.8
                                  ctx.save()
                                  ctx.translate(fx, fy)
                                  ctx.rotate(rot)
                                  ctx.strokeStyle = `hsla(${270 + i * 20},60%,65%,0.06)`
                                  ctx.lineWidth = 1
                                  ctx.strokeRect(-size / 2, -size / 2, size, size)
                                  ctx.restore()
                        }

                        animId = requestAnimationFrame(draw)
                }
        draw()

                return () => {
                        cancelAnimationFrame(animId)
                        window.removeEventListener('mousemove', onMM)
                        window.removeEventListener('mouseleave', onML)
                        window.removeEventListener('resize', resize)
                }
  }, [])

  return (
        <canvas
                ref={canvasRef}
                style={{
                          position: 'fixed',
                          inset: 0,
                          width: '100%',
                          height: '100%',
                          pointerEvents: 'none',
                          zIndex: 0,
                }}
              />
      )
}
