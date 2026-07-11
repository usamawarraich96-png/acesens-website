import Icon from '../Icon'
import { orbitRings } from './heroData'
import type { OrbitRing } from './heroData'

/**
 * Three concentric orbital rings of labelled icon badges around the centre.
 * Each ring is a circle squashed into a fixed ellipse by the parent, so the
 * ring outline reads as a static tilted orbit while an inner layer rotates
 * the badges around it. Every badge counter-rotates and counter-squashes so
 * the icons orbit smoothly but never spin or distort.
 */
function Ring({ ring }: { ring: OrbitRing }) {
  const squash = ring.ry / ring.rx
  const r = ring.rx
  const dir = ring.direction === 1 ? 'normal' : 'reverse'
  const counterDir = ring.direction === 1 ? 'reverse' : 'normal'
  const spin = (direction: string) =>
    `orbit-rotate ${ring.duration}s linear infinite ${direction}`

  const accent = ring.color === 'orange' ? '#FF7A1A' : '#1A9DFF'

  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{ transform: `translate(-50%, -50%) scaleY(${squash})` }}
    >
      {/* faint orbit outline (circle -> ellipse under squash) */}
      <div
        className="absolute left-1/2 top-1/2 rounded-full"
        style={{
          width: r * 2,
          height: r * 2,
          transform: 'translate(-50%, -50%)',
          border: `1px solid ${accent}${ring.color === 'orange' ? '3a' : '30'}`,
          boxShadow: `0 0 24px -6px ${accent}55, inset 0 0 40px -20px ${accent}55`,
        }}
      />

      {/* rotating badge layer */}
      <div
        className="absolute left-1/2 top-1/2"
        style={{ transform: 'translate(-50%, -50%)', animation: spin(dir) }}
      >
        {ring.items.map((item, i) => {
          const a = (i / ring.items.length) * Math.PI * 2 - Math.PI / 2
          const x = Math.cos(a) * r
          const y = Math.sin(a) * r
          return (
            <div
              key={item.label}
              className="absolute left-0 top-0"
              style={{ transform: `translate(${x}px, ${y}px)` }}
            >
              {/* counter-rotate + un-squash so badge stays upright & round */}
              <div style={{ animation: spin(counterDir) }}>
                <div
                  className="flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
                  style={{ transform: `scaleY(${1 / squash})` }}
                >
                  <span
                    className="grid h-11 w-11 place-items-center rounded-full border backdrop-blur-md"
                    style={{
                      borderColor: `${accent}55`,
                      background: 'rgba(9,20,34,0.72)',
                      color: ring.color === 'orange' ? '#ffab6b' : '#9fd8ff',
                      boxShadow: `0 0 18px -6px ${accent}aa, inset 0 1px 0 rgba(255,255,255,0.12)`,
                    }}
                  >
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <span className="whitespace-nowrap text-[10px] font-medium text-slate-300">
                    {item.label}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function RingLabel({ ring }: { ring: OrbitRing }) {
  // center-anchored offsets (px) so labels hug the sphere cluster
  const offset =
    ring.labelSide === 'top'
      ? 'translate(-50%, -150px)'
      : ring.labelSide === 'left'
        ? 'translate(calc(-50% - 250px), -60px)'
        : 'translate(calc(-50% + 250px), 40px)'
  const color = ring.color === 'orange' ? 'text-accent-500' : 'text-brand-400'
  return (
    <span
      className={`absolute left-1/2 top-1/2 whitespace-nowrap font-display text-[11px] font-semibold uppercase tracking-[0.2em] ${color}`}
      style={{ transform: offset, textShadow: '0 0 12px rgba(7,18,31,0.9)' }}
    >
      {ring.label}
    </span>
  )
}

export default function OrbitSystem({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`}>
      {orbitRings.map((ring) => (
        <Ring key={ring.id} ring={ring} />
      ))}
      {orbitRings.map((ring) => (
        <RingLabel key={`${ring.id}-label`} ring={ring} />
      ))}
    </div>
  )
}
