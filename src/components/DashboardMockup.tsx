import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import type { PointerEvent } from 'react'
import Icon from './Icon'
import { fadeUp, staggerContainer } from '../lib/motion'

/* ---------- tiny chart primitives (all inline SVG, no deps) ---------- */

function Spark({ className = 'h-10 w-full' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 40" className={className} aria-hidden>
      <defs>
        <linearGradient id="dm-spark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#6ee7b7" stopOpacity="0.5" />
          <stop offset="1" stopColor="#6ee7b7" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M2 32 L20 26 L38 29 L56 18 L74 22 L92 10 L118 5"
        fill="none"
        stroke="#6ee7b7"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M2 32 L20 26 L38 29 L56 18 L74 22 L92 10 L118 5 V40 H2 Z" fill="url(#dm-spark)" />
    </svg>
  )
}

function Bars({ className = 'h-10 w-full' }: { className?: string }) {
  const bars = [12, 20, 15, 26, 22, 32, 28]
  return (
    <svg viewBox="0 0 120 40" className={className} aria-hidden>
      {bars.map((h, i) => (
        <rect
          key={i}
          x={4 + i * 17}
          y={38 - h}
          width="10"
          height={h}
          rx="2"
          fill="#34d399"
          opacity={0.45 + (i / bars.length) * 0.55}
        />
      ))}
    </svg>
  )
}

function Donut({ pct = 72, size = 64 }: { pct?: number; size?: number }) {
  const r = 24
  const c = 2 * Math.PI * r
  return (
    <svg viewBox="0 0 64 64" style={{ width: size, height: size }} aria-hidden>
      <circle cx="32" cy="32" r={r} fill="none" stroke="#173226" strokeWidth="8" />
      <circle
        cx="32"
        cy="32"
        r={r}
        fill="none"
        stroke="#34d399"
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={`${(c * pct) / 100} ${c}`}
        transform="rotate(-90 32 32)"
      />
      <text x="32" y="37" textAnchor="middle" fontSize="13" fontWeight="700" fill="#ffffff">
        {pct}%
      </text>
    </svg>
  )
}

/* ---------- the three reference-style feature cards ---------- */

interface Feature {
  icon: string
  title: string
  metric: string
  sub?: string
  graph: JSX.Element
}

const features: Feature[] = [
  {
    icon: 'line',
    title: 'Real-Time Monitoring',
    metric: '+24.8%',
    graph: <Spark className="mt-3 h-9 w-full" />,
  },
  {
    icon: 'brain',
    title: 'AI-Powered Analytics',
    metric: '98.2%',
    sub: 'Accuracy',
    graph: (
      <div className="mt-3 flex justify-center">
        <div className="relative grid h-14 w-14 place-items-center">
          <span className="absolute inset-0 rounded-full bg-brand-400/15 blur-md" />
          <Icon name="brain" className="relative h-9 w-9 text-brand-300" />
        </div>
      </div>
    ),
  },
  {
    icon: 'shield',
    title: 'Data Security',
    metric: '99.9%',
    sub: 'Uptime',
    graph: (
      <div className="mt-3 flex justify-center">
        <div className="relative grid h-14 w-14 place-items-center">
          <span className="absolute inset-0 rounded-full bg-brand-400/15 blur-md" />
          <Icon name="shield" className="relative h-9 w-9 text-brand-300" />
        </div>
      </div>
    ),
  },
]

export function FeatureCards() {
  return (
    <motion.div
      variants={staggerContainer(0.1, 0.3)}
      initial="hidden"
      animate="show"
      className="mx-auto mt-12 grid w-full max-w-3xl gap-4 sm:grid-cols-3"
    >
      {features.map((f) => (
        <motion.div
          key={f.title}
          variants={fadeUp}
          whileHover={{ y: -4 }}
          className="glass p-5 text-left"
        >
          <div className="flex items-start justify-between gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-400/15 text-brand-300 ring-1 ring-brand-400/20">
              <Icon name={f.icon} className="h-4 w-4" />
            </span>
            <span className="text-right">
              <span className="block font-display text-base font-bold text-brand-300">
                {f.metric}
              </span>
              {f.sub && <span className="block text-[11px] text-slate-500">{f.sub}</span>}
            </span>
          </div>
          <div className="mt-3 text-sm font-semibold text-white">{f.title}</div>
          {f.graph}
        </motion.div>
      ))}
    </motion.div>
  )
}

/* ---------- the floating glass dashboard panel ---------- */

const kpis = [
  { label: 'Total Revenue', value: '$98,642', delta: '+18.2%' },
  { label: 'ROAS', value: '4.2x', delta: '+0.6' },
  { label: 'Sessions', value: '128k', delta: '+9.4%' },
]

const tableRows = [
  ['Meta — Prospecting', '$12,480', '3.8x'],
  ['Google — PMax', '$9,215', '4.6x'],
  ['Amazon — SP Auto', '$7,930', '5.1x'],
]

export default function DashboardMockup() {
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [7, -3]), { stiffness: 120, damping: 20 })
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-6, 6]), { stiffness: 120, damping: 20 })

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
      className="relative mx-auto mt-12 w-full max-w-4xl"
      style={{ perspective: 1400 }}
    >
      {/* under-glow */}
      <div className="pointer-events-none absolute inset-x-16 -bottom-8 h-24 rounded-full bg-brand-500/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40, rotateX: 14 }}
        animate={{ opacity: 1, y: 0, rotateX: 6 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="glass relative overflow-hidden p-4 sm:p-6"
      >
        {/* sheen */}
        <div className="pointer-events-none absolute -top-24 left-1/4 h-48 w-2/3 rotate-[-8deg] bg-white/[0.05] blur-2xl" />

        {/* window chrome */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-brand-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-brand-400/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-brand-400/20" />
          </div>
          <span className="text-xs font-medium tracking-wide text-slate-400">
            Acesens · Growth Dashboard
          </span>
          <span className="rounded-full bg-brand-400/15 px-2.5 py-0.5 text-[11px] font-semibold text-brand-300">
            LIVE
          </span>
        </div>

        {/* KPI row */}
        <div className="mt-4 grid grid-cols-3 gap-3">
          {kpis.map((k) => (
            <div key={k.label} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
              <div className="text-[11px] text-slate-500">{k.label}</div>
              <div className="mt-0.5 flex items-baseline gap-2">
                <span className="font-display text-lg font-bold text-white">{k.value}</span>
                <span className="text-[11px] font-semibold text-brand-300">{k.delta}</span>
              </div>
            </div>
          ))}
        </div>

        {/* charts row */}
        <div className="mt-3 grid gap-3 sm:grid-cols-5">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 sm:col-span-3">
            <div className="flex items-center justify-between text-[11px] text-slate-500">
              <span>Revenue trend</span>
              <span className="text-brand-300">30 days</span>
            </div>
            <Spark className="mt-2 h-20 w-full" />
          </div>
          <div className="grid gap-3 sm:col-span-2">
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3">
              <Donut pct={72} size={56} />
              <div>
                <div className="text-[11px] text-slate-500">Budget pacing</div>
                <div className="text-sm font-semibold text-white">On track</div>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
              <div className="text-[11px] text-slate-500">Channel mix</div>
              <Bars className="mt-1 h-12 w-full" />
            </div>
          </div>
        </div>

        {/* table */}
        <div className="mt-3 hidden rounded-xl border border-white/10 bg-white/[0.04] p-3 sm:block">
          <div className="grid grid-cols-3 gap-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
            <span>Top campaigns</span>
            <span className="text-right">Spend</span>
            <span className="text-right">ROAS</span>
          </div>
          {tableRows.map((r) => (
            <div
              key={r[0]}
              className="mt-2 grid grid-cols-3 gap-2 border-t border-white/[0.06] pt-2 text-xs"
            >
              <span className="text-slate-300">{r[0]}</span>
              <span className="text-right text-slate-400">{r[1]}</span>
              <span className="text-right font-semibold text-brand-300">{r[2]}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ambient floating particles */}
      {[
        { cls: 'left-[-3rem] top-10 h-3 w-3', dur: 7 },
        { cls: 'right-[-2.5rem] top-24 h-2 w-2', dur: 9 },
        { cls: 'left-[-1.5rem] bottom-16 h-2.5 w-2.5', dur: 8 },
        { cls: 'right-[-3.5rem] bottom-8 h-3.5 w-3.5', dur: 10 },
      ].map((p, i) => (
        <motion.span
          key={i}
          aria-hidden
          className={`pointer-events-none absolute ${p.cls} rounded-full bg-brand-300/50 blur-[1px]`}
          animate={{ y: [0, -14, 0], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: p.dur, repeat: Infinity, ease: 'easeInOut', delay: i * 0.7 }}
        />
      ))}
    </div>
  )
}
