import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp, revealViewport, staggerContainer } from '../lib/motion'
import Icon from './Icon'

export default function CTASection() {
  return (
    <section className="container-page py-24">
      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-700/40 via-ink-800 to-ink-900 px-8 py-16 text-center sm:px-16"
      >
        <div className="pointer-events-none absolute inset-0 bg-grid-fade bg-[size:32px_32px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full bg-accent-500/20 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="relative">
          <motion.h2
            variants={fadeUp}
            className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl"
          >
            Ready to turn attention into revenue?
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
            Talk to our team about your goals. We'll map the fastest path to growth and have your
            first campaigns live in weeks, not quarters.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link to="/contact" className="btn-primary">
              Start a conversation
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <Link to="/services" className="btn-ghost">
              Explore services
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
