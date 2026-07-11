import { motion } from 'framer-motion'

interface Props {
  /** normalized mouse offset, -0.5 … 0.5 */
  mx: number
  my: number
}

/**
 * Cinematic corporate environment behind the hero: dark-navy depth, a
 * receding reflective floor grid with travelling light lines, volumetric
 * fog, animated vertical light shafts, and blue-ambient / orange-accent
 * glows. Pure CSS/SVG + Framer Motion — no particles, no stars. Layers move
 * at different parallax depths with the mouse.
 */
export default function CinematicBackground({ mx, my }: Props) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-ink-950">
      {/* deep radial base */}
      <div className="section-gradient absolute inset-0" />

      {/* side architecture — faint vertical structures */}
      <div
        className="absolute inset-y-0 left-0 w-1/3 opacity-60"
        style={{
          transform: `translateX(${mx * -18}px)`,
          background:
            'repeating-linear-gradient(90deg, rgba(26,157,255,0.05) 0 2px, transparent 2px 90px)',
          maskImage: 'linear-gradient(90deg, black, transparent)',
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-1/3 opacity-60"
        style={{
          transform: `translateX(${mx * 18}px)`,
          background:
            'repeating-linear-gradient(90deg, rgba(26,157,255,0.05) 0 2px, transparent 2px 90px)',
          maskImage: 'linear-gradient(270deg, black, transparent)',
        }}
      />

      {/* animated vertical light shafts */}
      <div className="absolute inset-0" style={{ transform: `translateX(${mx * 10}px)` }}>
        <div className="absolute left-[18%] top-0 h-full w-40 animate-shaft bg-gradient-to-b from-brand-500/12 via-brand-500/5 to-transparent blur-2xl" />
        <div
          className="absolute right-[22%] top-0 h-full w-32 animate-shaft bg-gradient-to-b from-brand-300/10 to-transparent blur-2xl"
          style={{ animationDelay: '4s' }}
        />
        <div
          className="absolute left-[62%] top-0 h-full w-24 animate-shaft bg-gradient-to-b from-accent-500/8 to-transparent blur-2xl"
          style={{ animationDelay: '8s' }}
        />
      </div>

      {/* ambient glows */}
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-[34%] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-brand-500/16 blur-[120px]"
        animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        style={{ x: mx * 24, y: my * 16 }}
      />
      <div
        className="absolute -left-24 top-[18%] h-[26rem] w-[26rem] rounded-full bg-accent-500/[0.08] blur-[110px]"
        style={{ transform: `translate(${mx * 30}px, ${my * 20}px)` }}
      />
      <div
        className="absolute -right-16 bottom-[24%] h-[24rem] w-[24rem] rounded-full bg-accent-500/[0.07] blur-[110px]"
        style={{ transform: `translate(${mx * -30}px, ${my * -14}px)` }}
      />

      {/* receding reflective floor */}
      <div
        className="absolute inset-x-0 bottom-0 h-[46%]"
        style={{ perspective: '640px', transform: `translateX(${mx * 6}px)` }}
      >
        <div
          className="absolute inset-0 origin-bottom bg-grid-fade"
          style={{
            transform: 'rotateX(74deg) scale(2.6)',
            backgroundSize: '54px 54px',
            maskImage: 'linear-gradient(to top, black 8%, transparent 82%)',
            WebkitMaskImage: 'linear-gradient(to top, black 8%, transparent 82%)',
          }}
        />
        {/* travelling floor light lines */}
        <div
          className="absolute inset-0 origin-bottom overflow-hidden"
          style={{
            transform: 'rotateX(74deg) scale(2.6)',
            maskImage: 'linear-gradient(to top, black 8%, transparent 78%)',
            WebkitMaskImage: 'linear-gradient(to top, black 8%, transparent 78%)',
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="absolute left-0 h-[2px] w-1/3 animate-[traveller_9s_linear_infinite] rounded-full"
              style={{
                top: `${28 + i * 22}%`,
                background:
                  'linear-gradient(90deg, transparent, rgba(71,216,255,0.9), transparent)',
                animationDelay: `${i * 3}s`,
                boxShadow: '0 0 12px rgba(71,216,255,0.7)',
              }}
            />
          ))}
        </div>
        {/* floor sheen */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-500/10 to-transparent" />
      </div>

      {/* top volumetric fog + vignette */}
      <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-ink-950 to-transparent" />
      <div className="absolute inset-0 shadow-[inset_0_0_240px_60px_rgba(4,9,18,0.9)]" />
    </div>
  )
}
