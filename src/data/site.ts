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
    label: 'Services',
    to: '/services',
    children: [
      { label: 'Digital Marketing', to: '/services#digital-marketing' },
      { label: 'Amazon Growth', to: '/services#amazon-growth' },
      { label: 'AI Systems', to: '/services#ai-systems' },
    ],
  },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Insights', to: '/insights' },
  { label: 'About Us', to: '/about' },
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

export interface BlogSection {
  heading: string
  body: string
}

export interface BlogPost {
  slug: string
  tag: string
  icon: string
  title: string
  excerpt: string
  date: string
  readTime: string
  /** Comma-free keyword phrases woven into the copy for SEO. */
  keywords: string[]
  intro: string
  sections: BlogSection[]
  takeaway: string
}

/**
 * Three long-form, SEO-optimized blog articles for the Insights page. Copy is
 * written around Acesens' target keywords (AI marketing automation, Amazon PPC
 * management, agentic AI for business) with descriptive headings so search and
 * answer engines can index the full content on the page.
 */
export const blogPosts: BlogPost[] = [
  {
    slug: 'ai-marketing-automation-guide',
    tag: 'Digital Marketing',
    icon: 'megaphone',
    title: 'AI Marketing Automation in 2026: A Practical Growth Guide',
    excerpt:
      'How AI marketing automation compounds ROAS across SEO, paid ads, and content — and the workflow Acesens uses to launch it in days, not quarters.',
    date: 'Jul 2026',
    readTime: '7 min read',
    keywords: [
      'AI marketing automation',
      'digital marketing agency',
      'marketing ROAS',
      'SEO and paid ads automation',
    ],
    intro:
      'AI marketing automation has moved from buzzword to budget line. For growth-stage brands, the question is no longer whether to automate marketing, but which workflows to hand to AI first. This guide breaks down where AI marketing automation delivers measurable ROAS today — across search, social, and paid media — and how our team at Acesens rolls it out on a single platform.',
    sections: [
      {
        heading: 'What AI marketing automation actually replaces',
        body: 'Effective AI marketing automation does not replace strategy — it removes the manual busywork that slows it down. Campaign build-outs, keyword clustering, ad-copy variants, bid adjustments, and reporting are all repetitive, data-heavy tasks that AI agents complete faster and more consistently than a human team. The result is a digital marketing engine that runs 24/7 while your strategists focus on offers, positioning, and creative direction.',
      },
      {
        heading: 'Where the ROAS actually comes from',
        body: 'The highest-return automations we deploy are creative testing at scale on Meta and Google, real-time budget pacing across channels, and technical SEO monitoring that catches ranking drops before they cost traffic. Each of these compounds: better creative lowers cost per acquisition, smarter pacing protects margin, and continuous SEO keeps organic acquisition cheap. Together they routinely lift blended ROAS by 2–4x within a quarter.',
      },
      {
        heading: 'The Acesens rollout: connect, configure, automate',
        body: 'We connect your ad accounts, storefronts, and analytics in minutes, configure goals and guardrails so the platform never overspends, then let AI agents launch and optimize. Every decision is logged in a plain-English dashboard, so a digital marketing agency partnership with Acesens stays transparent — no black boxes, no guesswork, just a growth system you can audit any time.',
      },
    ],
    takeaway:
      'Start by automating one high-frequency workflow — creative testing or budget pacing — prove the ROAS, then expand. AI marketing automation rewards momentum, and a single platform keeps the data compounding.',
  },
  {
    slug: 'amazon-ppc-management-2026',
    tag: 'Amazon Growth',
    icon: 'cart',
    title: 'Amazon PPC Management: Protect Margin and Win the Buy Box in 2026',
    excerpt:
      'A modern Amazon PPC management playbook: campaign structure, bid automation, and listing optimization that grows rank while protecting margin.',
    date: 'Jun 2026',
    readTime: '8 min read',
    keywords: [
      'Amazon PPC management',
      'Amazon listing optimization',
      'Amazon agency',
      'Sponsored Products strategy',
    ],
    intro:
      'Amazon PPC management is where marketplace margin is won or lost. With ad costs rising and placements multiplying, sellers need a campaign structure that scales spend without eroding profit. Here is the Amazon PPC management framework our Amazon growth team uses to move brands to the top of category while keeping ACoS under control.',
    sections: [
      {
        heading: 'Structure campaigns around intent, not products',
        body: 'The most common Amazon PPC mistake is one campaign per product. Instead, we separate exact-match harvesting from broad discovery, isolate branded defense, and give each a distinct budget. This structure makes Amazon PPC management legible: you can see exactly which keywords convert, cut the ones that waste spend, and pour budget into Sponsored Products terms that drive both rank and revenue.',
      },
      {
        heading: 'Automate bids, but govern them',
        body: 'Automated bidding is essential at scale, but unguarded automation burns budget. We set target ACoS by campaign role, cap bids on discovery terms, and let AI adjust hourly against real conversion data. Combined with dayparting, this protects margin during low-intent hours and leans in when buyers are ready — the core of profitable Amazon PPC management.',
      },
      {
        heading: 'PPC and listing optimization are one system',
        body: 'Traffic converts only when the listing earns it. Amazon listing optimization — keyword-rich titles, benefit-led bullets, A+ content, and strong review velocity — raises conversion rate, which lowers ACoS and improves organic rank. That is why an effective Amazon agency treats PPC and listing optimization as a single loop rather than separate services.',
      },
    ],
    takeaway:
      'Great Amazon PPC management is structural: clean campaign roles, governed automation, and listings built to convert. Fix the structure first and the margin follows.',
  },
  {
    slug: 'agentic-ai-for-business',
    tag: 'AI Systems',
    icon: 'chip',
    title: 'Agentic AI for Business: Where Autonomous Agents Deliver ROI Today',
    excerpt:
      'Agentic AI for business is past the demo phase. Here are the automations delivering ROI now — support, operations, and sales — and how to deploy them safely.',
    date: 'May 2026',
    readTime: '6 min read',
    keywords: [
      'agentic AI for business',
      'AI automation systems',
      'custom AI agents',
      'business process automation',
    ],
    intro:
      'Agentic AI for business has crossed the line from impressive demo to dependable coworker. Autonomous agents now handle real, end-to-end workflows — not just answering questions, but completing tasks. This article covers where custom AI agents deliver ROI today, and how we build AI automation systems that are safe to put in front of customers and revenue.',
    sections: [
      {
        heading: 'Start where volume meets rules',
        body: 'The best first deployments for agentic AI for business are high-volume, rule-bound workflows: tier-one support, order status and returns, lead qualification, and data entry between systems. These tasks are repetitive enough to justify automation and structured enough for an agent to handle reliably. Our clients routinely automate 50–70% of support tickets with custom AI agents while improving response time.',
      },
      {
        heading: 'Keep a human in the loop where stakes are high',
        body: 'Autonomy is a dial, not a switch. For refunds above a threshold, contract changes, or anything touching compliance, we design AI automation systems that draft the action and route it for one-click human approval. This keeps speed high and risk low — the practical middle ground that makes agentic AI for business safe to scale.',
      },
      {
        heading: 'Integrate with the tools you already run',
        body: 'ROI comes from connection, not novelty. We wire custom AI agents into your CRM, helpdesk, and internal databases so they act on real data and write results back where your team already works. Well-integrated business process automation removes the copy-paste tax across departments and frees your people for the work that actually needs judgment.',
      },
    ],
    takeaway:
      'Deploy agentic AI for business where volume and clear rules overlap, keep humans on the high-stakes decisions, and integrate deeply. That is where autonomous agents pay for themselves fastest.',
  },
]

/**
 * FAQ entries rendered below the blog articles. Written in question/answer form
 * so they can be indexed as an FAQ rich result (FAQPage JSON-LD is emitted on
 * the Insights page).
 */
export const faqs = [
  {
    q: 'What does Acesens do?',
    a: 'Acesens is an AI growth platform and agency that unifies digital marketing, Amazon growth, and custom AI systems. We plan, launch, and automate campaigns, marketplace listings, and business workflows from a single platform so growth compounds on autopilot.',
  },
  {
    q: 'How is AI marketing automation different from a traditional agency?',
    a: 'A traditional agency runs campaigns manually and bills for hours. Acesens pairs a senior strategy team with AI marketing automation that optimizes bids, creative, and reporting 24/7. You get the judgment of experts plus the speed and consistency of automation, with a transparent dashboard showing every decision.',
  },
  {
    q: 'Can you improve our Amazon PPC and rankings?',
    a: 'Yes. Our Amazon PPC management restructures campaigns around search intent, governs automated bids to protect margin, and pairs paid spend with listing optimization — keyword-rich titles, A+ content, and review velocity — to lift both conversion rate and organic rank.',
  },
  {
    q: 'Is agentic AI safe to put in front of customers?',
    a: 'When deployed correctly, yes. We start with high-volume, rule-bound workflows like tier-one support and keep a human in the loop for high-stakes actions such as large refunds or compliance-sensitive decisions. Autonomy is tuned to each task so speed stays high and risk stays low.',
  },
  {
    q: 'How quickly can we get started?',
    a: 'Most brands connect their channels and go live within days. Onboarding is measured in minutes, and results typically begin compounding within the first few weeks as the platform learns your data.',
  },
]

export const milestones = [
  { year: '2019', text: 'Acesens founded as a two-person performance-marketing studio.' },
  { year: '2021', text: 'Expanded into Amazon growth after scaling our first 7-figure brand.' },
  { year: '2023', text: 'Launched our AI Systems practice to automate client operations.' },
  { year: '2025', text: 'Crossed 60 active brands and opened offices in Berlin & Singapore.' },
]
