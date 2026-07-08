import { Suspense, lazy, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Icon from './Icon'
import SectionHeading from './SectionHeading'
import { fadeUp, revealViewport, staggerContainer } from '../lib/motion'
import { aiFeatures, industries } from '../data/site'

const CubeScene = lazy(() => import('./ai/CubeScene'))

function hasWebGL() {
  try {
    const canvas = document.createElement('canvas')
    return (
      !!window.WebGLRenderingContext &&
      !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    )
  } catch {
    return false
  }
}

/** Simplified, dependency-free cube shown as a fallback. */
function StaticCube() {
  return (
    <div className="relative grid aspect-square w-full max-w-sm place-items-center">
      <div className="absolute h-48 w-48 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="relative grid h-48 w-48 place-items-center rounded-3xl border border-brand-400/30 bg-gradient-to-br from-brand-500/20 to-brand-700/10 shadow-glow backdrop-blur-md">
        <div className="absolute inset-0 rounded-3xl bg-grid-fade bg-[size:22px_22px] opacity-40" />
        <Icon name="brain" className="h-16 w-16 text-brand-300" />
      </div>
      {/* pedestal */}
      <div className="mt-4 h-2 w-40 rounded-full bg-brand-500/40 blur-sm" />
    </div>
  )
}

function CubeStage() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  const [enable3d, setEnable3d] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setEnable3d(!reduced && hasWebGL())
  }, [])

  // Only mount the heavy scene once it scrolls near the viewport.
  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { rootMargin: '200px' },
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="relative mx-auto aspect-square w-full max-w-md">
      {enable3d && inView ? (
        <Suspense fallback={<StaticCube />}>
          <CubeScene />
        </Suspense>
      ) : (
        <StaticCube />
      )}
    </div>
  )
}

function FeatureCard({ feature }: { feature: (typeof aiFeatures)[number] }) {
  return (
    <motion.div variants={fadeUp} whileHover={{ y: -4 }} className="glass glass-hover p-5">
      <div className="mb-3 inline-flex rounded-xl bg-brand-500/15 p-2.5 text-brand-300 ring-1 ring-brand-400/20">
        <Icon name={feature.icon} className="h-5 w-5" />
      </div>
      <h3 className="text-base font-semibold text-white">{feature.title}</h3>
      <p className="mt-1 text-sm text-slate-400">{feature.desc}</p>
    </motion.div>
  )
}

export default function AISystemsSection() {
  return (
    <section className="section-alt relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-circuit opacity-60" />
      <div className="container-page relative">
        <SectionHeading
          eyebrow="Custom AI Systems"
          title="Intelligence, engineered end to end"
          subtitle="From strategy to deployment, we build the AI systems that run inside your business."
        />

        {/* Cube + surrounding feature cards, connected by glowing lines */}
        <div className="relative mt-16 grid items-center gap-6 lg:grid-cols-3">
          {/* animated connector lines (desktop only) */}
          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden
          >
            {[25, 50, 75].map((y) => (
              <line
                key={`l${y}`}
                x1="33"
                y1={y}
                x2="50"
                y2="50"
                stroke="#4FA3F5"
                strokeWidth="0.3"
                className="flow-line"
                opacity="0.7"
              />
            ))}
            {[25, 50, 75].map((y) => (
              <line
                key={`r${y}`}
                x1="67"
                y1={y}
                x2="50"
                y2="50"
                stroke="#4FA3F5"
                strokeWidth="0.3"
                className="flow-line"
                opacity="0.7"
              />
            ))}
          </svg>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={revealViewport}
            className="order-2 space-y-6 lg:order-1"
          >
            {aiFeatures.slice(0, 3).map((f) => (
              <FeatureCard key={f.title} feature={f} />
            ))}
          </motion.div>

          <div className="relative order-1 lg:order-2">
            <CubeStage />
          </div>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={revealViewport}
            className="order-3 space-y-6"
          >
            {aiFeatures.slice(3, 6).map((f) => (
              <FeatureCard key={f.title} feature={f} />
            ))}
          </motion.div>
        </div>

        {/* Industry chips */}
        <motion.div
          variants={staggerContainer(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          className="mt-16"
        >
          <motion.p variants={fadeUp} className="text-center text-sm text-slate-500">
            Trusted across industries
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-5 flex flex-wrap justify-center gap-3"
          >
            {industries.map((ind) => (
              <span
                key={ind}
                className="glass px-4 py-2 text-sm font-medium text-slate-200"
              >
                {ind}
              </span>
            ))}
            <span className="glass px-4 py-2 text-sm font-medium text-brand-300">and more</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
