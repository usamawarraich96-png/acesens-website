import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  budgetOptions,
  company,
  interestOptions,
  serviceCategories,
} from '../data/site'
import { fadeUp, revealViewport, staggerContainer } from '../lib/motion'
import Icon from './Icon'
import Logo from './Logo'

function Field({
  id,
  label,
  type = 'text',
  full,
}: {
  id: string
  label: string
  type?: string
  full?: boolean
}) {
  return (
    <div className={full ? 'sm:col-span-2' : ''}>
      <label htmlFor={id} className="mb-1.5 block text-xs font-medium text-slate-400">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        placeholder={label}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-brand-400 focus:bg-white/10"
      />
    </div>
  )
}

function Select({ id, label, options }: { id: string; label: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-medium text-slate-400">
        {label}
      </label>
      <select
        id={id}
        defaultValue=""
        required
        className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-brand-400 focus:bg-white/10"
      >
        <option value="" disabled className="bg-ink-900">
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-ink-900">
            {o}
          </option>
        ))}
      </select>
    </div>
  )
}

function ContactBlock() {
  const [sent, setSent] = useState(false)

  function submit(e: FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="grid gap-6 lg:grid-cols-5">
      {/* Form */}
      <div className="glass p-6 sm:p-8 lg:col-span-3">
        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div
              key="ok"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex min-h-[22rem] flex-col items-center justify-center text-center"
            >
              <div className="grid h-14 w-14 place-items-center rounded-full bg-brand-500 shadow-glow">
                <Icon name="check" className="h-7 w-7 text-white" />
              </div>
              <h4 className="mt-5 text-xl font-bold text-white">Thanks — we'll be in touch</h4>
              <p className="mt-2 max-w-sm text-sm text-slate-400">
                Our team reviews every request and responds within one business day.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              exit={{ opacity: 0 }}
              onSubmit={submit}
              className="grid gap-4 sm:grid-cols-2"
            >
              <Field id="f-name" label="Full Name" />
              <Field id="f-business" label="Business Name" />
              <Field id="f-email" label="Email" type="email" />
              <Field id="f-phone" label="Phone" type="tel" />
              <Select id="f-interest" label="Interested In" options={interestOptions} />
              <Select id="f-budget" label="Monthly Budget" options={budgetOptions} />
              <div className="sm:col-span-2">
                <label htmlFor="f-msg" className="mb-1.5 block text-xs font-medium text-slate-400">
                  Message
                </label>
                <textarea
                  id="f-msg"
                  rows={4}
                  required
                  placeholder="Tell us about your goals…"
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-brand-400 focus:bg-white/10"
                />
              </div>
              <div className="sm:col-span-2">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full sm:w-auto"
                >
                  Send message
                  <Icon name="arrow" className="h-4 w-4" />
                </motion.button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>

      {/* Ready to scale panel */}
      <div className="section-gradient relative flex flex-col justify-center overflow-hidden rounded-card border border-white/[0.12] p-8 shadow-glass lg:col-span-2">
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-500/25 blur-3xl" />
        <div className="relative">
          <h3 className="font-display text-2xl font-bold tracking-tight text-white">
            Ready to scale your business?
          </h3>
          <p className="mt-3 text-slate-300">
            See the platform live in a free 30-minute demo. We'll connect a sample account and
            show your fastest path to growth — no obligation.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-slate-200">
            {['Live platform walkthrough', 'Channel & ROI audit', 'Tailored rollout plan'].map((x) => (
              <li key={x} className="flex items-center gap-2">
                <Icon name="check" className="h-4 w-4 text-accent-400" />
                {x}
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn-primary mt-8 w-full">
            Book a Free Demo
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

const footerCols = [
  {
    title: 'Platform',
    links: serviceCategories.map((c) => ({ label: c.title, to: `/services#${c.id}` })),
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Portfolio', to: '/portfolio' },
      { label: 'Case Studies', to: '/case-studies' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Insights', to: '/insights' },
      { label: 'Case Studies', to: '/case-studies' },
      { label: 'Guides', to: '/insights' },
      { label: 'FAQ', to: '/contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-brand-400/15 bg-ink-950">
      <div className="pointer-events-none absolute inset-0 bg-circuit opacity-50" />

      {/* Let's build what's next */}
      <div className="container-page relative py-20">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <motion.p variants={fadeUp} className="eyebrow">
            Get started
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Let's build <span className="gradient-text">what's next</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-lg text-slate-400">
            Tell us where you want to grow. We'll bring the strategy, the systems, and the team.
          </motion.p>
        </motion.div>

        <ContactBlock />
      </div>

      {/* Nav columns */}
      <div className="container-page relative border-t border-white/10 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Logo size={76} to={null} />
            <p className="mt-4 max-w-xs text-sm text-slate-400">{company.tagline}</p>
            <div className="mt-6 flex gap-3">
              {company.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-xs font-semibold text-slate-300 transition-colors hover:border-brand-400 hover:text-white"
                >
                  {s.label.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>

          {footerCols.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-500">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label + l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-500">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <Icon name="mail" className="mt-0.5 h-4 w-4 text-accent-400" />
                <a href={`mailto:${company.email}`} className="hover:text-white">
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="phone" className="mt-0.5 h-4 w-4 text-accent-400" />
                <span>{company.phone}</span>
              </li>
            </ul>

            <h3 className="mt-8 font-display text-sm font-semibold uppercase tracking-wider text-slate-500">
              Newsletter
            </h3>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex overflow-hidden rounded-full border border-white/10 bg-white/5 focus-within:border-brand-400"
            >
              <input
                type="email"
                required
                placeholder="Email address"
                aria-label="Email address"
                className="min-w-0 flex-1 bg-transparent px-4 py-2 text-sm text-white outline-none placeholder:text-slate-500"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid w-11 place-items-center bg-brand-500 text-white transition-colors hover:bg-brand-400"
              >
                <Icon name="arrow" className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container-page relative flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-sm text-slate-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {company.name}, Inc. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-slate-300">
            Privacy
          </a>
          <a href="#" className="hover:text-slate-300">
            Terms
          </a>
          <a href="#" className="hover:text-slate-300">
            Security
          </a>
        </div>
      </div>
    </footer>
  )
}
