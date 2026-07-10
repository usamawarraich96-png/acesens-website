export const company = {
  name: 'Acesens',
  tagline: 'The AI growth platform — marketing, marketplaces & automation in one.',
  description:
    'Acesens unifies marketing intelligence, marketplace automation, and custom AI agents in a single platform, so growth compounds on autopilot.',
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

export interface NavLink {
  label: string
  to: string
  children?: { label: string; to: string }[]
}

export const navLinks: NavLink[] = [
  { label: 'Home', to: '/' },
  {
    label: 'Platform',
    to: '/services',
    children: [
      { label: 'Digital Marketing', to: '/services#digital-marketing' },
      { label: 'Amazon Growth', to: '/services#amazon-growth' },
      { label: 'AI Systems', to: '/services#ai-systems' },
    ],
  },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'About Us', to: '/about' },
  { label: 'Insights', to: '/insights' },
  { label: 'Contact', to: '/contact' },
]

/** Placeholder brand marks for the hero "trusted by" row. */
export const trustedBrands = ['Meridian', 'Nordwind', 'Costa', 'Helix', 'Lumen', 'Kaizen']

/** "Interested in" and budget options for the footer contact form. */
export const interestOptions = [
  'Digital Marketing',
  'Amazon Growth',
  'AI Systems',
  'Full-service growth',
  'Not sure yet',
]
export const budgetOptions = [
  '$1k – $5k / mo',
  '$5k – $10k / mo',
  '$10k – $25k / mo',
  '$25k+ / mo',
]

export const stats = [
  { value: '2400+', label: 'Teams on the platform' },
  { value: '98.2%', label: 'Automation accuracy' },
  { value: '4.2x', label: 'Average ROAS' },
  { value: '24/7', label: 'Autonomous optimization' },
]

/** Three platform modules, each with its own capabilities. */
export const serviceCategories = [
  {
    id: 'digital-marketing',
    icon: 'megaphone',
    title: 'Digital Marketing',
    summary:
      'A full-funnel command center — search, social, and paid channels planned, launched, and optimized from one dashboard.',
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
      'Marketplace automation that watches rank, price, and PPC around the clock — protecting margin while you sleep.',
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
      'Custom AI agents and automations, built on the platform, that remove the busywork from your operations.',
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
    title: 'Connect',
    body: 'Plug in your channels, storefronts, and data sources in minutes — no code required.',
  },
  {
    step: '02',
    title: 'Configure',
    body: 'Set goals and guardrails; the platform tailors playbooks to your brand automatically.',
  },
  {
    step: '03',
    title: 'Automate',
    body: 'AI agents launch, monitor, and optimize campaigns and listings around the clock.',
  },
  {
    step: '04',
    title: 'Scale',
    body: 'Live insight and forecasts show what compounds — double down with confidence.',
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
    stat: '4.2x ROAS',
    description: 'Rebuilt the storefront and paid funnel in a single quarter.',
  },
  {
    title: 'Nordwind Supplements — Amazon Takeover',
    category: 'Amazon Growth',
    icon: 'cart',
    stat: '+210% Sales',
    description: 'Full listing overhaul and PPC restructure to top-of-category.',
  },
  {
    title: 'Costa Robotics — Support Agent',
    category: 'AI Systems',
    icon: 'chip',
    stat: '60% Tickets Automated',
    description: 'An agentic AI assistant that cut response time by 80%.',
  },
  {
    title: 'Helix Health — Local SEO Engine',
    category: 'Digital Marketing',
    icon: 'search',
    stat: '2x Local Leads',
    description: 'GMB and technical SEO across 12 clinics.',
  },
  {
    title: 'Kaizen Goods — Private Label Launch',
    category: 'Amazon Growth',
    icon: 'box',
    stat: '10-Week Payback',
    description: 'Sourcing-to-launch to profitability and 4.8-star ratings.',
  },
  {
    title: 'Lumen Labs — Ops Automation Suite',
    category: 'AI Systems',
    icon: 'flow',
    stat: '30+ Hrs Saved / wk',
    description: 'CRM-integrated automations across sales and finance.',
  },
  {
    title: 'Bloom & Co. — Social Growth',
    category: 'Digital Marketing',
    icon: 'spark',
    stat: '5x Audience',
    description: 'Organic and paid social that tripled store visits.',
  },
  {
    title: 'Apex Fitness — Mobile App',
    category: 'AI Systems',
    icon: 'dashboard',
    stat: '4.9★ App Store',
    description: 'Native iOS & Android app with AI personalization.',
  },
  {
    title: 'Costa Robotics — Ads Scale-Up',
    category: 'Digital Marketing',
    icon: 'megaphone',
    stat: '3 New Markets',
    description: 'Google Ads and LSA expansion at a target CPA.',
  },
]

/** Placeholder editorial posts for the Insights page. */
export const insights = [
  {
    tag: 'AI Systems',
    title: 'Agentic AI is eating the back office',
    excerpt: 'Where autonomous agents deliver ROI today — and where they still need a human.',
    date: 'Jun 2026',
    readTime: '6 min read',
  },
  {
    tag: 'Amazon Growth',
    title: 'The 2026 Amazon PPC playbook',
    excerpt: 'How to restructure campaigns for the new placements and protect your margin.',
    date: 'May 2026',
    readTime: '8 min read',
  },
  {
    tag: 'Digital Marketing',
    title: 'AEO: optimizing for answer engines',
    excerpt: 'Getting cited by AI answer engines is the new SEO. Here is how we approach it.',
    date: 'May 2026',
    readTime: '5 min read',
  },
  {
    tag: 'Digital Marketing',
    title: 'Creative testing at scale on Meta',
    excerpt: 'A framework for finding winning ads faster without burning budget.',
    date: 'Apr 2026',
    readTime: '7 min read',
  },
  {
    tag: 'AI Systems',
    title: 'Choosing the right model for the job',
    excerpt: 'Cost, latency, and quality trade-offs when building on modern LLMs.',
    date: 'Apr 2026',
    readTime: '6 min read',
  },
  {
    tag: 'Amazon Growth',
    title: 'Building a brand, not just a listing',
    excerpt: 'Storefronts, A+ content, and reviews that turn browsers into loyal buyers.',
    date: 'Mar 2026',
    readTime: '5 min read',
  },
]

export const milestones = [
  { year: '2019', text: 'Acesens founded as a two-person performance-marketing studio.' },
  { year: '2021', text: 'Expanded into Amazon growth after scaling our first 7-figure brand.' },
  { year: '2023', text: 'Launched our AI Systems practice to automate client operations.' },
  { year: '2025', text: 'Crossed 60 active brands and opened offices in Berlin & Singapore.' },
]
