import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { navLinks } from '../data/site'
import type { NavLink as NavLinkType } from '../data/site'
import Icon from './Icon'
import Logo from './Logo'

function DesktopItem({ link }: { link: NavLinkType }) {
  const [hover, setHover] = useState(false)
  const hasChildren = !!link.children?.length

  return (
    <li
      className="relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <NavLink
        to={link.to}
        className={({ isActive }) =>
          `relative flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors ${
            isActive ? 'text-white' : 'text-slate-300 hover:text-white'
          }`
        }
      >
        {({ isActive }) => (
          <>
            {link.label}
            {hasChildren && (
              <Icon
                name="chevron"
                className={`h-3.5 w-3.5 transition-transform ${hover ? 'rotate-180' : ''}`}
              />
            )}
            {isActive && (
              <motion.span
                layoutId="nav-active"
                className="absolute inset-0 -z-10 rounded-full bg-white/10"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </>
        )}
      </NavLink>

      {hasChildren && (
        <AnimatePresence>
          {hover && (
            <motion.ul
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.18 }}
              className="absolute left-0 top-full w-56 pt-2"
            >
              <div className="glass overflow-hidden p-2">
                {link.children!.map((child) => (
                  <NavLink
                    key={child.to}
                    to={child.to}
                    className="block rounded-lg px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-brand-400/10 hover:text-white"
                  >
                    {child.label}
                  </NavLink>
                ))}
              </div>
            </motion.ul>
          )}
        </AnimatePresence>
      )}
    </li>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()
  const location = useLocation()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 12)
  })

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'border-b border-brand-400/15 bg-ink-950/85 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="container-page flex h-20 items-center justify-between gap-4">
          <Logo size={54} />

          <ul className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => (
              <DesktopItem key={link.to} link={link} />
            ))}
          </ul>

          <div className="hidden lg:block">
            <Link to="/contact" className="btn-primary !px-5 !py-2.5">
              Get Started
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand-400/20 text-white lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <div className="relative h-4 w-5">
              <motion.span
                animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="absolute left-0 top-0 h-0.5 w-5 bg-white"
              />
              <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                className="absolute left-0 top-[7px] h-0.5 w-5 bg-white"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="absolute left-0 top-[14px] h-0.5 w-5 bg-white"
              />
            </div>
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-brand-400/15 bg-ink-950/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="container-page flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                        isActive ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                  {link.children && (
                    <ul className="ml-3 border-l border-white/10 pl-3">
                      {link.children.map((child) => (
                        <li key={child.to}>
                          <NavLink
                            to={child.to}
                            className="block rounded-lg px-4 py-2 text-sm text-slate-400 transition-colors hover:text-white"
                          >
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="pt-2">
                <Link to="/contact" className="btn-primary w-full">
                  Get Started
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
