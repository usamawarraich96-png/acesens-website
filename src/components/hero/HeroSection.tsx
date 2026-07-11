import { Suspense, lazy, useEffect, useRef, useState } from 'react'
import type { MouseEvent } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Icon from '../Icon'
import CinematicBackground from './CinematicBackground'
import OrbitSystem from './OrbitSystem'
import AnalyticsCards from './AnalyticsCards'
import WorldMapCard from './WorldMapCard'
import FeaturesBar from './FeaturesBar'

const EnergyScene = lazy(() => import('./EnergyScene'))

function hasWebGL() {
  try {
    const c = document.createElement('canvas')
    return !!window.WebGLRenderingContext && !!(c.getContext('webgl') || c.getContext('experimental-webgl'))
  } catch {
    return false
  }
}

/** Static glow fallback for reduced-motion / no-WebGL. */
function SceneFallback() {
  return (
    <div className="relative grid h-full w-full place-items-center">
      <div className="h-72 w-72 rounded-full bg-brand-500/25 blur-[80px]" />
      <div className="absolute h-40 w-40 rounded-full bg-brand-300/30 blur-2xl" />
    </div>
  )
}

/** The floating chrome brand logo (real render) with float + pulse + wobble. */
function ChromeLogo() {
  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 z-[6] -translate-x-1/2 -translate-y-1/2">
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        style={{ perspective: 900 }}
      >
        <motion.div
          animate={{ rotateY: [-9, 9, -9] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformStyle: 'preserve-3d' }}
          className="relative"
        >
          {/* energy pulse ring every 12s */}
          <motion.span
            className="absolute left-1/2 top-1/2 -z-10 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-300/50"
            animate={{ scale: [1, 2.4], opacity: [0.5, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 9, ease: 'easeOut' }}
          />
          <img
            src="/acesens-logo.png"
            alt="Acesens"
            width={340}
            className="w-[230px] select-none sm:w-[340px]"
            style={{
              filter:
                'drop-shadow(0 0 30px rgba(26,157,255,0.5)) drop-shadow(0 6px 10px rgba(255,122,26,0.25)) brightness(1.08)',
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

const eyebrow = [
  ['AI.', 'text-brand-400'],
  ['MARKETING.', 'text-brand-400'],
  ['AMAZON.', 'text-brand-300'],
  ['GROWTH.', 'text-slate-400'],
] as const

export default function HeroSection() {
  const [m, setM] = useState({ x: 0, y: 0 })
  const [enable3d, setEnable3d] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setEnable3d(!reduced && hasWebGL())
  }, [])

  function onMove(e: MouseEvent) {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    setM({ x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5 })
  }

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      className="relative min-h-[100svh] overflow-hidden pt-24"
    >
      <CinematicBackground mx={m.x} my={m.y} />

      {/* ---- centre stage: energy sphere + chrome logo + orbits ---- */}
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 z-0 h-[760px] -translate-y-1/2"
        style={{
          transform: `translate3d(calc(34px + ${m.x * -18}px), calc(-50% + ${m.y * -12}px), 0)`,
        }}
      >
        <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2">
          {enable3d ? (
            <Suspense fallback={<SceneFallback />}>
              <EnergyScene />
            </Suspense>
          ) : (
            <SceneFallback />
          )}
        </div>
        <ChromeLogo />
        <OrbitSystem />
      </div>

      {/* ---- foreground grid: text (left) + analytics (right) ---- */}
      <div className="container-page relative z-10 grid min-h-[calc(100svh-6rem)] grid-cols-1 items-center gap-8 pb-40 lg:grid-cols-12">
        {/* LEFT */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }}
          className="lg:col-span-5 xl:col-span-4"
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            className="font-display text-sm font-semibold uppercase tracking-[0.18em]"
          >
            {eyebrow.map(([w, c]) => (
              <span key={w} className={`${c} mr-1.5`}>
                {w}
              </span>
            ))}
          </motion.p>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="mt-5 font-display text-4xl font-bold leading-[1.04] tracking-tight text-white sm:text-5xl xl:text-[3.35rem]"
          >
            Engineering
            <br />
            Growth Through
            <br />
            <span className="text-brand-400">AI, Marketing</span> &amp;
            <br />
            <span className="text-accent-500">Amazon</span> Intelligence.
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="mt-6 max-w-md text-base leading-relaxed text-slate-400"
          >
            From Agentic AI and intelligent software to digital marketing and Amazon growth,
            Acesens builds scalable revenue systems for modern businesses.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link to="/contact" className="btn-primary group">
              Start Building
              <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link to="/services" className="btn-ghost group">
              <Icon name="play" className="h-4 w-4 text-brand-300" />
              View Our Systems
            </Link>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="mt-10"
          >
            <WorldMapCard />
          </motion.div>
        </motion.div>

        <div className="hidden lg:col-span-2 lg:block xl:col-span-4" />

        {/* RIGHT */}
        <div className="lg:col-span-5 xl:col-span-4 lg:flex lg:justify-end">
          <AnalyticsCards />
        </div>
      </div>

      {/* ---- bottom features bar ---- */}
      <div className="absolute inset-x-0 bottom-6 z-20 px-6">
        <FeaturesBar />
      </div>
    </section>
  )
}
