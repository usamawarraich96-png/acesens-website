import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
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
      {/* Placeholder "image" — gradient panel with an icon (swap for real art) */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-slateblue-700 to-ink-800">
        <div className="absolute inset-0 bg-grid-fade bg-[size:26px_26px] opacity-40" />
        <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-500/20 blur-2xl transition-all duration-500 group-hover:bg-brand-500/40" />
        <div className="absolute inset-0 grid place-items-center">
          <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white/5 text-brand-400 ring-1 ring-white/10 backdrop-blur transition-transform duration-300 group-hover:scale-110">
            <Icon name={project.icon} className="h-8 w-8" />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-brand-400/30 bg-brand-400/10 px-3 py-1 text-xs font-medium text-brand-300">
          {project.category}
        </span>
        <h3 className="mt-3 text-lg font-semibold text-white">{project.title}</h3>
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
        title="Work that moved the numbers"
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
                active === f ? 'text-ink-950' : 'text-slate-300 hover:text-white'
              }`}
            >
              {active === f && (
                <motion.span
                  layoutId="portfolio-filter"
                  className="absolute inset-0 -z-10 rounded-full bg-brand-500"
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
