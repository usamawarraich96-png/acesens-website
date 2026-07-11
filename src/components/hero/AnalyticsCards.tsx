import { animate, motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import Icon from '../Icon'

/** Count a numeric value up once the element is in view, keeping affixes. */
function useCountUp(target: number, decimals = 0) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, target, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(v),
    })
    return () => c.stop()
  }, [inView, target])
  return { ref, text: val.toFixed(decimals) }
}

function RevenueLine() {
  return (
    <svg viewBox="0 0 160 52" className="mt-3 h-14 w-full" aria-hidden>
      <defs>
        <linearGradient id="rev-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1A9DFF" stopOpacity="0.35" />
          <stop offset="1" stopColor="#1A9DFF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d="M4 44 L28 40 L52 43 L76 30 L100 34 L124 18 L156 8"
        fill="none"
        stroke="#47D8FF"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      />
      <path d="M4 44 L28 40 L52 43 L76 30 L100 34 L124 18 L156 8 V52 H4 Z" fill="url(#rev-fill)" />
    </svg>
  )
}

function GrowthRing({ pct }: { pct: number }) {
  const r = 22
  const c = 2 * Math.PI * r
  return (
    <svg viewBox="0 0 60 60" className="h-16 w-16" aria-hidden>
      <circle cx="30" cy="30" r={r} fill="none" stroke="#14263F" strokeWidth="6" />
      <motion.circle
        cx="30"
        cy="30"
        r={r}
        fill="none"
        stroke="#1A9DFF"
        strokeWidth="6"
        strokeLinecap="round"
        transform="rotate(-90 30 30)"
        strokeDasharray={c}
        initial={{ strokeDashoffset: c }}
        whileInView={{ strokeDashoffset: c * (1 - pct / 100) }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  )
}

interface CardProps {
  label: string
  delay: number
  floatDur: number
  children: ReactNode
}

function GlassCard({ label, delay, floatDur, children }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: floatDur, repeat: Infinity, ease: 'easeInOut' }}
        className="glass sweep w-64 p-5"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
          {label}
        </p>
        {children}
      </motion.div>
    </motion.div>
  )
}

export default function AnalyticsCards() {
  const revenue = useCountUp(24.8, 1)
  const growth = useCountUp(212)
  const sat = useCountUp(98)

  return (
    <div className="flex flex-col items-end gap-5">
      <GlassCard label="Revenue Impact" delay={0.6} floatDur={6}>
        <div className="mt-2 flex items-end justify-between">
          <div>
            <span
              ref={revenue.ref}
              className="font-display text-3xl font-bold tracking-tight text-white"
            >
              ${revenue.text}M+
            </span>
            <p className="mt-0.5 text-xs text-slate-400">Revenue Generated</p>
          </div>
        </div>
        <RevenueLine />
      </GlassCard>

      <GlassCard label="Growth Rate" delay={0.75} floatDur={7}>
        <div className="mt-2 flex items-center justify-between">
          <div>
            <span
              ref={growth.ref}
              className="font-display text-3xl font-bold tracking-tight text-white"
            >
              +{growth.text}%
            </span>
            <p className="mt-0.5 text-xs text-slate-400">Average Growth</p>
          </div>
          <GrowthRing pct={78} />
        </div>
      </GlassCard>

      <GlassCard label="Client Satisfaction" delay={0.9} floatDur={6.5}>
        <div className="mt-2 flex items-center justify-between">
          <div>
            <span
              ref={sat.ref}
              className="font-display text-3xl font-bold tracking-tight text-white"
            >
              {sat.text}%
            </span>
            <p className="mt-0.5 text-xs text-slate-400">Satisfaction Score</p>
          </div>
        </div>
        <div className="mt-3 flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Icon key={i} name="star" className="h-4 w-4 fill-accent-500 text-accent-500" />
          ))}
        </div>
      </GlassCard>
    </div>
  )
}
