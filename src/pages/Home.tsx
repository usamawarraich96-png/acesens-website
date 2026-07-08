import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import AuroraBackground from '../components/AuroraBackground'
import CTASection from '../components/CTASection'
import HeroVisual from '../components/HeroVisual'
import Icon from '../components/Icon'
import Page from '../components/Page'
import Reveal from '../components/Reveal'
import ReviewsMarquee from '../components/ReviewsMarquee'
import SectionHeading from '../components/SectionHeading'
import StatItem from '../components/StatItem'
import { fadeUp, revealViewport, staggerContainer } from '../lib/motion'
import { serviceCategories, stats, steps } from '../data/site'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <AuroraBackground />
      <div className="container-page grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <motion.div variants={staggerContainer(0.12, 0.1)} initial="hidden" animate="show">
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
            </span>
            Trusted by 60+ growing brands
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-6 font-display text-4xl font-extrabold uppercase leading-[1.05] tracking-wide text-white sm:text-6xl"
          >
            Grow faster with <span className="gradient-text">Acesens</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-lg text-lg text-slate-400">
            We combine performance marketing, Amazon expertise, and custom AI systems to turn
            attention into revenue — and revenue into a system that compounds.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary">
              Start a project
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <Link to="/services" className="btn-ghost">
              Explore services
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex items-center gap-6 text-sm text-slate-500"
          >
            <span>Working with brands like</span>
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
    <section className="section-alt border-y border-white/10">
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
        title="Three pillars of growth"
        subtitle="Adopt one, or let all three work together as a single growth engine."
      />
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
        className="mt-14 grid gap-6 lg:grid-cols-3"
      >
        {serviceCategories.map((cat) => (
          <motion.article
            key={cat.id}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            className="card group relative flex h-full flex-col overflow-hidden p-7"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-500/0 blur-2xl transition-all duration-500 group-hover:bg-brand-500/25" />
            <div className="relative flex flex-1 flex-col">
              <div className="mb-5 inline-flex w-fit rounded-xl bg-gradient-to-br from-brand-500/20 to-brand-400/10 p-3 text-brand-400 ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110">
                <Icon name={cat.icon} className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white">
                {cat.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{cat.summary}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {cat.items.slice(0, 5).map((item) => (
                  <li
                    key={item.name}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-300"
                  >
                    {item.name}
                  </li>
                ))}
                {cat.items.length > 5 && (
                  <li className="rounded-full border border-brand-400/30 bg-brand-400/10 px-3 py-1 text-xs text-brand-300">
                    +{cat.items.length - 5} more
                  </li>
                )}
              </ul>
            </div>
          </motion.article>
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
            <motion.div key={s.step} variants={fadeUp} className="card relative p-7">
              <div className="font-display text-5xl font-extrabold text-white/10">{s.step}</div>
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
      <ServicesPreview />
      <Process />
      <ReviewsMarquee />
      <CTASection />
    </Page>
  )
}
