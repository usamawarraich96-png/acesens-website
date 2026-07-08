import { useState } from 'react'
import { Link } from 'react-router-dom'

interface LogoProps {
  /** Height of the logo in pixels. */
  size?: number
  /** Render as a link to home (navbar) or a plain block (footer). */
  to?: string | null
  className?: string
}

/**
 * Acesens logo. Prefers the real raster at `public/acesens-logo.png`; if that
 * file is missing it gracefully falls back to a scalable inline-SVG
 * recreation (blue glowing arc + arrow accent + light-silver wordmark) so the
 * header never renders a broken image. Drop the PNG into `public/` to use it.
 */
function SvgMark({ size }: { size: number }) {
  return (
    <span className="flex items-center gap-2.5">
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
            <stop offset="0" stopColor="#3B82F6" />
            <stop offset="1" stopColor="#4FA3F5" />
          </linearGradient>
          <linearGradient id="acs-silver" x1="70" y1="24" x2="90" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#f2f5f9" />
            <stop offset="0.55" stopColor="#c2ccd8" />
            <stop offset="1" stopColor="#8f9bab" />
          </linearGradient>
          <filter id="acs-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="2.2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
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
        <path
          d="M89 29 L73 34 L79 41 Z"
          fill="url(#acs-silver)"
          stroke="url(#acs-silver)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className="font-display font-bold uppercase leading-none tracking-[0.18em] text-slate-100"
        style={{
          fontSize: size * 0.5,
          backgroundImage: 'linear-gradient(180deg,#ffffff 0%,#d3dcea 60%,#aab7c9 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Acesens
      </span>
    </span>
  )
}

export default function Logo({ size = 34, to = '/', className = '' }: LogoProps) {
  const [imgFailed, setImgFailed] = useState(false)

  const inner = imgFailed ? (
    <SvgMark size={size} />
  ) : (
    <img
      src="/acesens-logo.png"
      alt="Acesens"
      style={{ height: size * 1.15, width: 'auto' }}
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
