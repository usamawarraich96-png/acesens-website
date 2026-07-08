import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import type { FormEvent } from 'react'
import Icon from '../components/Icon'
import Page from '../components/Page'
import PageHeader from '../components/PageHeader'
import { fadeUp, revealViewport, staggerContainer } from '../lib/motion'
import { company } from '../data/site'

const contactDetails = [
  { icon: 'mail', label: 'Email', value: company.email, href: `mailto:${company.email}` },
  { icon: 'phone', label: 'Phone', value: company.phone, href: `tel:${company.phone}` },
  { icon: 'pin', label: 'Office', value: company.address },
]

type Field = 'name' | 'email' | 'company' | 'message'

function ContactForm() {
  const [values, setValues] = useState<Record<Field, string>>({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function update(field: Field, value: string) {
    setValues((v) => ({ ...v, [field]: value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    // Placeholder submission — no backend wired up.
    setSubmitted(true)
  }

  const fields: { name: Field; label: string; type?: string; full?: boolean }[] = [
    { name: 'name', label: 'Full name' },
    { name: 'email', label: 'Work email', type: 'email' },
    { name: 'company', label: 'Company', full: true },
  ]

  return (
    <div className="card relative overflow-hidden p-8">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex min-h-[26rem] flex-col items-center justify-center text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 250, damping: 15, delay: 0.1 }}
              className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 shadow-glow"
            >
              <Icon name="check" className="h-8 w-8 text-white" />
            </motion.div>
            <h3 className="mt-6 text-2xl font-bold text-white">Message received</h3>
            <p className="mt-2 max-w-sm text-slate-400">
              Thanks, {values.name || 'there'}. Our team will be in touch within one business day.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false)
                setValues({ name: '', email: '', company: '', message: '' })
              }}
              className="btn-ghost mt-8"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            variants={staggerContainer(0.08)}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="grid gap-5 sm:grid-cols-2"
          >
            {fields.map((f) => (
              <motion.div
                key={f.name}
                variants={fadeUp}
                className={f.full ? 'sm:col-span-2' : ''}
              >
                <label
                  htmlFor={f.name}
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  {f.label}
                </label>
                <input
                  id={f.name}
                  type={f.type ?? 'text'}
                  required
                  value={values[f.name]}
                  onChange={(e) => update(f.name, e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-brand-400 focus:bg-white/10"
                  placeholder={f.label}
                />
              </motion.div>
            ))}

            <motion.div variants={fadeUp} className="sm:col-span-2">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
                How can we help?
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={values.message}
                onChange={(e) => update('message', e.target.value)}
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-brand-400 focus:bg-white/10"
                placeholder="Tell us about your brand and what you'd like to grow…"
              />
            </motion.div>

            <motion.div variants={fadeUp} className="sm:col-span-2">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full sm:w-auto"
              >
                Send message
                <Icon name="arrow" className="h-4 w-4" />
              </motion.button>
            </motion.div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Contact() {
  return (
    <Page>
      <PageHeader
        eyebrow="Contact"
        title="Let's build your"
        titleAccent="growth engine"
        subtitle="Tell us about your goals, and we'll show you how Acesens gets you there — fast."
      />

      <section className="container-page pb-24">
        <div className="grid gap-10 lg:grid-cols-5">
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={revealViewport}
            className="lg:col-span-2"
          >
            <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white">
              Talk to our team
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-3 text-slate-400">
              Whether you're launching a campaign or scaling a brand, we'd love to hear from you.
              Reach out and we'll respond within one business day.
            </motion.p>

            <div className="mt-8 space-y-4">
              {contactDetails.map((d) => (
                <motion.div
                  key={d.label}
                  variants={fadeUp}
                  className="card flex items-center gap-4 p-5"
                >
                  <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 text-accent-400 ring-1 ring-white/10">
                    <Icon name={d.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-500">
                      {d.label}
                    </div>
                    {d.href ? (
                      <a href={d.href} className="text-white transition-colors hover:text-accent-400">
                        {d.value}
                      </a>
                    ) : (
                      <div className="text-white">{d.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={revealViewport}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </Page>
  )
}
