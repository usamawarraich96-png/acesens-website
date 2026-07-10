import { useState } from 'react'
import { Link } from 'react-router-dom'

interface LogoProps {
  /** Rendered height of the logo in pixels. */
  size?: number
  /** Render as a link to home (navbar) or a plain block (footer). */
  to?: string | null
  className?: string
}

/**
 * Acesens brand logo — the triangular A/S mark with stacked wordmark,
 * served from `public/acesens-logo.png` (cropped, background keyed to
 * transparent, silver brightened for dark canvases). A soft blue glow
 * makes it read prominently against the navy background. Falls back to a
 * simplified inline-SVG triangle if the file is ever missing.
 */
function SvgFallback({ size }: { size: number }) {
  return (
    <span className="flex flex-col items-center" style={{ height: size }}>
      <svg viewBox="0 0 100 74" style={{ height: size * 0.68 }} fill="none" aria-hidden>
        <defs>
          <linearGradient id="acs-tri" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="1" stopColor="#aab7c9" />
          </linearGradient>
        </defs>
        <g stroke="url(#acs-tri)" strokeWidth="9" strokeLinecap="square" fill="none">
          <path d="M31 62 L50 8 L69 40 L44 62 H74" />
          <path d="M12 62 L26 40" />
          <path d="M88 62 L74 40" />
        </g>
      </svg>
      <span
        className="font-display font-bold tracking-[0.28em] text-slate-100"
        style={{ fontSize: size * 0.24 }}
      >
        ACESENS
      </span>
    </span>
  )
}

export default function Logo({ size = 48, to = '/', className = '' }: LogoProps) {
  const [imgFailed, setImgFailed] = useState(false)

  const inner = imgFailed ? (
    <SvgFallback size={size} />
  ) : (
    <img
      src="/acesens-logo.png"
      alt="Acesens"
      style={{
        height: size,
        width: 'auto',
        filter: 'drop-shadow(0 0 14px rgba(79,125,247,0.35))',
      }}
      className="select-none"
      onError={() => setImgFailed(true)}
    />
  )

  const wrapped = <span className={`inline-flex items-center ${className}`}>{inner}</span>

  if (to === null) return wrapped
  return (
    <Link to={to} aria-label="Acesens home" className="inline-flex">
      {wrapped}
    </Link>
  )
}
