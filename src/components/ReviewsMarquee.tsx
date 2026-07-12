import { animate, motion, useMotionValue, useReducedMotion } from 'framer-motion'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Icon from './Icon'
import SectionHeading from './SectionHeading'
import { reviews } from '../data/site'

const GAP = 24 // matches gap-6 on the track
const SPEED = 42 // auto-glide pixels per second

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon
          key={i}
          name="star"
          className={`h-4 w-4 ${i < rating ? 'fill-brand-300 text-brand-300' : 'fill-transparent text-slate-500'}`}
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
 * Reviews carousel with two behaviors:
 *
 *  • Auto mode (default): the row glides continuously right → left in a seamless
 *    loop. Hovering the row pauses the glide; moving the cursor away resumes it.
 *  • Manual mode: clicking an arrow takes control and steps through the reviews
 *    one card at a time. The Back arrow is hidden at the first review and the
 *    Next arrow is hidden once the last review is reached — so at the end you
 *    can only go back, and going back brings the Next arrow into existence again.
 *
 * Respects prefers-reduced-motion (no auto-glide; arrows still work).
 */
export default function ReviewsMarquee() {
  const N = reviews.length
  const viewportRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const hovering = useRef(false)
  const reduced = useReducedMotion()

  const [mode, setMode] = useState<'auto' | 'manual'>('auto')
  const [index, setIndex] = useState(0)
  const [{ half, cardFull, perView }, setMetrics] = useState({ half: 0, cardFull: 0, perView: 1 })

  const maxIndex = Math.max(0, N - perView)

  // Measure card + track sizes so stepping and looping stay pixel-accurate.
  useLayoutEffect(() => {
    function measure() {
      const track = trackRef.current
      const vp = viewportRef.current
      if (!track || !vp || track.children.length === 0) return
      const card = (track.children[0] as HTMLElement).offsetWidth
      const cardFull = card + GAP
      const half = track.scrollWidth / 2
      const perView = Math.max(1, Math.round((vp.clientWidth + GAP) / cardFull))
      setMetrics({ half, cardFull, perView })
    }
    measure()
    const ro = new ResizeObserver(measure)
    if (viewportRef.current) ro.observe(viewportRef.current)
    return () => ro.disconnect()
  }, [])

  // Auto-glide loop (paused while hovering); seamless thanks to the duplicated track.
  useEffect(() => {
    if (mode !== 'auto' || reduced || half === 0) return
    let raf = 0
    let last = performance.now()
    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      if (!hovering.current) {
        let nx = x.get() - SPEED * dt
        if (nx <= -half) nx += half
        x.set(nx)
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [mode, reduced, half, x])

  function step(dir: -1 | 1) {
    setMode('manual')
    setIndex((cur) => {
      const next = Math.min(maxIndex, Math.max(0, cur + dir))
      animate(x, -next * cardFull, { type: 'spring', stiffness: 260, damping: 32 })
      return next
    })
  }

  const showPrev = mode === 'manual' && index > 0
  const showNext = mode === 'auto' || index < maxIndex

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
              onClick={() => step(-1)}
              aria-label="Previous review"
              className={`grid h-10 w-10 place-items-center rounded-full border border-brand-400/30 text-slate-200 transition-all hover:border-brand-400 hover:bg-brand-400/10 ${
                showPrev ? 'opacity-100' : 'pointer-events-none opacity-0'
              }`}
            >
              <Icon name="chevron" className="h-5 w-5 rotate-90" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next review"
              className={`grid h-10 w-10 place-items-center rounded-full border border-brand-400/30 text-slate-200 transition-all hover:border-brand-400 hover:bg-brand-400/10 ${
                showNext ? 'opacity-100' : 'pointer-events-none opacity-0'
              }`}
            >
              <Icon name="chevron" className="h-5 w-5 -rotate-90" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={viewportRef}
        className="marquee-mask relative mt-14 overflow-hidden"
        onMouseEnter={() => (hovering.current = true)}
        onMouseLeave={() => (hovering.current = false)}
      >
        <motion.div ref={trackRef} style={{ x }} className="flex w-max gap-6">
          {[...reviews, ...reviews].map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
