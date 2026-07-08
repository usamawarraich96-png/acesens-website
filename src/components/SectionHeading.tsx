import { motion } from 'framer-motion'
import { fadeUp, revealViewport, staggerContainer } from '../lib/motion'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}
    >
      {eyebrow && (
        <motion.p variants={fadeUp} className="eyebrow mb-3">
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        variants={fadeUp}
        className="font-display text-3xl font-bold uppercase leading-tight tracking-wide text-white sm:text-4xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p variants={fadeUp} className="mt-4 text-lg text-slate-400">
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
