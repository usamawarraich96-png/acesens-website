import { motion } from 'framer-motion'
import { useState } from 'react'
import Icon from './Icon'
import SectionHeading from './SectionHeading'
import { reviews } from '../data/site'

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon
          key={i}
          name="star"
          className={`h-4 w-4 ${i < rating ? 'fill-accent-400 text-accent-400' : 'fill-transparent text-slate-500'}`}
        />
      ))}
    </div>
  )
}

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
  return (
    <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-400 text-sm font-bold text-white ring-2 ring-brand-400/30">
      {initials}
    </span>
  )
}

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <figure className="glass flex w-[19rem] flex-shrink-0 flex-col p-6 sm:w-[22rem]">
      <div className="flex items-center justify-between">
        <Stars rating={review.rating} />
        <Icon name="quote" className="h-6 w-6 text-brand-400/40" />
      </div>
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-300">
        “{review.quote}”
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
        <Avatar name={review.name} />
        <span>
          <span className="block text-sm font-semibold text-white">{review.name}</span>
          <span className="block text-xs text-slate-400">{review.role}</span>
        </span>
      </figcaption>
    </figure>
  )
}

/**
 * Continuously scrolling reviews marquee (right → left). The track is
 * duplicated so the loop is seamless; it pauses on hover, and the global
 * prefers-reduced-motion rule (in index.css) freezes it and lets the row
 * scroll manually. Optional prev/next arrows act as a secondary control:
 * they pause the auto-scroll and nudge the row.
 */
export default function ReviewsMarquee() {
  const [offset, setOffset] = useState(0)
  const [paused, setPaused] = useState(false)

  function nudge(dir: -1 | 1) {
    setPaused(true)
    setOffset((o) => o + dir * 340)
  }

  return (
    <section className="overflow-hidden py-24">
      <div className="container-page">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading
            align="left"
            eyebrow="What our clients say"
            title="Loved by the brands we scale"
            subtitle="Real words from founders and operators we've partnered with."
          />
          <div className="hidden flex-shrink-0 gap-2 sm:flex">
            <button
              type="button"
              onClick={() => nudge(1)}
              aria-label="Previous reviews"
              className="grid h-10 w-10 place-items-center rounded-full border border-brand-400/30 text-slate-200 transition-colors hover:border-brand-400 hover:bg-brand-400/10"
            >
              <Icon name="chevron" className="h-5 w-5 rotate-90" />
            </button>
            <button
              type="button"
              onClick={() => nudge(-1)}
              aria-label="Next reviews"
              className="grid h-10 w-10 place-items-center rounded-full border border-brand-400/30 text-slate-200 transition-colors hover:border-brand-400 hover:bg-brand-400/10"
            >
              <Icon name="chevron" className="h-5 w-5 -rotate-90" />
            </button>
          </div>
        </div>
      </div>

      <div className="marquee-viewport marquee-mask group relative mt-14 overflow-hidden">
        <motion.div animate={{ x: offset }} transition={{ type: 'spring', stiffness: 120, damping: 22 }}>
          <div
            className="marquee-track group-hover:[animation-play-state:paused]"
            style={paused ? { animationPlayState: 'paused' } : undefined}
          >
            {[...reviews, ...reviews].map((review, i) => (
              <ReviewCard key={i} review={review} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
