import { motion } from 'framer-motion'
import CTASection from '../components/CTASection'
import Icon from '../components/Icon'
import Page from '../components/Page'
import PageHeader from '../components/PageHeader'
import { fadeUp, revealViewport, staggerContainer } from '../lib/motion'
import { insights } from '../data/site'

export default function Insights() {
  const [featured, ...rest] = insights

  return (
    <Page>
      <PageHeader
        eyebrow="Insights"
        title="Ideas that"
        titleAccent="drive growth"
        subtitle="Playbooks, teardowns, and points of view on marketing, Amazon, and applied AI. Placeholder articles for now."
      />

      <section className="container-page pb-24">
        {/* Featured */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={revealViewport}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="glass glass-hover group grid overflow-hidden lg:grid-cols-2"
        >
          <div className="relative min-h-[16rem] overflow-hidden bg-gradient-to-br from-brand-600/30 to-ink-850">
            <div className="absolute inset-0 bg-grid-fade bg-[size:26px_26px] opacity-40" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-500/30 blur-3xl" />
            <div className="absolute inset-0 grid place-items-center">
              <Icon name="spark" className="h-16 w-16 text-brand-200" />
            </div>
          </div>
          <div className="flex flex-col justify-center p-8">
            <span className="w-fit rounded-full border border-brand-400/30 bg-brand-400/10 px-3 py-1 text-xs font-medium text-brand-300">
              {featured.tag}
            </span>
            <h2 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
              {featured.title}
            </h2>
            <p className="mt-3 text-slate-400">{featured.excerpt}</p>
            <div className="mt-5 flex items-center gap-3 text-sm text-slate-500">
              <span>{featured.date}</span>
              <span>·</span>
              <span>{featured.readTime}</span>
            </div>
          </div>
        </motion.article>

        {/* Grid */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {rest.map((post) => (
            <motion.article
              key={post.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="glass glass-hover group flex h-full flex-col overflow-hidden"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-slateblue-700 to-ink-850">
                <div className="absolute inset-0 bg-grid-fade bg-[size:22px_22px] opacity-40" />
                <span className="absolute left-3 top-3 rounded-full border border-brand-400/30 bg-ink-950/70 px-3 py-1 text-xs font-medium text-brand-300 backdrop-blur">
                  {post.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-semibold text-white">{post.title}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-400">{post.excerpt}</p>
                <div className="mt-4 flex items-center gap-3 text-xs text-slate-500">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <CTASection />
    </Page>
  )
}
