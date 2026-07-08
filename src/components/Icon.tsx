interface IconProps {
  name: string
  className?: string
}

const paths: Record<string, JSX.Element> = {
  radar: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 12l6-3" />
      <circle cx="12" cy="12" r="3.5" />
    </>
  ),
  brain: (
    <>
      <path d="M9 3a3 3 0 0 0-3 3 3 3 0 0 0-1 5.8A3 3 0 0 0 8 17a3 3 0 0 0 4 2 3 3 0 0 0 4-2 3 3 0 0 0 3-5.2A3 3 0 0 0 18 6a3 3 0 0 0-3-3 3 3 0 0 0-3 1.5A3 3 0 0 0 9 3Z" />
      <path d="M12 4.5v14.5" />
    </>
  ),
  flow: (
    <>
      <circle cx="5" cy="6" r="2" />
      <circle cx="19" cy="6" r="2" />
      <circle cx="12" cy="18" r="2" />
      <path d="M5 8v3a3 3 0 0 0 3 3h1m10-6v3a3 3 0 0 1-3 3h-1" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  dashboard: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 15l3-3 2 2 4-5" />
    </>
  ),
  cog: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3m0 14v3M2 12h3m14 0h3M5 5l2 2m10 10l2 2M5 19l2-2m10-10l2-2" />
    </>
  ),
  arrow: <path d="M5 12h14m-6-6l6 6-6 6" />,
  check: <path d="M5 13l4 4L19 7" />,
  megaphone: (
    <>
      <path d="M4 10v4a1 1 0 0 0 1 1h2l9 4V5L7 9H5a1 1 0 0 0-1 1Z" />
      <path d="M16 8a4 4 0 0 1 0 8" />
      <path d="M7 15v3a1 1 0 0 0 1 1h1" />
    </>
  ),
  cart: (
    <>
      <circle cx="9" cy="20" r="1.2" />
      <circle cx="18" cy="20" r="1.2" />
      <path d="M3 4h2l2.2 11a1 1 0 0 0 1 .8h8.4a1 1 0 0 0 1-.8L20 8H6" />
    </>
  ),
  chip: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M10 10h4v4h-4z" />
      <path d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </>
  ),
  box: (
    <>
      <path d="M3 7l9-4 9 4-9 4-9-4Z" />
      <path d="M3 7v10l9 4 9-4V7" />
      <path d="M12 11v10" />
    </>
  ),
  star: <path d="M12 3.5l2.6 5.5 6 .8-4.4 4.1 1.1 5.9L12 17l-5.3 2.8 1.1-5.9L3.4 9.8l6-.8L12 3.5Z" />,
  quote: (
    <path d="M7 7H4v6h3c0 2-1 3-3 3v2c3.3 0 5-2 5-5V7Zm10 0h-3v6h3c0 2-1 3-3 3v2c3.3 0 5-2 5-5V7Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </>
  ),
  phone: (
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L20 13l1 4v3a1 1 0 0 1-1 1A17 17 0 0 1 3 6a1 1 0 0 1 1-1Z" />
  ),
  pin: (
    <>
      <path d="M12 21c4-4 7-7.5 7-11a7 7 0 1 0-14 0c0 3.5 3 7 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  spark: <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2Z" />,
}

export default function Icon({ name, className = 'h-6 w-6' }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] ?? paths.spark}
    </svg>
  )
}
