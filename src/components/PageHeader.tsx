import { motion } from 'framer-motion'
import AuroraBackground from './AuroraBackground'
import { fadeUp, staggerContainer } from '../lib/motion'

interface PageHeaderProps {
  eyebrow: string
  title: string
  subtitle: string
}

export default function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden">
      <AuroraBackground />
      <motion.div
        variants={staggerContainer(0.12, 0.05)}
        initial="hidden"
        animate="show"
        className="container-page py-20 text-center lg:py-28"
      >
        <motion.p variants={fadeUp} className="eyebrow">
          {eyebrow}
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="mx-auto mt-4 max-w-3xl font-display text-4xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-5xl"
        >
          {title}
        </motion.h1>
        <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
          {subtitle}
        </motion.p>
      </motion.div>
    </section>
  )
}
