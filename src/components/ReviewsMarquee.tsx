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
          className={`h-4 w-4 ${i < rating ? 'fill-brand-400 text-brand-400' : 'fill-transparent text-slate-500'}`}
        />
      ))}
    </div>
  )
}

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <figure className="card flex w-[19rem] flex-shrink-0 flex-col p-6 sm:w-[22rem]">
      <div className="flex items-center justify-between">
        <Stars rating={review.rating} />
        <Icon name="quote" className="h-6 w-6 text-brand-400/40" />
      </div>
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-300">
        “{review.quote}”
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
        <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-400 text-sm font-bold text-ink-950">
          {review.name
            .split(' ')
            .map((n) => n[0])
            .slice(0, 2)
            .join('')}
        </span>
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
 * prefers-reduced-motion rule (in index.css) freezes the animation and lets
 * the row scroll manually instead.
 */
export default function ReviewsMarquee() {
  return (
    <section className="overflow-hidden py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Reviews"
          title="Loved by the brands we scale"
          subtitle="Real words from founders and operators we've partnered with."
        />
      </div>

      <div className="marquee-viewport marquee-mask group relative mt-14 overflow-hidden">
        <div className="marquee-track group-hover:[animation-play-state:paused]">
          {[...reviews, ...reviews].map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}
