import { motion } from 'framer-motion'
import CTASection from '../components/CTASection'
import Icon from '../components/Icon'
import Page from '../components/Page'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import { fadeUp, revealViewport, staggerContainer } from '../lib/motion'
import { serviceCategories, steps } from '../data/site'

function CategorySection({
  category,
  index,
}: {
  category: (typeof serviceCategories)[number]
  index: number
}) {
  const alt = index % 2 === 1
  return (
    <section id={category.id} className={alt ? 'section-alt py-20' : 'py-20'}>
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Category intro */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={revealViewport}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex rounded-2xl bg-gradient-to-br from-brand-500/20 to-brand-400/10 p-4 text-brand-400 ring-1 ring-white/10"
            >
              <Icon name={category.icon} className="h-8 w-8" />
            </motion.div>
            <motion.p variants={fadeUp} className="eyebrow mt-6">
              {`Module 0${index + 1}`}
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-2 font-display text-3xl font-bold tracking-tight text-white"
            >
              {category.title}
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-slate-400">
              {category.summary}
            </motion.p>
          </motion.div>

          {/* Sub-services */}
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={revealViewport}
            className="grid gap-4 sm:grid-cols-2 lg:col-span-2"
          >
            {category.items.map((item) => (
              <motion.div
                key={item.name}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="card group relative overflow-hidden p-6"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-500/0 blur-2xl transition-all duration-500 group-hover:bg-brand-500/20" />
                <div className="relative flex items-start gap-3">
                  <Icon
                    name="check"
                    className="mt-1 h-5 w-5 flex-shrink-0 text-brand-400"
                  />
                  <div>
                    <h3 className="font-semibold text-white">{item.name}</h3>
                    <p className="mt-1 text-sm text-slate-400">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="section-alt py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Getting started"
          title="From connect to compounding"
          subtitle="Onboarding measured in minutes — results measured in weeks."
        />
        <motion.ol
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          className="mt-14 space-y-4"
        >
          {steps.map((s) => (
            <motion.li
              key={s.step}
              variants={fadeUp}
              className="card flex flex-col gap-4 p-6 sm:flex-row sm:items-center"
            >
              <div className="gradient-text font-display text-3xl font-extrabold sm:w-24">
                {s.step}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{s.body}</p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}

export default function Services() {
  return (
    <Page>
      <PageHeader
        eyebrow="Services"
        title="Three pillars,"
        titleAccent="one growth engine"
        subtitle="Acesens brings performance marketing, Amazon expertise, and custom AI together so every part of your growth compounds the others."
      />
      {serviceCategories.map((category, i) => (
        <CategorySection key={category.id} category={category} index={i} />
      ))}
      <Process />
      <CTASection />
    </Page>
  )
}
