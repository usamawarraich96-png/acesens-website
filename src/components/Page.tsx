import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useEffect } from 'react'

interface PageProps {
  children: ReactNode
}

/** Wraps each route in an enter/exit transition and resets scroll on mount. */
export default function Page({ children }: PageProps) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
