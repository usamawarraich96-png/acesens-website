import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import AISystemsSection from '../components/AISystemsSection'
import AuroraBackground from '../components/AuroraBackground'
import CTASection from '../components/CTASection'
import HeroVisual from '../components/HeroVisual'
import Icon from '../components/Icon'
import Page from '../components/Page'
import ReviewsMarquee from '../components/ReviewsMarquee'
import SectionHeading from '../components/SectionHeading'
import StatItem from '../components/StatItem'
import { fadeUp, revealViewport, staggerContainer } from '../lib/motion'
import { projects, serviceCategories, stats, steps, trustedBrands } from '../data/site'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <AuroraBackground />
      <div className="container-page grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <motion.div variants={staggerContainer(0.12, 0.1)} initial="hidden" animate="show">
          <motion.p variants={fadeUp} className="eyebrow">
            AI. Automation. Growth.
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-4 font-display text-4xl font-extrabold uppercase leading-[1.05] tracking-wide text-white sm:text-6xl"
          >
            Engineering
            <br />
            <span className="gradient-text">measurable growth</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-lg text-lg text-slate-400">
            Acesens blends performance marketing, Amazon expertise, and custom AI systems into one
            engine that turns attention into revenue — and revenue into a system that compounds.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary">
              Book a Strategy Call
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <Link to="/services" className="btn-ghost">
              Explore Services
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Trusted by innovative brands
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3">
              {trustedBrands.map((b) => (
                <span key={b} className="text-lg font-bold tracking-tight text-slate-400/70">
                  {b}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          className="hidden lg:block"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className="section-alt border-y border-brand-400/10">
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

function ServiceImage({ icon, index }: { icon: string; index: number }) {
  const grads = [
    'from-brand-500/30 to-brand-700/10',
    'from-brand-400/25 to-brand-600/10',
    'from-brand-600/30 to-brand-800/10',
  ]
  return (
    <div
      className={`relative aspect-[16/9] overflow-hidden rounded-xl bg-gradient-to-br ${grads[index % 3]} ring-1 ring-white/10`}
    >
      <div className="absolute inset-0 bg-grid-fade bg-[size:24px_24px] opacity-40" />
      <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-brand-500/30 blur-2xl" />
      <div className="absolute inset-0 grid place-items-center">
        <Icon name={icon} className="h-14 w-14 text-brand-200" />
      </div>
    </div>
  )
}

function Services() {
  return (
    <section className="container-page py-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading
          align="left"
          eyebrow="Our Services"
          title="Three pillars of growth"
          subtitle="Adopt one, or let all three work together as a single growth engine."
        />
        <Link
          to="/services"
          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-400 hover:text-brand-300"
        >
          View all services
          <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
        className="mt-14 grid gap-6 lg:grid-cols-3"
      >
        {serviceCategories.map((cat, i) => (
          <motion.article
            key={cat.id}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            className="glass glass-hover flex h-full flex-col p-6"
          >
            <ServiceImage icon={cat.icon} index={i} />
            <h3 className="mt-6 font-display text-xl font-bold uppercase tracking-wide text-white">
              {cat.title}
            </h3>
            <p className="mt-2 text-sm text-slate-400">{cat.summary}</p>
            <ul className="mt-5 flex-1 space-y-2">
              {cat.items.slice(0, 5).map((item) => (
                <li key={item.name} className="flex items-center gap-2 text-sm text-slate-300">
                  <Icon name="check" className="h-4 w-4 flex-shrink-0 text-brand-400" />
                  {item.name}
                </li>
              ))}
            </ul>
            <Link
              to={`/services#${cat.id}`}
              className="btn-ghost mt-6 w-full !py-2.5 text-sm"
            >
              Explore
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}

function PortfolioPreview() {
  return (
    <section className="container-page py-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading
          align="left"
          eyebrow="Our Portfolio"
          title="Work that moved the numbers"
          subtitle="A selection of engagements across our three pillars."
        />
        <Link
          to="/portfolio"
          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-400 hover:text-brand-300"
        >
          View all projects
          <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
        className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.slice(0, 6).map((p) => (
          <motion.article
            key={p.title}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            className="glass glass-hover group flex h-full flex-col overflow-hidden"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-slateblue-700 to-ink-850">
              <div className="absolute inset-0 bg-grid-fade bg-[size:24px_24px] opacity-40" />
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-500/25 blur-2xl transition-all duration-500 group-hover:bg-brand-500/40" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/5 text-brand-300 ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110">
                  <Icon name={p.icon} className="h-7 w-7" />
                </div>
              </div>
              <span className="absolute left-3 top-3 rounded-full border border-brand-400/30 bg-ink-950/70 px-3 py-1 text-xs font-medium text-brand-300 backdrop-blur">
                {p.category}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="gradient-text font-display text-2xl font-extrabold">{p.stat}</div>
              <h3 className="mt-2 font-semibold text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{p.description}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}

function Process() {
  return (
    <section className="section-alt relative overflow-hidden py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="How it works"
          title="From kickoff to compounding growth"
          subtitle="A proven path that gets you launched and scaling fast."
        />
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((s, i) => (
            <motion.div key={s.step} variants={fadeUp} className="glass relative p-7">
              <div className="font-display text-5xl font-extrabold text-brand-500/20">{s.step}</div>
              <h3 className="mt-3 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{s.body}</p>
              {i < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-brand-400 lg:block">
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

export default function Home() {
  return (
    <Page>
      <Hero />
      <Stats />
      <Services />
      <AISystemsSection />
      <PortfolioPreview />
      <Process />
      <ReviewsMarquee />
      <CTASection />
    </Page>
  )
}
