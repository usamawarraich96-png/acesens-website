import { Link } from 'react-router-dom'

interface LogoProps {
  /** Height of the mark in pixels. Wordmark scales with it. */
  size?: number
  /** Render as a link to home (navbar) or a plain block (footer hero). */
  to?: string | null
  className?: string
}

/**
 * Acesens logo, recreated as a scalable inline SVG so it inherits the page
 * font (Poppins) and theme colors. Drop a real raster into /public and swap
 * this for an <img> if the exact artwork is preferred.
 *
 * The mark is a cyan glowing arc with a gap at the top-right and an arrow
 * accent; the wordmark is a metallic-silver "ACESENS".
 */
function Mark({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      className="flex-shrink-0"
    >
      <defs>
        <linearGradient id="acs-arc" x1="20" y1="80" x2="80" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#3FA9F5" />
          <stop offset="1" stopColor="#4FC3F7" />
        </linearGradient>
        <linearGradient id="acs-silver" x1="70" y1="24" x2="90" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#f2f5f9" />
          <stop offset="0.55" stopColor="#c2ccd8" />
          <stop offset="1" stopColor="#8f9bab" />
        </linearGradient>
        <filter id="acs-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="2.4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Glowing arc with a gap at the top-right (drawn via dash gap) */}
      <circle
        cx="50"
        cy="50"
        r="38"
        stroke="url(#acs-arc)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray="202 37"
        filter="url(#acs-glow)"
      />

      {/* Arrow accent sitting in the gap, pointing up-right */}
      <path
        d="M89 29 L73 34 L79 41 Z"
        fill="url(#acs-silver)"
        stroke="url(#acs-silver)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Logo({ size = 36, to = '/', className = '' }: LogoProps) {
  const inner = (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <Mark size={size} />
      <span
        className="font-display font-extrabold uppercase tracking-[0.18em] text-transparent"
        style={{
          fontSize: size * 0.5,
          backgroundImage: 'linear-gradient(135deg,#f4f7fa 0%,#c4cedb 45%,#eef2f7 70%,#9aa6b6 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
        }}
      >
        Acesens
      </span>
    </span>
  )

  if (to === null) return inner
  return (
    <Link to={to} aria-label="Acesens home" className="inline-flex">
      {inner}
    </Link>
  )
}
