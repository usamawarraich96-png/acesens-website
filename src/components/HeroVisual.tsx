import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import type { PointerEvent } from 'react'
import Icon from './Icon'

const orbitPanels = [
  { icon: 'brain', label: 'AI Systems', pos: 'left-0 top-6', delay: 0 },
  { icon: 'cart', label: 'Amazon', pos: 'right-2 top-24', delay: 0.6 },
  { icon: 'bars', label: 'Digital Marketing', pos: 'left-8 bottom-8', delay: 1.1 },
]

const chips = [
  { icon: 'brain', label: 'AI Agents' },
  { icon: 'cog', label: 'Automation' },
  { icon: 'dashboard', label: 'Analytics' },
  { icon: 'spark', label: 'Growth' },
]

function LineGraph() {
  return (
    <svg viewBox="0 0 120 40" className="mt-2 h-10 w-full" aria-hidden>
      <defs>
        <linearGradient id="lg-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4FA3F5" stopOpacity="0.5" />
          <stop offset="1" stopColor="#4FA3F5" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M2 34 L22 26 L42 30 L62 16 L82 20 L102 8 L118 4" fill="none" stroke="#4FA3F5" strokeWidth="2" strokeLinecap="round" />
      <path d="M2 34 L22 26 L42 30 L62 16 L82 20 L102 8 L118 4 V40 H2 Z" fill="url(#lg-fill)" />
    </svg>
  )
}

function BarGraph() {
  const bars = [10, 16, 12, 22, 18, 28, 24]
  return (
    <svg viewBox="0 0 120 40" className="mt-2 h-10 w-full" aria-hidden>
      {bars.map((h, i) => (
        <rect
          key={i}
          x={4 + i * 17}
          y={38 - h}
          width="10"
          height={h}
          rx="2"
          fill="#3B82F6"
          opacity={0.5 + (i / bars.length) * 0.5}
        />
      ))}
    </svg>
  )
}

/**
 * Interactive hero graphic: a glass "ACESENS" cube surrounded by labeled
 * capability panels and floating stat cards. The whole scene tilts toward
 * the cursor (a parallax micro-interaction) and the panels gently float.
 */
export default function HeroVisual() {
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 18 })
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 18 })

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
      className="relative mx-auto w-full max-w-lg"
      style={{ perspective: 1200 }}
    >
      {/* Floating stat cards */}
      <motion.div
        className="absolute -top-6 right-0 z-20 w-52"
        style={{ transform: 'translateZ(60px)' }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="glass p-4">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Performance Overview</span>
            <span className="font-semibold text-emerald-400">+124%</span>
          </div>
          <LineGraph />
        </div>
      </motion.div>

      <motion.div
        className="absolute right-10 top-40 z-20 w-52"
        style={{ transform: 'translateZ(80px)' }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
      >
        <div className="glass p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-slate-400">Total Revenue</div>
              <div className="font-display text-lg font-bold text-white">$98,642</div>
            </div>
            <span className="text-xs font-semibold text-emerald-400">+18.2%</span>
          </div>
          <BarGraph />
        </div>
      </motion.div>

      {/* Cube scene */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative grid aspect-square place-items-center"
      >
        <div className="absolute h-56 w-56 rounded-full bg-brand-500/20 blur-3xl" />

        {/* labeled capability panels */}
        {orbitPanels.map((p) => (
          <motion.div
            key={p.label}
            className={`absolute z-10 ${p.pos}`}
            style={{ transform: 'translateZ(50px)' }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5 + p.delay, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
          >
            <div className="glass flex items-center gap-2 px-3 py-2">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-brand-500/20 text-brand-300">
                <Icon name={p.icon} className="h-4 w-4" />
              </span>
              <span className="whitespace-nowrap text-xs font-medium text-slate-200">{p.label}</span>
            </div>
          </motion.div>
        ))}

        {/* central glass cube */}
        <motion.div
          className="relative grid h-40 w-40 place-items-center rounded-3xl border border-brand-400/30 bg-gradient-to-br from-brand-500/25 to-brand-700/10 shadow-glow backdrop-blur-md"
          style={{ transform: 'translateZ(30px)' }}
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="absolute inset-0 rounded-3xl bg-grid-fade bg-[size:20px_20px] opacity-40" />
          <span className="font-display text-lg font-extrabold uppercase tracking-[0.2em] text-white">
            Acesens
          </span>
          <motion.span
            className="absolute inset-0 rounded-3xl border border-brand-300/40"
            animate={{ scale: [1, 1.15], opacity: [0.5, 0] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: 'easeOut' }}
          />
        </motion.div>
      </motion.div>

      {/* icon chips row */}
      <div className="relative z-10 -mt-2 flex flex-wrap justify-center gap-2">
        {chips.map((c) => (
          <span
            key={c.label}
            className="glass flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200"
          >
            <Icon name={c.icon} className="h-3.5 w-3.5 text-brand-300" />
            {c.label}
          </span>
        ))}
      </div>
    </div>
  )
}
