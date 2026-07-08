import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface PageProps {
  children: ReactNode
}

/**
 * Wraps each route in an enter/exit transition. Scrolls to the hash target if
 * present (e.g. /services#ai-systems), otherwise resets to the top on mount.
 */
export default function Page({ children }: PageProps) {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Wait a frame so the target section is mounted before scrolling.
      const id = hash.slice(1)
      requestAnimationFrame(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        else window.scrollTo(0, 0)
      })
    } else {
      window.scrollTo(0, 0)
    }
  }, [hash])

  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  )
}
