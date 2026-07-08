import { motion } from 'framer-motion'

/**
 * Ambient animated background: two slow-drifting gradient blobs behind a
 * faint grid. Purely decorative, pointer-events disabled.
 */
export default function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid-fade bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <motion.div
        aria-hidden
        className="absolute -left-24 top-[-10%] h-[32rem] w-[32rem] rounded-full bg-brand-600/30 blur-3xl"
        animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute right-[-10%] top-[20%] h-[28rem] w-[28rem] rounded-full bg-accent-500/20 blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, 60, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
