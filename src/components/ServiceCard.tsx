import { motion } from 'framer-motion'
import { fadeUp } from '../lib/motion'
import Icon from './Icon'

interface ServiceCardProps {
  icon: string
  title: string
  summary: string
  points?: string[]
}

export default function ServiceCard({ icon, title, summary, points }: ServiceCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className="card group relative h-full overflow-hidden p-7"
    >
      {/* hover glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-500/0 blur-2xl transition-all duration-500 group-hover:bg-brand-500/25" />

      <div className="relative">
        <div className="mb-5 inline-flex rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 p-3 text-accent-400 ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110">
          <Icon name={icon} className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{summary}</p>

        {points && (
          <ul className="mt-5 space-y-2">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-slate-300">
                <Icon name="check" className="h-4 w-4 flex-shrink-0 text-accent-400" />
                {p}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.article>
  )
}
