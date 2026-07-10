import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import CardImage from '../components/CardImage'
import CTASection from '../components/CTASection'
import Icon from '../components/Icon'
import Page from '../components/Page'
import PageHeader from '../components/PageHeader'
import { fadeUp, revealViewport, staggerContainer } from '../lib/motion'
import { projects } from '../data/site'

export default function CaseStudies() {
  return (
    <Page>
      <PageHeader
        eyebrow="Case Studies"
        title="Proof,"
        titleAccent="not promises"
        subtitle="A deeper look at how we drive measurable outcomes across digital marketing, Amazon growth, and AI systems. Placeholder studies for now."
      />

      <section className="container-page pb-24">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          className="grid gap-6 lg:grid-cols-2"
        >
          {projects.map((p) => (
            <motion.article
              key={p.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="glass glass-hover group flex flex-col overflow-hidden sm:flex-row"
            >
              <div className="relative w-full overflow-hidden sm:w-2/5">
                <CardImage
                  src={p.image}
                  alt={p.title}
                  category={p.category}
                  className="aspect-[16/10] h-full w-full"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="w-fit rounded-full border border-brand-400/30 bg-brand-400/10 px-3 py-1 text-xs font-medium text-brand-300">
                  {p.category}
                </span>
                <div className="gradient-stat mt-3 font-display text-2xl font-extrabold">
                  {p.stat}
                </div>
                <h3 className="mt-1 font-semibold text-white">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-400">{p.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Read case study
                  <Icon name="arrow" className="h-4 w-4" />
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link to="/portfolio" className="btn-ghost">
            Browse the full portfolio
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CTASection />
    </Page>
  )
}
