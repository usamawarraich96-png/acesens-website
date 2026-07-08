import { motion } from 'framer-motion'
import CTASection from '../components/CTASection'
import Icon from '../components/Icon'
import Page from '../components/Page'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import StatItem from '../components/StatItem'
import { fadeUp, revealViewport, staggerContainer } from '../lib/motion'
import { milestones, stats, team, values } from '../data/site'

function Story() {
  return (
    <section className="container-page py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-400"
          >
            Our story
          </motion.p>
          <motion.h2 variants={fadeUp} className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            We believe the physical world deserves better instrumentation
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-slate-400">
            Acesens began with a simple frustration: the world is full of critical machines,
            spaces, and systems that no one can truly see. Data was trapped in proprietary boxes,
            arriving too late to matter.
          </motion.p>
          <motion.p variants={fadeUp} className="mt-4 text-slate-400">
            So we set out to build sensing infrastructure that is fast, open, and trustworthy —
            hardware and software designed together, from the silicon to the dashboard. Today our
            platform helps operators on six continents act on what their environments are telling
            them, in real time.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          className="relative"
        >
          <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-500/20 to-accent-500/10 blur-2xl" />
          <div className="relative grid gap-4">
            {milestones.map((m) => (
              <motion.div
                key={m.year}
                variants={fadeUp}
                className="card flex items-start gap-4 p-5"
              >
                <div className="gradient-text text-xl font-bold">{m.year}</div>
                <p className="text-sm text-slate-300">{m.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className="border-y border-white/10 bg-ink-900/40">
      <motion.div
        variants={staggerContainer(0.1)}
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

function Values() {
  return (
    <section className="container-page py-24">
      <SectionHeading
        eyebrow="What we stand for"
        title="Principles that guide every build"
        subtitle="Culture is what we do when no one is watching the dashboard."
      />
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
        className="mt-14 grid gap-6 sm:grid-cols-2"
      >
        {values.map((v) => (
          <motion.div
            key={v.title}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="card flex gap-4 p-7"
          >
            <div className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 text-accent-400 ring-1 ring-white/10">
              <Icon name="spark" className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">{v.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{v.body}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

function Team() {
  return (
    <section className="bg-ink-900/40 py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="The people"
          title="Builders, scientists, and operators"
          subtitle="A cross-disciplinary team that has shipped hardware and software at global scale."
        />
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="card group flex items-center gap-4 p-6"
            >
              <div className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 text-lg font-bold text-white shadow-glow transition-transform duration-300 group-hover:scale-105">
                {member.initials}
              </div>
              <div>
                <div className="font-semibold text-white">{member.name}</div>
                <div className="text-sm text-slate-400">{member.role}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <Page>
      <PageHeader
        eyebrow="About Acesens"
        title="Instrumenting the physical world, honestly"
        subtitle="We are a team of engineers and scientists building the sensing layer for modern operations — reliable, open, and built to endure."
      />
      <Story />
      <Stats />
      <Values />
      <Team />
      <CTASection />
    </Page>
  )
}
