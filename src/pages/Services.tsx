import { motion } from 'framer-motion'
import CTASection from '../components/CTASection'
import Icon from '../components/Icon'
import Page from '../components/Page'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import { fadeUp, revealViewport, staggerContainer } from '../lib/motion'
import { services, steps } from '../data/site'

const useCases = [
  {
    title: 'Industrial & Energy',
    body: 'Monitor turbines, pipelines, and grids in real time. Predict failures before they cost you a shift.',
  },
  {
    title: 'Logistics & Fleet',
    body: 'Track condition, location, and health across thousands of assets in motion, anywhere on earth.',
  },
  {
    title: 'Smart Facilities',
    body: 'Air, occupancy, and energy sensing that makes buildings healthier, greener, and cheaper to run.',
  },
  {
    title: 'Robotics & Autonomy',
    body: 'Low-latency perception and telemetry that keeps autonomous systems safe and accountable.',
  },
]

function Grid() {
  return (
    <section className="container-page py-20">
      <SectionHeading
        eyebrow="Capabilities"
        title="Everything you need to sense and act"
        subtitle="Adopt the full platform, or start with the layer you need most."
      />
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
        className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </motion.div>
    </section>
  )
}

function Process() {
  return (
    <section className="bg-ink-900/40 py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Engagement"
          title="How a partnership unfolds"
          subtitle="A structured path from first conversation to a self-improving sensing fleet."
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
              <div className="gradient-text text-3xl font-extrabold sm:w-24">{s.step}</div>
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

function UseCases() {
  return (
    <section className="container-page py-24">
      <SectionHeading
        eyebrow="Where we work"
        title="Built for demanding environments"
        subtitle="Wherever signals matter, Acesens is engineered to keep up."
      />
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
        className="mt-14 grid gap-6 sm:grid-cols-2"
      >
        {useCases.map((u) => (
          <motion.div
            key={u.title}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="card group relative overflow-hidden p-8"
          >
            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent-500/0 blur-2xl transition-all duration-500 group-hover:bg-accent-500/20" />
            <div className="relative flex items-center gap-3">
              <Icon name="check" className="h-5 w-5 text-accent-400" />
              <h3 className="text-lg font-semibold text-white">{u.title}</h3>
            </div>
            <p className="relative mt-3 text-slate-400">{u.body}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default function Services() {
  return (
    <Page>
      <PageHeader
        eyebrow="Services"
        title="One platform, from silicon to signal"
        subtitle="Acesens delivers the hardware, intelligence, and operations that turn the physical world into a live, decision-ready data stream."
      />
      <Grid />
      <Process />
      <UseCases />
      <CTASection />
    </Page>
  )
}
