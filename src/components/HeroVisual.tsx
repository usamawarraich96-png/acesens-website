import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import type { PointerEvent } from 'react'

const orbits = [
  { r: 132, dur: 26, dots: 3, size: 8 },
  { r: 96, dur: 18, dots: 2, size: 7 },
  { r: 60, dur: 12, dots: 2, size: 6 },
]

/**
 * Interactive hero graphic: concentric orbits that gently tilt toward the
 * cursor (a parallax micro-interaction) while dots trace each ring.
 */
export default function HeroVisual() {
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [12, -12]), {
    stiffness: 150,
    damping: 18,
  })
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-12, 12]), {
    stiffness: 150,
    damping: 18,
  })

  function handleMove(e: PointerEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    px.set((e.clientX - rect.left) / rect.width - 0.5)
    py.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function reset() {
    px.set(0)
    py.set(0)
  }

  return (
    <div
      onPointerMove={handleMove}
      onPointerLeave={reset}
      className="relative mx-auto grid aspect-square w-full max-w-md place-items-center"
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative grid h-full w-full place-items-center"
      >
        {/* soft glow */}
        <div className="absolute h-56 w-56 rounded-full bg-brand-500/20 blur-3xl" />

        {/* orbit rings + tracer dots */}
        {orbits.map((o, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-white/10"
            style={{ width: o.r * 2, height: o.r * 2 }}
          >
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: o.dur, repeat: Infinity, ease: 'linear' }}
            >
              {Array.from({ length: o.dots }).map((_, d) => (
                <span
                  key={d}
                  className="absolute rounded-full bg-gradient-to-br from-brand-300 to-accent-400 shadow-glow-accent"
                  style={{
                    width: o.size,
                    height: o.size,
                    top: -o.size / 2,
                    left: '50%',
                    marginLeft: -o.size / 2,
                    transform: `rotate(${(360 / o.dots) * d}deg) translateY(${-o.r}px)`,
                    transformOrigin: `center ${o.r + o.size / 2}px`,
                  }}
                />
              ))}
            </motion.div>
          </div>
        ))}

        {/* pulsing core */}
        <motion.div
          className="relative grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 shadow-glow"
          style={{ transform: 'translateZ(40px)' }}
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <motion.span
            className="absolute inset-0 rounded-full border border-white/40"
            animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
          />
          <span className="h-4 w-4 rounded-full bg-white" />
        </motion.div>

        {/* floating chips */}
        <motion.div
          className="absolute -right-2 top-6 rounded-xl border border-white/10 bg-ink-800/80 px-3 py-2 text-xs font-medium text-white backdrop-blur"
          style={{ transform: 'translateZ(70px)' }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-accent-400">●</span> 3.8x ROAS
        </motion.div>
        <motion.div
          className="absolute -left-4 bottom-8 rounded-xl border border-white/10 bg-ink-800/80 px-3 py-2 text-xs font-medium text-white backdrop-blur"
          style={{ transform: 'translateZ(60px)' }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >
          <span className="text-brand-300">◆</span> +142% growth
        </motion.div>
      </motion.div>
    </div>
  )
}
