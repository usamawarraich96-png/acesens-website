/**
 * Topic-relevant SVG "poster" illustrations shown inside Service and Portfolio
 * cards. Each renders a dark navy panel with minimal blue/white line art and
 * small graph elements — a lightweight stand-in for real photography.
 */

interface ArtProps {
  className?: string
}

const frame = {
  bg: 'url(#art-bg)',
}

function Defs() {
  return (
    <defs>
      <linearGradient id="art-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#0c1f18" />
        <stop offset="1" stopColor="#0a1712" />
      </linearGradient>
      <linearGradient id="art-blue" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#34d399" />
        <stop offset="1" stopColor="#10b981" />
      </linearGradient>
    </defs>
  )
}

/** Digital Marketing — analytics dashboard with a donut ring, bars, sparkline. */
export function DigitalMarketingArt({ className }: ArtProps) {
  const ring = 2 * Math.PI * 26
  return (
    <svg viewBox="0 0 400 240" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden>
      <Defs />
      <rect width="400" height="240" fill={frame.bg} />
      <g opacity="0.5" stroke="#34d399" strokeWidth="0.5">
        {[60, 120, 180].map((y) => (
          <line key={y} x1="24" y1={y} x2="376" y2={y} />
        ))}
      </g>

      {/* window chrome */}
      <g fill="#34d399" opacity="0.7">
        <circle cx="30" cy="26" r="3.5" />
        <circle cx="42" cy="26" r="3.5" />
        <circle cx="54" cy="26" r="3.5" />
      </g>

      {/* donut / progress ring */}
      <g transform="translate(96 128)">
        <circle r="26" fill="none" stroke="#14382a" strokeWidth="9" />
        <circle
          r="26"
          fill="none"
          stroke="url(#art-blue)"
          strokeWidth="9"
          strokeLinecap="round"
          strokeDasharray={`${ring * 0.72} ${ring}`}
          transform="rotate(-90)"
        />
        <text x="0" y="5" textAnchor="middle" fontSize="16" fontWeight="700" fill="#ffffff">
          72%
        </text>
      </g>

      {/* vertical bars */}
      <g transform="translate(180 150)">
        {[22, 34, 28, 46, 40, 58].map((h, i) => (
          <rect
            key={i}
            x={i * 20}
            y={-h}
            width="11"
            height={h}
            rx="2.5"
            fill="url(#art-blue)"
            opacity={0.55 + i * 0.07}
          />
        ))}
      </g>

      {/* sparkline */}
      <polyline
        points="30,205 80,190 130,198 180,175 230,182 280,158 330,150 372,132"
        fill="none"
        stroke="#34d399"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** Amazon Growth — product package on a pedestal with a rising trend + stars. */
export function AmazonGrowthArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 400 240" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden>
      <Defs />
      <rect width="400" height="240" fill={frame.bg} />

      {/* rising trend line */}
      <polyline
        points="30,200 100,170 170,180 240,120 310,90 372,60"
        fill="none"
        stroke="#34d399"
        strokeWidth="2"
        strokeDasharray="4 6"
        opacity="0.7"
      />
      <path d="M372 60 l-14 2 l6 8 Z" fill="#34d399" opacity="0.9" />

      {/* pedestal */}
      <ellipse cx="150" cy="196" rx="70" ry="12" fill="#123023" />

      {/* product box (isometric) */}
      <g transform="translate(150 150)" stroke="url(#art-blue)" strokeWidth="2" strokeLinejoin="round">
        <path d="M-40,-8 L0,-28 L40,-8 L0,12 Z" fill="#123a2a" />
        <path d="M-40,-8 L-40,34 L0,54 L0,12 Z" fill="#0e3122" />
        <path d="M40,-8 L40,34 L0,54 L0,12 Z" fill="#0b2419" />
        <path d="M0,12 L0,-6 M-20,-13 L20,-13" stroke="#34d399" strokeWidth="1.5" opacity="0.6" />
      </g>

      {/* stars */}
      <g transform="translate(255 150)" fill="#34d399">
        {[0, 1, 2, 3, 4].map((i) => (
          <path
            key={i}
            transform={`translate(${i * 24} 0) scale(0.7)`}
            d="M12 3.5l2.6 5.5 6 .8-4.4 4.1 1.1 5.9L12 17l-5.3 2.8 1.1-5.9L3.4 9.8l6-.8L12 3.5Z"
            opacity={i < 4 ? 1 : 0.35}
          />
        ))}
      </g>
      <text x="255" y="120" fontSize="13" fill="#9FB5A9">
        Best Seller
      </text>
    </svg>
  )
}

/** AI Systems — a stylized circuit "brain" chip with nodes and traces. */
export function AISystemsArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 400 240" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden>
      <Defs />
      <rect width="400" height="240" fill={frame.bg} />

      {/* circuit traces */}
      <g stroke="#1e4d38" strokeWidth="1.5" fill="none">
        <path d="M40 60 H120 V110 M360 70 H280 V150 M40 190 H140 V150 M360 200 H250 V110" />
      </g>
      <g fill="#34d399">
        <circle cx="40" cy="60" r="3" />
        <circle cx="360" cy="70" r="3" />
        <circle cx="40" cy="190" r="3" />
        <circle cx="360" cy="200" r="3" />
      </g>

      {/* central chip */}
      <g transform="translate(200 120)">
        <rect x="-52" y="-46" width="104" height="92" rx="14" fill="#0e2f22" stroke="url(#art-blue)" strokeWidth="2" />
        {/* chip pins */}
        <g stroke="#34d399" strokeWidth="2">
          {[-30, -10, 10, 30].map((x) => (
            <line key={`t${x}`} x1={x} y1="-46" x2={x} y2="-56" />
          ))}
          {[-30, -10, 10, 30].map((x) => (
            <line key={`b${x}`} x1={x} y1="46" x2={x} y2="56" />
          ))}
        </g>
        {/* brain glyph */}
        <path
          d="M-2,-24 a14,14 0 0 0 -16,10 a12,12 0 0 0 -2,20 a12,12 0 0 0 16,8 M2,-24 a14,14 0 0 1 16,10 a12,12 0 0 1 2,20 a12,12 0 0 1 -16,8 M0,-26 V26"
          fill="none"
          stroke="#a7f3d0"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {[
          [-10, -8],
          [8, -2],
          [-6, 10],
          [10, 14],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="2.2" fill="#34d399" />
        ))}
      </g>
    </svg>
  )
}

const byId: Record<string, (p: ArtProps) => JSX.Element> = {
  'digital-marketing': DigitalMarketingArt,
  'amazon-growth': AmazonGrowthArt,
  'ai-systems': AISystemsArt,
}

const byCategory: Record<string, (p: ArtProps) => JSX.Element> = {
  'Digital Marketing': DigitalMarketingArt,
  'Amazon Growth': AmazonGrowthArt,
  'AI Systems': AISystemsArt,
}

/** Pick an illustration by service id or by category label. */
export default function TopicArt({
  id,
  category,
  className = 'h-full w-full',
}: {
  id?: string
  category?: string
  className?: string
}) {
  const Comp = (id && byId[id]) || (category && byCategory[category]) || AISystemsArt
  return <Comp className={className} />
}
