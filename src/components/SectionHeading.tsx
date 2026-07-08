import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Icon from './Icon'
import { fadeUp, revealViewport, staggerContainer } from '../lib/motion'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  /** Optional right-aligned "View all →" link (forces left alignment). */
  link?: { label: string; to: string }
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  link,
}: SectionHeadingProps) {
  const left = align === 'left' || !!link

  const block = (
    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
      className={`max-w-2xl ${left ? 'text-left' : 'mx-auto text-center'}`}
    >
      {eyebrow && (
        <motion.p variants={fadeUp} className="eyebrow">
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        variants={fadeUp}
        className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p variants={fadeUp} className="mt-3 text-lg text-slate-400">
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )

  if (!link) return block

  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      {block}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={revealViewport}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link to={link.to} className="view-all group">
          {link.label}
          <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </div>
  )
}
