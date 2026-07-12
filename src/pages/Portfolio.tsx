import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import CardImage from '../components/CardImage'
import CTASection from '../components/CTASection'
import Icon from '../components/Icon'
import Page from '../components/Page'
import PageHeader from '../components/PageHeader'
import { fadeUp, revealViewport, staggerContainer } from '../lib/motion'
import { categoryTags, projects } from '../data/site'

const filters = ['All', ...categoryTags] as const

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <motion.article
      layout
      variants={fadeUp}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="card group relative flex h-full flex-col overflow-hidden"
    >
      <div className="relative overflow-hidden">
        <CardImage
          icon={project.icon}
          category={project.category}
          className="aspect-[16/10] w-full"
        />
        <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-ink-950/70 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="gradient-stat font-display text-2xl font-bold">{project.stat}</div>
        <h3 className="mt-2 text-lg font-semibold text-white">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm text-slate-400">{project.description}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          View case study
          <Icon name="arrow" className="h-4 w-4" />
        </span>
      </div>
    </motion.article>
  )
}

export default function Portfolio() {
  const [active, setActive] = useState<(typeof filters)[number]>('All')

  const visible = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.category === active)),
    [active],
  )

  return (
    <Page>
      <PageHeader
        eyebrow="Portfolio"
        title="Work that moved"
        titleAccent="the numbers"
        subtitle="A selection of engagements across digital marketing, Amazon growth, and AI systems. Placeholder case studies for now — real ones coming soon."
      />

      <section className="container-page pb-8">
        {/* Filter chips */}
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === f ? 'text-white' : 'text-slate-300 hover:text-white'
              }`}
            >
              {active === f && (
                <motion.span
                  layoutId="portfolio-filter"
                  className="absolute inset-0 -z-10 rounded-full bg-accent-500 shadow-glow-accent"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="container-page pb-24">
        <motion.div
          layout
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <CTASection />
    </Page>
  )
}
