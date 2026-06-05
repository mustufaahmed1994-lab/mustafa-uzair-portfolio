'use client'

import { useRef, useEffect } from 'react'

/*
  AURORA MESH — a fluid magnetic-field topology animation.
  Technique: layered sine-distorted contour lines + chromatic aurora bands
  + mouse-driven gravitational warp lens. Zero particles.
  Senior motion design principle: restraint + depth over busyness.
*/

export default function WebGLCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let t = 0

    // Mouse — smoothed via lerp for silky warp response
    const mouse = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5, active: false }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()

    const onMove = (e: MouseEvent) => {
      mouse.tx = e.clientX / window.innerWidth
      mouse.ty = e.clientY / window.innerHeight
      mouse.active = true
    }
    const onLeave = () => { mouse.active = false }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseleave', onLeave)
    window.addEventListener('resize', resize)

    // Smooth noise helper — layered sines, no random jitter
    const sn = (x: number, y: number, z: number) =>
      Math.sin(x * 1.4 + z) * Math.cos(y * 0.9 - z * 0.7) * 0.5 +
      Math.sin(x * 0.6 - z * 1.3) * Math.cos(y * 1.7 + z * 0.4) * 0.3 +
      Math.sin(x * 2.1 + y * 0.8 + z * 0.6) * 0.2

    const TAU = Math.PI * 2

    // Aurora band config — 3 overlapping chromatic layers
    const BANDS = [
      { hue: 262, sat: 65, baseAlpha: 0.09, yOff: 0.0,  freq: 1.0, amp: 0.18, speed: 0.38 },
      { hue: 280, sat: 55, baseAlpha: 0.07, yOff: 0.08, freq: 0.7, amp: 0.24, speed: 0.26 },
      { hue: 310, sat: 50, baseAlpha: 0.05, yOff: 0.15, freq: 1.3, amp: 0.14, speed: 0.52 },
    ]

    // Contour line config
    const LINE_COUNT = 28       // number of topology lines
    const LINE_SEGS  = 120      // horizontal resolution per line
    const WARP_RADIUS = 0.38    // mouse influence radius (normalised)
    const WARP_STRENGTH = 0.22  // how much cursor bends the lines

    const draw = () => {
      const W = canvas.width
      const H = canvas.height
      t += 0.0055

      // Smooth mouse lerp
      const lerpS = mouse.active ? 0.055 : 0.02
      mouse.x += (mouse.tx - mouse.x) * lerpS
      mouse.y += (mouse.ty - mouse.y) * lerpS

      // ── Background fade (motion blur effect)
      ctx.globalAlpha = 0.14
      ctx.fillStyle = '#06060f'
      ctx.fillRect(0, 0, W, H)
      ctx.globalAlpha = 1

      const mx = mouse.x   // 0–1
      const my = mouse.y   // 0–1

      // ── 1. Aurora bands — slow morphing gradient washes
      BANDS.forEach((b, bi) => {
        const breathe = 0.5 + 0.5 * Math.sin(t * 0.6 + bi * 2.1)
        // Band centroid Y drifts gently
        const cy = (b.yOff + 0.35 + 0.15 * Math.sin(t * b.speed + bi)) * H
        const rH = H * (0.32 + 0.12 * breathe)

        // Mouse proximity lifts the band's brightness
        const mdist = Math.hypot(mx - 0.5, my - (cy / H))
        const mouseLift = mouse.active ? Math.max(0, 1 - mdist / 0.6) * 0.04 : 0

        const alpha = b.baseAlpha + 0.04 * breathe + mouseLift
        const grd = ctx.createRadialGradient(W * 0.5, cy, 0, W * 0.5, cy, Math.max(W, H) * 0.72)
        grd.addColorStop(0,   `hsla(${b.hue}, ${b.sat}%, 62%, ${alpha})`)
        grd.addColorStop(0.4, `hsla(${b.hue + 15}, ${b.sat - 10}%, 50%, ${alpha * 0.5})`)
        grd.addColorStop(1,   `hsla(${b.hue}, ${b.sat}%, 40%, 0)`)
        ctx.fillStyle = grd
        ctx.fillRect(0, 0, W, H)
      })

      // ── 2. Contour / topology lines
      ctx.save()
      ctx.lineCap = 'round'

      for (let li = 0; li < LINE_COUNT; li++) {
        const progress = li / (LINE_COUNT - 1)        // 0 → 1 top to bottom
        const baseY = progress                        // normalised Y centre

        // Each line has its own temporal phase
        const linePhase = li * 0.41 + t * (0.5 + 0.3 * Math.sin(li * 0.19))

        // Hue cycles from violet → indigo → rose along line index
        const hue = 245 + progress * 70
        // Lines near the vertical midzone glow brighter
        const centreProx = 1 - Math.abs(progress - 0.52) * 2.2
        const baseAlpha = 0.04 + Math.max(0, centreProx) * 0.09

        ctx.beginPath()
        let first = true

        for (let si = 0; si <= LINE_SEGS; si++) {
          const nx = si / LINE_SEGS              // normalised x 0→1

          // ── Noise displacement
          const noiseY = sn(nx * 3.2, baseY * 2.8 + linePhase, t) * 0.09

          // ── Mouse warp: gravitational lens
          const dx = nx - mx
          const dy = baseY - my
          const dist = Math.sqrt(dx * dx + dy * dy)
          let warpX = 0
          let warpY = 0
          if (dist < WARP_RADIUS && dist > 0.001) {
            const falloff = (1 - dist / WARP_RADIUS)
            const falloff2 = falloff * falloff           // quadratic = sharper centre
            // Push lines away from cursor (repulsion = more dramatic / readable)
            warpX = -(dx / dist) * falloff2 * WARP_STRENGTH * 0.06
            warpY = -(dy / dist) * falloff2 * WARP_STRENGTH
          }

          const px = (nx + warpX) * W
          const py = (baseY + noiseY + warpY) * H

          if (first) { ctx.moveTo(px, py); first = false }
          else ctx.lineTo(px, py)
        }

        // Alpha pulses gently with a slow sine per line
        const pulse = 0.5 + 0.5 * Math.sin(t * 1.4 + li * 0.37)
        const alpha = baseAlpha * (0.6 + 0.4 * pulse)

        ctx.strokeStyle = `hsla(${hue}, 70%, 72%, ${alpha})`
        ctx.lineWidth = 0.8
        ctx.stroke()
      }

      // ── 3. Cursor lens highlight ring — minimal, elegant
      if (mouse.active) {
        const cx = mx * W
        const cy = my * H
        const fadeIn = Math.min(1, t * 10)   // fade in on first frame
        const ringR = W * 0.12
        const ringGrd = ctx.createRadialGradient(cx, cy, ringR * 0.6, cx, cy, ringR)
        ringGrd.addColorStop(0, `hsla(270, 60%, 70%, ${0.0})`)
        ringGrd.addColorStop(0.7, `hsla(270, 60%, 70%, ${0.03 * fadeIn})`)
        ringGrd.addColorStop(1, `hsla(270, 60%, 70%, 0)`)
        ctx.fillStyle = ringGrd
        ctx.fillRect(0, 0, W, H)
      }

      ctx.restore()

      // ── 4. Vignette — keeps edges dark, draws eye to centre
      const vig = ctx.createRadialGradient(W * 0.5, H * 0.46, H * 0.1, W * 0.5, H * 0.46, W * 0.72)
      vig.addColorStop(0, 'transparent')
      vig.addColorStop(1, 'rgba(4,4,14,0.72)')
      ctx.fillStyle = vig
      ctx.fillRect(0, 0, W, H)

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
