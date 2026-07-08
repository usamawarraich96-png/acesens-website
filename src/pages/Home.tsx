import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import AuroraBackground from '../components/AuroraBackground'
import CTASection from '../components/CTASection'
import HeroVisual from '../components/HeroVisual'
import Icon from '../components/Icon'
import Page from '../components/Page'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import StatItem from '../components/StatItem'
import { fadeUp, revealViewport, staggerContainer } from '../lib/motion'
import { services, stats, steps, testimonials } from '../data/site'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <AuroraBackground />
      <div className="container-page grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          animate="show"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
            </span>
            Now sensing across 60+ enterprise deployments
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl"
          >
            Sensing intelligence for a{' '}
            <span className="gradient-text">connected world</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-lg text-lg text-slate-400">
            Acesens turns raw signals from the physical world into clear, confident decisions —
            with edge hardware, real-time ML, and dashboards your whole team can trust.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary">
              Start a pilot
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <Link to="/services" className="btn-ghost">
              See what we build
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex items-center gap-6 text-sm text-slate-500"
          >
            <span>Trusted by teams at</span>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-semibold text-slate-400">
              <span>Meridian</span>
              <span>Nordwind</span>
              <span>Costa</span>
              <span>Helix</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className="border-y border-white/10 bg-ink-900/40">
      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
        className="container-page grid grid-cols-2 gap-8 py-14 md:grid-cols-4"
      >
        {stats.map((s) => (
          <StatItem key={s.label} value={s.value} label={s.label} />
        ))}
      </motion.div>
    </section>
  )
}

function ServicesPreview() {
  return (
    <section className="container-page py-24">
      <SectionHeading
        eyebrow="What we do"
        title="A full-stack sensing platform"
        subtitle="From the edge device to the executive dashboard, every layer is engineered to work as one."
      />
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
        className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {services.slice(0, 6).map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </motion.div>
      <Reveal className="mt-12 text-center" delay={0.1}>
        <Link to="/services" className="btn-ghost">
          View all services
          <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </Reveal>
    </section>
  )
}

function Process() {
  return (
    <section className="relative overflow-hidden bg-ink-900/40 py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="How it works"
          title="From signal to decision in four steps"
          subtitle="A proven path that gets your fleet live and learning fast."
        />
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((s, i) => (
            <motion.div key={s.step} variants={fadeUp} className="card relative p-7">
              <div className="text-5xl font-extrabold text-white/10">{s.step}</div>
              <h3 className="mt-3 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{s.body}</p>
              {i < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-accent-400 lg:block">
                  <Icon name="arrow" className="h-5 w-5" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="container-page py-24">
      <SectionHeading
        eyebrow="Proof"
        title="Teams that trust their signals"
        subtitle="What operators say after going live with Acesens."
      />
      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
        className="mt-14 grid gap-6 lg:grid-cols-3"
      >
        {testimonials.map((t) => (
          <motion.figure
            key={t.name}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="card flex h-full flex-col p-7"
          >
            <Icon name="spark" className="h-6 w-6 text-accent-400" />
            <blockquote className="mt-4 flex-1 text-slate-200">"{t.quote}"</blockquote>
            <figcaption className="mt-6 border-t border-white/10 pt-4">
              <div className="font-semibold text-white">{t.name}</div>
              <div className="text-sm text-slate-400">{t.title}</div>
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </section>
  )
}

export default function Home() {
  return (
    <Page>
      <Hero />
      <Stats />
      <ServicesPreview />
      <Process />
      <Testimonials />
      <CTASection />
    </Page>
  )
}
