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

  useEffect(() => {
    if (!inView) return

    // Only count up simple "prefix + number + suffix" values (e.g. "2400+",
    // "98.2%", "4.2x"). Values with an embedded separator like "24/7" aren't a
    // single quantity, so we render them as-is rather than animate them.
    const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(\D*)$/)
    if (!match) {
      setDisplay(value)
      return
    }

    const [, prefix, num, suffix] = match
    const target = parseFloat(num)
    const decimals = num.includes('.') ? num.split('.')[1].length : 0

    const controls = animate(0, target, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(v) {
        setDisplay(`${prefix}${v.toFixed(decimals)}${suffix}`)
      },
      // Guarantee we land exactly on the target string, never a rounded frame.
      onComplete() {
        setDisplay(`${prefix}${target.toFixed(decimals)}${suffix}`)
      },
    })
    return () => controls.stop()
  }, [inView, value])

  return (
    <motion.div ref={ref} variants={fadeUp} className="text-center">
      <div className="stat-polar text-4xl font-bold sm:text-5xl">{display}</div>
      <div className="mt-2 text-sm text-slate-400">{label}</div>
    </motion.div>
  )
}
