import { animate, motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { fadeUp } from '../lib/motion'

interface StatItemProps {
  value: string
  label: string
}

/**
 * Renders a stat and, when it scrolls into view, counts the numeric portion
 * up from zero while preserving any prefix/suffix (e.g. "99.98%", "12M+").
 */
export default function StatItem({ value, label }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [display, setDisplay] = useState(value)

  const match = value.match(/^([^\d]*)([\d.]+)(.*)$/)

  useEffect(() => {
    if (!inView || !match) return
    const [, prefix, num, suffix] = match
    const target = parseFloat(num)
    const decimals = num.includes('.') ? num.split('.')[1].length : 0
    const controls = animate(0, target, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(v) {
        setDisplay(`${prefix}${v.toFixed(decimals)}${suffix}`)
      },
    })
    return () => controls.stop()
  }, [inView, match])

  return (
    <motion.div ref={ref} variants={fadeUp} className="text-center">
      <div className="gradient-text text-4xl font-bold sm:text-5xl">{display}</div>
      <div className="mt-2 text-sm text-slate-400">{label}</div>
    </motion.div>
  )
}
