import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import CardImage from '../components/CardImage'
import CTASection from '../components/CTASection'
import HeroSection from '../components/hero/HeroSection'
import Icon from '../components/Icon'
import Page from '../components/Page'
import ReviewsMarquee from '../components/ReviewsMarquee'
import SectionHeading from '../components/SectionHeading'
import StatItem from '../components/StatItem'
import { fadeUp, revealViewport, staggerContainer } from '../lib/motion'
import { projects, serviceCategories, stats, steps } from '../data/site'

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

function Services() {
  return (
    <section className="section-gradient py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="The Platform"
          title="Three modules, one growth engine"
          subtitle="Adopt one module, or let all three compound together on a single platform."
          link={{ label: 'View the full platform', to: '/services' }}
        />

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          className="mt-14 grid gap-6 lg:grid-cols-3"
        >
          {serviceCategories.map((cat) => (
            <motion.article
              key={cat.id}
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="glass glass-hover flex h-full flex-col p-5"
            >
              <div className="overflow-hidden rounded-xl ring-1 ring-white/10">
                <CardImage id={cat.id} className="aspect-[16/9] w-full" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-white">
                {cat.title}
              </h3>
              <p className="mt-2 text-sm text-slate-400">{cat.summary}</p>
              <ul className="mt-5 flex-1 space-y-2">
                {cat.items.slice(0, 5).map((item) => (
                  <li key={item.name} className="flex items-center gap-2 text-sm text-slate-300">
                    <Icon name="check" className="h-4 w-4 flex-shrink-0 text-accent-400" />
                    {item.name}
                  </li>
                ))}
              </ul>
              <Link to={`/services#${cat.id}`} className="btn-ghost mt-6 w-full !py-2.5 text-sm">
                Explore
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function PortfolioPreview() {
  return (
    <section className="py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our Portfolio"
          title="Work that moved the numbers"
          subtitle="Customer stories from across the platform's three modules."
          link={{ label: 'View all projects', to: '/portfolio' }}
        />

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
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              className="glass glass-hover group flex h-full flex-col overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <CardImage icon={p.icon} category={p.category} className="aspect-[16/10] w-full" />
                <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-ink-950/70 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                  {p.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="gradient-stat font-display text-2xl font-bold">{p.stat}</div>
                <h3 className="mt-2 font-semibold text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{p.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="section-alt relative overflow-hidden py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="How it works"
          title="Live in minutes, compounding in weeks"
          subtitle="Connect your stack and let the platform take it from there."
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
              <div className="font-display text-5xl font-extrabold text-accent-500/25">{s.step}</div>
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
      <HeroSection />
      <Stats />
      <Services />
      <PortfolioPreview />
      <Process />
      <ReviewsMarquee />
      <CTASection />
    </Page>
  )
}
