import { motion } from 'framer-motion'
import ParticleField from './ParticleField'

/**
 * Minimal futuristic canvas: deep-navy radial gradient, a faint grid, a live
 * constellation particle field, and two slow-drifting glows — one electric
 * blue, one ember orange. Purely decorative, pointer-events disabled.
 */
export default function AuroraBackground() {
  return (
    <div className="section-gradient pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* faint grid, faded toward the edges */}
      <div className="absolute inset-0 bg-grid-fade bg-[size:52px_52px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />

      {/* live constellation motion */}
      <ParticleField />

      {/* drifting glows */}
      <motion.div
        aria-hidden
        className="absolute -left-32 top-[-12%] h-[36rem] w-[36rem] rounded-full bg-brand-600/25 blur-3xl"
        animate={{ x: [0, 70, 0], y: [0, 40, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute right-[-8%] top-[16%] h-[24rem] w-[24rem] rounded-full bg-accent-500/[0.13] blur-3xl"
        animate={{ x: [0, -60, 0], y: [0, 60, 0], scale: [1, 1.18, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-[-18%] left-1/3 h-[28rem] w-[28rem] rounded-full bg-brand-500/15 blur-3xl"
        animate={{ x: [0, 50, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
