import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import CTASection from '../components/CTASection'
import Icon from '../components/Icon'
import Page from '../components/Page'
import PageHeader from '../components/PageHeader'
import TopicArt from '../components/Illustration'
import { fadeUp, revealViewport, staggerContainer } from '../lib/motion'
import { blogPosts, faqs } from '../data/site'

/** Inject FAQPage structured data so the FAQ can earn a rich result. */
function useFaqJsonLd() {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    })
    document.head.appendChild(script)
    return () => {
      document.head.removeChild(script)
    }
  }, [])
}

function Article({ post, index }: { post: (typeof blogPosts)[number]; index: number }) {
  const flip = index % 2 === 1
  return (
    <motion.article
      id={post.slug}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={revealViewport}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="glass scroll-mt-28 overflow-hidden"
    >
      <div className={`grid lg:grid-cols-5 ${flip ? 'lg:[direction:rtl]' : ''}`}>
        {/* cover art */}
        <div className="relative min-h-[14rem] overflow-hidden lg:col-span-2 lg:[direction:ltr]">
          <TopicArt icon={post.icon} className="absolute inset-0 h-full w-full" />
          <span className="absolute left-4 top-4 rounded-full border border-brand-400/30 bg-ink-950/70 px-3 py-1 text-xs font-medium text-brand-300 backdrop-blur">
            {post.tag}
          </span>
        </div>

        {/* body */}
        <div className="p-8 sm:p-10 lg:col-span-3 lg:[direction:ltr]">
          <div className="flex items-center gap-3 text-xs text-slate-500">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
            {post.title}
          </h2>
          <p className="mt-4 text-slate-300">{post.intro}</p>

          {post.sections.map((s) => (
            <div key={s.heading} className="mt-6">
              <h3 className="font-display text-lg font-semibold text-white">{s.heading}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.body}</p>
            </div>
          ))}

          <div className="mt-7 rounded-xl border border-brand-400/20 bg-brand-400/[0.06] p-5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-300">
              <Icon name="spark" className="h-4 w-4" />
              Key takeaway
            </div>
            <p className="mt-2 text-sm text-slate-200">{post.takeaway}</p>
          </div>

          {/* keyword chips — light on-page signals */}
          <div className="mt-6 flex flex-wrap gap-2">
            {post.keywords.map((k) => (
              <span
                key={k}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] text-slate-400"
              >
                {k}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="card overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-semibold text-white">{q}</span>
        <Icon
          name="chevron"
          className={`h-5 w-5 flex-shrink-0 text-brand-300 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-5 text-sm leading-relaxed text-slate-400">{a}</p>
      </motion.div>
    </div>
  )
}

export default function Insights() {
  useFaqJsonLd()
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <Page>
      <PageHeader
        eyebrow="Insights"
        title="Ideas that"
        titleAccent="drive growth"
        subtitle="Playbooks and points of view on AI marketing automation, Amazon PPC management, and agentic AI for business — from the team that builds them."
      />

      {/* Blog articles */}
      <section className="container-page pb-8">
        <div className="grid gap-8">
          {blogPosts.map((post, i) => (
            <Article key={post.slug} post={post} index={i} />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page py-20">
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          className="mx-auto max-w-3xl"
        >
          <motion.p variants={fadeUp} className="eyebrow text-center">
            FAQ
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 text-center font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Frequently asked questions
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-xl text-center text-slate-400">
            Quick answers about how Acesens drives growth across marketing, Amazon, and AI.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <FaqItem
                key={f.q}
                q={f.q}
                a={f.a}
                open={openFaq === i}
                onToggle={() => setOpenFaq((cur) => (cur === i ? null : i))}
              />
            ))}
          </motion.div>
        </motion.div>
      </section>

      <CTASection />
    </Page>
  )
}
