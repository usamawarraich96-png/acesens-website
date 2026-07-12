/**
 * Topic-relevant SVG "poster" illustrations shown inside Service, Portfolio,
 * Case Study, and Insight cards. Each renders a dark navy panel with minimal
 * blue / cyan / white line art — clean, on-brand vector graphics generated in
 * code (no photography, no orange). Selected by explicit `variant`, or derived
 * from a card's `icon`, service `id`, or `category` label.
 */

interface ArtProps {
  className?: string
}

/* ---- shared palette / defs ---- */
const NAVY_PANEL = '#101833'
const NAVY_DEEP = '#0c142e'
const NAVY_MID = '#16224e'
const TRACK = '#1b2547'
const BLUE = '#4f7df7'
const CYAN = '#47D8FF'
const LIGHT = '#bcd3fd'
const MUTED = '#9AA6C0'

function Defs() {
  return (
    <defs>
      <linearGradient id="art-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#0e152b" />
        <stop offset="1" stopColor="#0a0f22" />
      </linearGradient>
      <linearGradient id="art-blue" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#4f7df7" />
        <stop offset="1" stopColor="#6690fa" />
      </linearGradient>
      <linearGradient id="art-cyan" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#47D8FF" />
        <stop offset="1" stopColor="#1A9DFF" />
      </linearGradient>
    </defs>
  )
}

function Frame() {
  return <rect width="400" height="240" fill="url(#art-bg)" />
}

/** Digital Marketing — analytics dashboard: donut ring, bars, sparkline. */
export function MarketingArt({ className }: ArtProps) {
  const ring = 2 * Math.PI * 26
  return (
    <svg viewBox="0 0 400 240" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden>
      <Defs />
      <Frame />
      <g opacity="0.4" stroke={BLUE} strokeWidth="0.5">
        {[60, 120, 180].map((y) => (
          <line key={y} x1="24" y1={y} x2="376" y2={y} />
        ))}
      </g>
      <g fill={BLUE} opacity="0.7">
        <circle cx="30" cy="26" r="3.5" />
        <circle cx="42" cy="26" r="3.5" />
        <circle cx="54" cy="26" r="3.5" />
      </g>
      <g transform="translate(96 128)">
        <circle r="26" fill="none" stroke={TRACK} strokeWidth="9" />
        <circle
          r="26"
          fill="none"
          stroke="url(#art-cyan)"
          strokeWidth="9"
          strokeLinecap="round"
          strokeDasharray={`${ring * 0.72} ${ring}`}
          transform="rotate(-90)"
        />
        <text x="0" y="5" textAnchor="middle" fontSize="16" fontWeight="700" fill="#ffffff">
          72%
        </text>
      </g>
      <g transform="translate(180 150)">
        {[22, 34, 28, 46, 40, 58].map((h, i) => (
          <rect key={i} x={i * 20} y={-h} width="11" height={h} rx="2.5" fill="url(#art-blue)" opacity={0.55 + i * 0.07} />
        ))}
      </g>
      <polyline
        points="30,205 80,190 130,198 180,175 230,182 280,158 330,150 372,132"
        fill="none"
        stroke={CYAN}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** Amazon Growth — product box on a pedestal with a rising trend + stars. */
export function AmazonArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 400 240" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden>
      <Defs />
      <Frame />
      <polyline
        points="30,200 100,170 170,180 240,120 310,90 372,60"
        fill="none"
        stroke="url(#art-cyan)"
        strokeWidth="2.4"
        strokeDasharray="4 6"
        opacity="0.9"
      />
      <path d="M372 60 l-14 2 l6 8 Z" fill={CYAN} opacity="0.95" />
      <ellipse cx="150" cy="196" rx="70" ry="12" fill="#131b36" />
      <g transform="translate(150 150)" stroke="url(#art-blue)" strokeWidth="2" strokeLinejoin="round">
        <path d="M-40,-8 L0,-28 L40,-8 L0,12 Z" fill={NAVY_MID} />
        <path d="M-40,-8 L-40,34 L0,54 L0,12 Z" fill="#101a3c" />
        <path d="M40,-8 L40,34 L0,54 L0,12 Z" fill={NAVY_DEEP} />
        <path d="M0,12 L0,-6 M-20,-13 L20,-13" stroke={BLUE} strokeWidth="1.5" opacity="0.6" />
      </g>
      <g transform="translate(255 150)" fill={CYAN}>
        {[0, 1, 2, 3, 4].map((i) => (
          <path
            key={i}
            transform={`translate(${i * 24} 0) scale(0.7)`}
            d="M12 3.5l2.6 5.5 6 .8-4.4 4.1 1.1 5.9L12 17l-5.3 2.8 1.1-5.9L3.4 9.8l6-.8L12 3.5Z"
            opacity={i < 4 ? 1 : 0.35}
          />
        ))}
      </g>
      <text x="255" y="120" fontSize="13" fill={MUTED}>
        Best Seller
      </text>
    </svg>
  )
}

/** AI Systems — a stylized circuit "brain" chip with nodes and traces. */
export function AIArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 400 240" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden>
      <Defs />
      <Frame />
      <g stroke="#23305c" strokeWidth="1.5" fill="none">
        <path d="M40 60 H120 V110 M360 70 H280 V150 M40 190 H140 V150 M360 200 H250 V110" />
      </g>
      <g fill={BLUE}>
        <circle cx="40" cy="60" r="3" />
        <circle cx="360" cy="70" r="3" />
        <circle cx="40" cy="190" r="3" />
        <circle cx="360" cy="200" r="3" />
      </g>
      <g transform="translate(200 120)">
        <rect x="-52" y="-46" width="104" height="92" rx="14" fill={NAVY_PANEL} stroke="url(#art-blue)" strokeWidth="2" />
        <g stroke={BLUE} strokeWidth="2">
          {[-30, -10, 10, 30].map((x) => (
            <line key={`t${x}`} x1={x} y1="-46" x2={x} y2="-56" />
          ))}
          {[-30, -10, 10, 30].map((x) => (
            <line key={`b${x}`} x1={x} y1="46" x2={x} y2="56" />
          ))}
        </g>
        <path
          d="M-2,-24 a14,14 0 0 0 -16,10 a12,12 0 0 0 -2,20 a12,12 0 0 0 16,8 M2,-24 a14,14 0 0 1 16,10 a12,12 0 0 1 2,20 a12,12 0 0 1 -16,8 M0,-26 V26"
          fill="none"
          stroke={LIGHT}
          strokeWidth="2"
          strokeLinecap="round"
        />
        {[
          [-10, -8],
          [8, -2],
          [-6, 10],
          [10, 14],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="2.4" fill={i % 2 ? CYAN : BLUE} />
        ))}
      </g>
    </svg>
  )
}

/** SEO / Search — magnifier over a ranked results list. */
export function SeoArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 400 240" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden>
      <Defs />
      <Frame />
      {/* results list */}
      <g transform="translate(40 54)">
        {[0, 1, 2, 3].map((i) => (
          <g key={i} transform={`translate(0 ${i * 40})`} opacity={1 - i * 0.16}>
            <rect x="0" y="0" width="220" height="26" rx="6" fill={NAVY_PANEL} stroke="#22305c" strokeWidth="1" />
            <rect x="10" y="7" width="12" height="12" rx="3" fill={i === 0 ? CYAN : BLUE} />
            <rect x="32" y="8" width={150 - i * 22} height="4" rx="2" fill={LIGHT} opacity="0.75" />
            <rect x="32" y="16" width={110 - i * 14} height="3" rx="1.5" fill={MUTED} opacity="0.5" />
          </g>
        ))}
      </g>
      {/* rank badge on the top result */}
      <g transform="translate(232 60)">
        <circle r="12" fill="url(#art-cyan)" />
        <text x="0" y="4" textAnchor="middle" fontSize="12" fontWeight="700" fill="#04121f">
          1
        </text>
      </g>
      {/* magnifier */}
      <g transform="translate(300 150)" stroke="url(#art-cyan)" strokeWidth="7" fill="none" strokeLinecap="round">
        <circle cx="0" cy="0" r="34" />
        <line x1="26" y1="26" x2="58" y2="58" />
      </g>
      <circle cx="300" cy="150" r="20" fill={CYAN} opacity="0.12" />
    </svg>
  )
}

/** Social — a connected share network radiating from a hub. */
export function SocialArt({ className }: ArtProps) {
  const nodes = [
    [90, 70],
    [320, 60],
    [70, 180],
    [330, 180],
    [200, 40],
    [200, 210],
  ]
  return (
    <svg viewBox="0 0 400 240" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden>
      <Defs />
      <Frame />
      <g stroke={BLUE} strokeWidth="1.5" opacity="0.55">
        {nodes.map(([x, y], i) => (
          <line key={i} x1="200" y1="120" x2={x} y2={y} />
        ))}
      </g>
      {nodes.map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <circle r="15" fill={NAVY_PANEL} stroke="url(#art-blue)" strokeWidth="1.5" />
          <circle r="5" fill={i % 2 ? CYAN : BLUE} />
        </g>
      ))}
      {/* central hub */}
      <g transform="translate(200 120)">
        <circle r="30" fill={NAVY_MID} stroke="url(#art-cyan)" strokeWidth="2.5" />
        <path
          d="M-10,-2 a10,10 0 1 1 3,7 l-9,4 M8,-6 l0,-2"
          fill="none"
          stroke={LIGHT}
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <circle cx="9" cy="-9" r="3.2" fill={CYAN} />
        <circle cx="-11" cy="10" r="3.2" fill={CYAN} />
        <circle cx="12" cy="9" r="3.2" fill={CYAN} />
      </g>
    </svg>
  )
}

/** Automation — flow of nodes into a gear, i.e. wired-together tools. */
export function AutomationArt({ className }: ArtProps) {
  const teeth = Array.from({ length: 10 })
  return (
    <svg viewBox="0 0 400 240" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden>
      <Defs />
      <Frame />
      {/* pipeline */}
      <path
        d="M40 80 H130 a16 16 0 0 1 16 16 V150 a16 16 0 0 0 16 16 H250"
        fill="none"
        stroke={BLUE}
        strokeWidth="2"
        strokeDasharray="2 7"
        strokeLinecap="round"
        opacity="0.7"
      />
      {[
        [40, 80],
        [146, 96],
        [162, 166],
      ].map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <rect x="-16" y="-13" width="32" height="26" rx="6" fill={NAVY_PANEL} stroke="url(#art-blue)" strokeWidth="1.5" />
          <circle r="3.5" fill={CYAN} />
        </g>
      ))}
      {/* gear */}
      <g transform="translate(300 150)">
        <g fill="url(#art-cyan)">
          {teeth.map((_, i) => (
            <rect key={i} x="-5" y="-52" width="10" height="16" rx="2" transform={`rotate(${i * 36})`} />
          ))}
        </g>
        <circle r="40" fill={NAVY_MID} stroke="url(#art-cyan)" strokeWidth="3" />
        <circle r="15" fill={NAVY_DEEP} stroke={LIGHT} strokeWidth="2.5" />
      </g>
    </svg>
  )
}

/** Mobile / App — a phone with a mini dashboard, floating chart chip. */
export function MobileArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 400 240" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden>
      <Defs />
      <Frame />
      <g transform="translate(150 30)">
        <rect x="0" y="0" width="100" height="180" rx="16" fill={NAVY_PANEL} stroke="url(#art-blue)" strokeWidth="2" />
        <rect x="36" y="9" width="28" height="5" rx="2.5" fill="#22305c" />
        {/* header */}
        <rect x="12" y="26" width="50" height="6" rx="3" fill={LIGHT} opacity="0.8" />
        <rect x="12" y="38" width="34" height="4" rx="2" fill={MUTED} opacity="0.6" />
        {/* KPI tiles */}
        <rect x="12" y="52" width="35" height="30" rx="6" fill={NAVY_MID} />
        <rect x="53" y="52" width="35" height="30" rx="6" fill={NAVY_MID} />
        <circle cx="22" cy="63" r="4" fill={CYAN} />
        <circle cx="63" cy="63" r="4" fill={BLUE} />
        {/* chart */}
        <rect x="12" y="90" width="76" height="52" rx="6" fill={NAVY_DEEP} />
        <polyline
          points="18,132 30,120 42,126 54,108 66,114 82,98"
          fill="none"
          stroke={CYAN}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* rows */}
        <rect x="12" y="150" width="76" height="6" rx="3" fill="#22305c" />
        <rect x="12" y="162" width="60" height="6" rx="3" fill="#22305c" />
      </g>
      {/* floating chip */}
      <g transform="translate(270 84)">
        <rect x="-34" y="-24" width="68" height="48" rx="10" fill={NAVY_MID} stroke="url(#art-cyan)" strokeWidth="1.5" />
        <text x="0" y="-2" textAnchor="middle" fontSize="15" fontWeight="700" fill="#ffffff">
          4.9★
        </text>
        <text x="0" y="14" textAnchor="middle" fontSize="8" fill={MUTED}>
          App rating
        </text>
      </g>
    </svg>
  )
}

/** Growth — a bold upward area chart (used for About / generic hero). */
export function GrowthArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 400 240" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden>
      <Defs />
      <Frame />
      <g opacity="0.35" stroke={BLUE} strokeWidth="0.5">
        {[70, 120, 170].map((y) => (
          <line key={y} x1="24" y1={y} x2="376" y2={y} />
        ))}
      </g>
      <path
        d="M24 200 L90 178 L150 186 L210 150 L270 120 L330 74 L376 48 L376 216 L24 216 Z"
        fill="url(#art-cyan)"
        opacity="0.14"
      />
      <polyline
        points="24,200 90,178 150,186 210,150 270,120 330,74 376,48"
        fill="none"
        stroke="url(#art-cyan)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {[
        [90, 178],
        [210, 150],
        [330, 74],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4.5" fill={CYAN} stroke="#04121f" strokeWidth="1.5" />
      ))}
      <path d="M376 48 l-16 -2 l6 12 Z" fill={CYAN} />
    </svg>
  )
}

/* ---- resolution: variant → icon → id → category → default ---- */

type ArtComp = (p: ArtProps) => JSX.Element

const byKey: Record<string, ArtComp> = {
  marketing: MarketingArt,
  amazon: AmazonArt,
  ai: AIArt,
  seo: SeoArt,
  social: SocialArt,
  automation: AutomationArt,
  mobile: MobileArt,
  growth: GrowthArt,
}

const byIcon: Record<string, string> = {
  megaphone: 'marketing',
  cart: 'amazon',
  box: 'amazon',
  chip: 'ai',
  brain: 'ai',
  search: 'seo',
  spark: 'social',
  flow: 'automation',
  dashboard: 'mobile',
  line: 'growth',
}

const byId: Record<string, string> = {
  'digital-marketing': 'marketing',
  'amazon-growth': 'amazon',
  'ai-systems': 'ai',
}

const byCategory: Record<string, string> = {
  'Digital Marketing': 'marketing',
  'Amazon Growth': 'amazon',
  'AI Systems': 'ai',
}

/** Pick a generated illustration by explicit variant, icon, id, or category. */
export default function TopicArt({
  variant,
  icon,
  id,
  category,
  className = 'h-full w-full',
}: {
  variant?: string
  icon?: string
  id?: string
  category?: string
  className?: string
}) {
  const key =
    (variant && byKey[variant] && variant) ||
    (icon && byIcon[icon]) ||
    (id && byId[id]) ||
    (category && byCategory[category]) ||
    'ai'
  const Comp = byKey[key] ?? AIArt
  return <Comp className={className} />
}
