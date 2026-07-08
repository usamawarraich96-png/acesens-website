export const company = {
  name: 'Acesens',
  tagline: 'Digital marketing, Amazon growth & AI systems — built to scale.',
  description:
    'Acesens is a growth partner that combines performance marketing, Amazon expertise, and custom AI systems to turn attention into revenue.',
  email: 'hello@acesens.com',
  phone: '+1 (415) 555-0182',
  address: '500 Harbor Way, Suite 210, San Francisco, CA 94107',
  social: [
    { label: 'LinkedIn', href: '#' },
    { label: 'X / Twitter', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'GitHub', href: '#' },
  ],
}

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
]

export const stats = [
  { value: '250+', label: 'Campaigns launched' },
  { value: '3.8x', label: 'Average ROAS' },
  { value: '120M+', label: 'Revenue influenced' },
  { value: '60+', label: 'Brands scaled' },
]

/** Three core service pillars, each with its own sub-services. */
export const serviceCategories = [
  {
    id: 'digital-marketing',
    icon: 'megaphone',
    title: 'Digital Marketing',
    summary:
      'Full-funnel demand generation that gets you found, clicked, and chosen — across search, social, and beyond.',
    items: [
      { name: 'Web Development', desc: 'Fast, conversion-focused sites and landing pages.' },
      { name: 'Web SEO', desc: 'Technical and content SEO that compounds over time.' },
      { name: 'GMB Optimization', desc: 'Google Business Profiles that win local intent.' },
      { name: 'Social Media Marketing', desc: 'Organic strategy, content, and community.' },
      { name: 'Meta Ads', desc: 'Facebook & Instagram campaigns tuned for ROAS.' },
      { name: 'Google Ads / Google LSA', desc: 'Search, PMax, and Local Services Ads.' },
      { name: 'AEO (Answer Engine Optimization)', desc: 'Get cited by AI answer engines.' },
    ],
  },
  {
    id: 'amazon-growth',
    icon: 'cart',
    title: 'Amazon Growth',
    summary:
      'End-to-end Amazon management that lifts rank, protects margin, and grows your share of the buy box.',
    items: [
      { name: 'Listing Optimization', desc: 'Copy, imagery, and A+ content that convert.' },
      { name: 'PPC Management', desc: 'Sponsored Products, Brands & Display, optimized daily.' },
      { name: 'Brand Management', desc: 'Storefronts, brand registry, and reputation.' },
      { name: 'Competitor Analysis', desc: 'Market, keyword, and pricing intelligence.' },
      { name: 'Private Label Services', desc: 'Sourcing to launch for your own brand.' },
    ],
  },
  {
    id: 'ai-systems',
    icon: 'chip',
    title: 'AI Systems',
    summary:
      'Custom AI and software that automate the busywork and put intelligence inside your operations.',
    items: [
      { name: 'Agentic AI', desc: 'Autonomous agents that complete real workflows.' },
      { name: 'AI Bots', desc: 'Chat and voice assistants for support and sales.' },
      { name: 'CRM Integration', desc: 'Connect AI to your pipeline and customer data.' },
      { name: 'AI Automations', desc: 'Wire tools together to remove manual steps.' },
      { name: 'Software Development', desc: 'Web apps, dashboards, and internal tools.' },
      { name: 'Mobile App Development', desc: 'Native-quality iOS and Android apps.' },
      { name: 'AI Customizations', desc: 'Fine-tuned models tailored to your domain.' },
    ],
  },
]

export const categoryTags = serviceCategories.map((c) => c.title)

export const steps = [
  {
    step: '01',
    title: 'Discover',
    body: 'We audit your market, funnel, and goals to find the fastest path to growth.',
  },
  {
    step: '02',
    title: 'Build',
    body: 'We design the campaigns, listings, and systems tailored to your business.',
  },
  {
    step: '03',
    title: 'Launch',
    body: 'We ship fast and instrument everything so results are visible from day one.',
  },
  {
    step: '04',
    title: 'Scale',
    body: 'We optimize relentlessly, doubling down on what works to compound returns.',
  },
]

export const values = [
  {
    title: 'Revenue over vanity',
    body: 'We optimize for pipeline and profit, not likes. Every metric ties back to the bottom line.',
  },
  {
    title: 'Built to endure',
    body: 'Our systems and campaigns are engineered to keep performing long after launch day.',
  },
  {
    title: 'Radical transparency',
    body: 'Live dashboards, plain-English reporting, and no black boxes. Your data stays yours.',
  },
  {
    title: 'Partners, not vendors',
    body: 'We win when you win. We embed with your team and treat your goals as our own.',
  },
]

export const team = [
  { name: 'Dr. Maya Okafor', role: 'Founder & CEO', initials: 'MO' },
  { name: 'Ravi Shankar', role: 'Head of AI Systems', initials: 'RS' },
  { name: 'Lena Bergström', role: 'Director, Amazon Growth', initials: 'LB' },
  { name: 'Tomás Herrera', role: 'Head of Paid Media', initials: 'TH' },
  { name: 'Aisha Rahman', role: 'Head of Design', initials: 'AR' },
  { name: 'Daniel Cho', role: 'Director of SEO', initials: 'DC' },
]

/** Reviews used in the Home page marquee (name, role, rating 1-5, quote). */
export const reviews = [
  {
    name: 'Priya Nair',
    role: 'Founder, Meridian Skincare',
    rating: 5,
    quote:
      'Acesens rebuilt our funnel and 3x’d our ROAS in a single quarter. The dashboards alone changed how we run the business.',
  },
  {
    name: 'Marcus Feldt',
    role: 'CEO, Nordwind Supplements',
    rating: 5,
    quote:
      'Our Amazon listings went from page three to top of category. PPC spend is down and profit is up.',
  },
  {
    name: 'Elena Vasquez',
    role: 'COO, Costa Robotics',
    rating: 5,
    quote:
      'The AI agent they built handles 60% of our support tickets flawlessly. It paid for itself in two months.',
  },
  {
    name: 'Julian Meyer',
    role: 'Marketing Lead, Helix Health',
    rating: 4,
    quote:
      'Sharp team, clear reporting, real results. Our cost per lead dropped by nearly half.',
  },
  {
    name: 'Sofia Marchetti',
    role: 'Owner, Bloom & Co.',
    rating: 5,
    quote:
      'They treated our budget like their own. Local search leads have never been this consistent.',
  },
  {
    name: 'David Okonkwo',
    role: 'VP Growth, Lumen Labs',
    rating: 5,
    quote:
      'From SEO to automations, Acesens is the most complete growth partner we’ve worked with.',
  },
  {
    name: 'Hana Suzuki',
    role: 'Founder, Kaizen Goods',
    rating: 5,
    quote:
      'Private label launch to profitability in ten weeks. I couldn’t have navigated Amazon without them.',
  },
  {
    name: 'Tom Bradley',
    role: 'Director, Apex Fitness',
    rating: 4,
    quote:
      'Meta and Google campaigns finally feel dialed in. Predictable, scalable, and measurable.',
  },
]

/** Placeholder portfolio projects — swap in real case studies later. */
export const projects = [
  {
    title: 'Meridian Skincare — DTC Relaunch',
    category: 'Digital Marketing',
    icon: 'megaphone',
    description:
      'Rebuilt the storefront and paid funnel, lifting ROAS from 1.4x to 4.2x in one quarter.',
  },
  {
    title: 'Nordwind Supplements — Amazon Takeover',
    category: 'Amazon Growth',
    icon: 'cart',
    description:
      'Full listing overhaul and PPC restructure drove a 3.1x sales increase and top-of-category rank.',
  },
  {
    title: 'Costa Robotics — Support Agent',
    category: 'AI Systems',
    icon: 'chip',
    description:
      'Deployed an agentic AI assistant resolving 60% of tickets and cutting response time by 80%.',
  },
  {
    title: 'Helix Health — Local SEO Engine',
    category: 'Digital Marketing',
    icon: 'search',
    description:
      'GMB and technical SEO program that doubled qualified local leads across 12 clinics.',
  },
  {
    title: 'Kaizen Goods — Private Label Launch',
    category: 'Amazon Growth',
    icon: 'box',
    description:
      'Sourcing-to-launch program that reached profitability in ten weeks and 4.8-star ratings.',
  },
  {
    title: 'Lumen Labs — Ops Automation Suite',
    category: 'AI Systems',
    icon: 'flow',
    description:
      'CRM-integrated automations that removed 30+ manual hours per week across sales and finance.',
  },
  {
    title: 'Bloom & Co. — Social Growth',
    category: 'Digital Marketing',
    icon: 'spark',
    description:
      'Organic and paid social strategy that grew the audience 5x and tripled store visits.',
  },
  {
    title: 'Apex Fitness — Mobile App',
    category: 'AI Systems',
    icon: 'dashboard',
    description:
      'Native iOS & Android app with AI workout personalization and a 4.9 App Store rating.',
  },
  {
    title: 'Costa Robotics — Ads Scale-Up',
    category: 'Digital Marketing',
    icon: 'megaphone',
    description:
      'Google Ads and LSA expansion into three new markets while holding a target CPA.',
  },
]

export const milestones = [
  { year: '2019', text: 'Acesens founded as a two-person performance-marketing studio.' },
  { year: '2021', text: 'Expanded into Amazon growth after scaling our first 7-figure brand.' },
  { year: '2023', text: 'Launched our AI Systems practice to automate client operations.' },
  { year: '2025', text: 'Crossed 60 active brands and opened offices in Berlin & Singapore.' },
]
