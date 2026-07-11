import { motion } from 'framer-motion'
import Icon from '../Icon'
import { heroFeatures } from './heroData'

/** Bottom floating glass panel with the five value props. */
export default function FeaturesBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="glass sweep mx-auto flex w-full max-w-4xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-8 py-5"
    >
      {heroFeatures.map((f, i) => (
        <div key={f.label} className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-brand-300">
            <Icon name={f.icon} className="h-4 w-4" />
          </span>
          <span className="text-sm font-medium text-slate-200">{f.label}</span>
          {i < heroFeatures.length - 1 && (
            <span className="ml-4 hidden h-8 w-px bg-white/10 lg:block" />
          )}
        </div>
      ))}
    </motion.div>
  )
}
