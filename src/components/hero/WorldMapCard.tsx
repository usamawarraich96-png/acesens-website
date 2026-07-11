import { motion } from 'framer-motion'
import Icon from '../Icon'
import { heroStats } from './heroData'

/** Dotted "global reach" map with a few glowing client nodes. */
function DottedMap() {
  const cols = 34
  const rows = 15
  const dots: { x: number; y: number }[] = []
  // rough continent mask so the dot field reads as a world map
  const inLand = (cx: number, cy: number) => {
    const nx = cx / cols
    const ny = cy / rows
    const blobs = [
      [0.16, 0.42, 0.1, 0.16], // americas N
      [0.24, 0.66, 0.07, 0.16], // americas S
      [0.5, 0.4, 0.09, 0.16], // europe/africa N
      [0.52, 0.64, 0.07, 0.16], // africa S
      [0.72, 0.44, 0.16, 0.18], // asia
      [0.82, 0.72, 0.05, 0.08], // oceania
    ]
    return blobs.some(([bx, by, rx, ry]) => {
      const dx = (nx - bx) / rx
      const dy = (ny - by) / ry
      return dx * dx + dy * dy < 1
    })
  }
  for (let x = 0; x < cols; x++)
    for (let y = 0; y < rows; y++) if (inLand(x, y)) dots.push({ x, y })

  const nodes = [
    [0.17, 0.42],
    [0.5, 0.44],
    [0.73, 0.4],
    [0.26, 0.66],
    [0.8, 0.7],
    [0.7, 0.52],
  ]

  return (
    <svg viewBox="0 0 340 150" className="h-auto w-full" aria-hidden>
      {dots.map((d, i) => (
        <circle
          key={i}
          cx={(d.x / cols) * 340}
          cy={(d.y / rows) * 150}
          r={1.3}
          fill="#33507a"
        />
      ))}
      {nodes.map(([nx, ny], i) => (
        <g key={`n${i}`}>
          <circle cx={nx * 340} cy={ny * 150} r={4.5} fill="#47D8FF" opacity={0.18}>
            <animate
              attributeName="r"
              values="3;7;3"
              dur="3s"
              begin={`${i * 0.4}s`}
              repeatCount="indefinite"
            />
          </circle>
          <circle cx={nx * 340} cy={ny * 150} r={2} fill="#47D8FF" />
        </g>
      ))}
    </svg>
  )
}

export default function WorldMapCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="glass sweep max-w-sm p-5"
    >
      <DottedMap />
      <div className="mt-4 flex items-center gap-6 border-t border-white/10 pt-4">
        <div>
          <p className="text-xs text-slate-400">Serving Clients</p>
          <p className="font-display text-sm font-semibold text-white">Worldwide</p>
        </div>
        {heroStats.map((s) => (
          <div key={s.label} className="flex items-center gap-2">
            <Icon name={s.icon} className="h-5 w-5 text-brand-400" />
            <div>
              <div className="font-display text-lg font-bold leading-none text-white">
                {s.value}
              </div>
              <div className="text-[11px] text-slate-400">{s.label}</div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
