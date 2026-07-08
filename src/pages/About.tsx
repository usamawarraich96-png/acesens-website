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
          <motion.p variants={fadeUp} className="eyebrow">
            Our story
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl"
          >
            We believe growth should be a system, not a gamble
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-slate-400">
            Acesens began with a simple frustration: too many great brands were pouring money into
            marketing that couldn't be measured, sold on marketplaces they couldn't control, and
            drowning in manual work that software should handle.
          </motion.p>
          <motion.p variants={fadeUp} className="mt-4 text-slate-400">
            So we built a growth partner that connects the dots — performance marketing, Amazon
            expertise, and custom AI systems designed together. Today we help brands on six
            continents turn attention into revenue, and revenue into a system that compounds.
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
    <section className="section-alt border-y border-white/10">
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
    <section className="section-alt py-24">
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
        title="A growth partner, not a vendor"
        subtitle="We are a team of marketers, operators, and engineers building the growth engine for modern brands — measurable, transparent, and built to endure."
      />
      <Story />
      <Stats />
      <Values />
      <Team />
      <CTASection />
    </Page>
  )
}
