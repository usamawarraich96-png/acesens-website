import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  orange: boolean
}

interface ParticleFieldProps {
  /** Particles per 10,000 px² of canvas (density). */
  density?: number
  className?: string
}

const BLUE = '79,125,247'
const ORANGE = '249,115,22'
const LINK_DIST = 130

/**
 * Ambient "live" background: slow-drifting constellation particles connected
 * by faint lines — mostly electric blue with occasional orange nodes.
 * Canvas-based and cheap: capped particle count and device-pixel ratio,
 * paused while off-screen or when the tab is hidden, and reduced to a single
 * static frame under prefers-reduced-motion.
 */
export default function ParticleField({ density = 0.55, className = '' }: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
    let particles: Particle[] = []
    let raf = 0
    let running = false
    let w = 0
    let h = 0

    function setup() {
      const rect = canvas!.getBoundingClientRect()
      w = rect.width
      h = rect.height
      canvas!.width = Math.round(w * dpr)
      canvas!.height = Math.round(h * dpr)
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)

      const target = Math.min(90, Math.round(((w * h) / 10000) * density))
      particles = Array.from({ length: target }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: 1 + Math.random() * 1.6,
        orange: Math.random() < 0.09,
      }))
    }

    function frame(step: boolean) {
      ctx!.clearRect(0, 0, w, h)

      // links
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d2 = dx * dx + dy * dy
          if (d2 < LINK_DIST * LINK_DIST) {
            const alpha = 0.10 * (1 - Math.sqrt(d2) / LINK_DIST)
            ctx!.strokeStyle = `rgba(${BLUE},${alpha.toFixed(3)})`
            ctx!.lineWidth = 1
            ctx!.beginPath()
            ctx!.moveTo(a.x, a.y)
            ctx!.lineTo(b.x, b.y)
            ctx!.stroke()
          }
        }
      }

      // nodes
      for (const p of particles) {
        const rgb = p.orange ? ORANGE : BLUE
        ctx!.fillStyle = `rgba(${rgb},${p.orange ? 0.75 : 0.55})`
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx!.fill()

        if (step) {
          p.x += p.vx
          p.y += p.vy
          if (p.x < -8) p.x = w + 8
          if (p.x > w + 8) p.x = -8
          if (p.y < -8) p.y = h + 8
          if (p.y > h + 8) p.y = -8
        }
      }
    }

    function loop() {
      frame(true)
      raf = requestAnimationFrame(loop)
    }

    function start() {
      if (running || reduced) return
      running = true
      raf = requestAnimationFrame(loop)
    }
    function stop() {
      running = false
      cancelAnimationFrame(raf)
    }

    setup()
    frame(false) // always render one static frame

    // Animate only while visible and the tab is active
    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0.05 },
    )
    io.observe(canvas)

    const onVis = () => (document.hidden ? stop() : start())
    document.addEventListener('visibilitychange', onVis)

    const onResize = () => {
      setup()
      frame(false)
    }
    window.addEventListener('resize', onResize)

    return () => {
      stop()
      io.disconnect()
      document.removeEventListener('visibilitychange', onVis)
      window.removeEventListener('resize', onResize)
    }
  }, [density])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  )
}
