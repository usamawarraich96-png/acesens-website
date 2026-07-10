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
        className="section-gradient relative overflow-hidden rounded-card border border-white/[0.12] px-8 py-16 text-center shadow-glass sm:px-16"
      >
        <div className="pointer-events-none absolute inset-0 bg-grid-fade bg-[size:32px_32px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full bg-brand-500/20 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="relative">
          <motion.h2
            variants={fadeUp}
            className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl"
          >
            Ready to put growth on autopilot?
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
            Connect your channels and see the platform work in a free demo. Live in minutes, not
            quarters.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link to="/contact" className="btn-primary">
              Book a demo
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <Link to="/services" className="btn-ghost">
              Explore the platform
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
