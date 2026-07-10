import { motion } from 'framer-motion'

/**
 * Ambient dark background: a subtle circuit/grid pattern with two slow
 * drifting blue gradient glows. Purely decorative, pointer-events disabled.
 * No photography — abstract only.
 */
export default function AuroraBackground() {
  return (
    <div className="section-gradient pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* radial brand glows baked into the panel */}
      <div className="absolute inset-0 bg-circuit" />
      {/* fine grid, faded toward the edges */}
      <div className="absolute inset-0 bg-grid-fade bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />

      {/* circuit traces */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.12]"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <pattern id="circuit" width="180" height="180" patternUnits="userSpaceOnUse">
            <path
              d="M10 90 H70 V30 H120 M90 90 V150 H150 M10 30 H40 V10"
              fill="none"
              stroke="#34d399"
              strokeWidth="1"
            />
            <circle cx="70" cy="90" r="2.5" fill="#34d399" />
            <circle cx="120" cy="30" r="2.5" fill="#34d399" />
            <circle cx="150" cy="150" r="2.5" fill="#34d399" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>

      <motion.div
        aria-hidden
        className="absolute -left-24 top-[-10%] h-[34rem] w-[34rem] rounded-full bg-brand-600/25 blur-3xl"
        animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute right-[-10%] top-[18%] h-[30rem] w-[30rem] rounded-full bg-brand-400/15 blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, 60, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
