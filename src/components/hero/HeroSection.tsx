import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Icon from '../Icon'
import CinematicBackground from './CinematicBackground'

/** Reference hero artwork. Commit the supplied render to this path. */
const HERO_IMAGE = '/hero-reference.png'

const eyebrow = [
  ['AI.', 'text-brand-400'],
  ['MARKETING.', 'text-brand-400'],
  ['AMAZON.', 'text-brand-300'],
  ['GROWTH.', 'text-slate-400'],
] as const

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

/**
 * Hero built directly on the supplied reference artwork: the image provides
 * the centre/right visual (energy globe, orbiting service icons, analytics
 * cards, podium, features bar). Scrims hide the artwork's baked-in top nav
 * and left text so the real, selectable navbar and headline render on top.
 * Falls back to the animated cinematic background if the image is missing.
 */
export default function HeroSection() {
  const [imgOk, setImgOk] = useState(true)

  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-24">
      {/* reference artwork (or animated fallback) */}
      {imgOk ? (
        <motion.img
          src={HERO_IMAGE}
          alt=""
          aria-hidden
          onError={() => setImgOk(false)}
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
        />
      ) : (
        <CinematicBackground mx={0} my={0} />
      )}

      {/* top scrim — hides the artwork's baked navigation */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-28 bg-gradient-to-b from-ink-950 via-ink-950/85 to-transparent" />
      {/* left scrim — hides the artwork's baked left text */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-0 w-[46%] bg-gradient-to-r from-ink-950 via-ink-950/92 to-transparent" />
      {/* bottom grounding */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-24 bg-gradient-to-t from-ink-950 to-transparent" />

      {/* real, selectable left column */}
      <div className="container-page relative z-10 flex min-h-[calc(100svh-6rem)] items-center pb-16">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }}
          className="w-full max-w-[30rem]"
        >
          <motion.p
            variants={fadeUp}
            className="font-display text-sm font-semibold uppercase tracking-[0.16em]"
          >
            {eyebrow.map(([w, c]) => (
              <span key={w} className={`${c} mr-1.5`}>
                {w}
              </span>
            ))}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl"
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
            variants={fadeUp}
            className="mt-6 max-w-md text-base leading-relaxed text-slate-400"
          >
            From Agentic AI and intelligent software to digital marketing and Amazon growth,
            Acesens builds scalable revenue systems for modern businesses.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary group">
              Start Building
              <Icon
                name="arrow"
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              />
            </Link>
            <Link to="/services" className="btn-ghost group">
              <Icon name="play" className="h-4 w-4 text-brand-300" />
              View Our Systems
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
