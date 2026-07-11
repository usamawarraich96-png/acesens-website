export interface OrbitItem {
  label: string
  icon: string
}

export interface OrbitRing {
  id: string
  label: string
  /** label anchor position around the ring */
  labelSide: 'top' | 'left' | 'right'
  color: 'blue' | 'orange'
  /** ellipse radii in px at the reference 1× scale */
  rx: number
  ry: number
  /** seconds per full revolution */
  duration: number
  direction: 1 | -1
  items: OrbitItem[]
}

/** Three concentric orbital rings, matching the reference composition. */
export const orbitRings: OrbitRing[] = [
  {
    id: 'digital-marketing',
    label: 'Digital Marketing',
    labelSide: 'top',
    color: 'blue',
    rx: 250,
    ry: 104,
    duration: 46,
    direction: 1,
    items: [
      { label: 'SEO', icon: 'search' },
      { label: 'Meta Ads', icon: 'infinity' },
      { label: 'Google Ads', icon: 'target' },
      { label: 'Social Media', icon: 'users' },
      { label: 'Content', icon: 'doc' },
      { label: 'AEO', icon: 'radar' },
    ],
  },
  {
    id: 'amazon-growth',
    label: 'Amazon Growth',
    labelSide: 'left',
    color: 'orange',
    rx: 205,
    ry: 198,
    duration: 60,
    direction: -1,
    items: [
      { label: 'PPC Management', icon: 'bars' },
      { label: 'Listing Optimization', icon: 'doc' },
      { label: 'Private Label', icon: 'box' },
      { label: 'Strategy Analysis', icon: 'pie' },
      { label: 'Brand', icon: 'spark' },
      { label: 'Analytics', icon: 'dashboard' },
    ],
  },
  {
    id: 'ai-systems',
    label: 'AI Systems & Agentic AI',
    labelSide: 'right',
    color: 'blue',
    rx: 262,
    ry: 132,
    duration: 54,
    direction: 1,
    items: [
      { label: 'Agentic AI', icon: 'robot' },
      { label: 'AI Bots', icon: 'brain' },
      { label: 'Software Dev', icon: 'code' },
      { label: 'CRM Integration', icon: 'cog' },
      { label: 'AI Customization', icon: 'phone' },
      { label: 'Voice AI', icon: 'radar' },
    ],
  },
]

export const heroFeatures = [
  { label: 'Data Driven Strategies', icon: 'bars' },
  { label: 'AI Powered Solutions', icon: 'chip' },
  { label: 'Scalable Systems', icon: 'layers' },
  { label: 'Measurable Results', icon: 'target' },
  { label: 'Long Term Partnerships', icon: 'handshake' },
]

export const heroStats = [
  { value: '25+', label: 'Countries', icon: 'globe' },
  { value: '150+', label: 'Projects Delivered', icon: 'layers' },
]
