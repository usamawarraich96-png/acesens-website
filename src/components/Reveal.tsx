import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeUp, revealViewport } from '../lib/motion'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  /** Set to false to render inline (span) instead of a block div. */
  as?: 'div' | 'span' | 'li'
}

/**
 * Scroll-reveal wrapper. Fades and slides its children up the first time
 * they enter the viewport. Respects prefers-reduced-motion via CSS.
 */
export default function Reveal({ children, className, delay = 0, as = 'div' }: RevealProps) {
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  )
}
