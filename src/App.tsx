import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import CaseStudies from './pages/CaseStudies'
import Insights from './pages/Insights'
import Contact from './pages/Contact'

/** Lenis weighted smooth-scroll, disabled under prefers-reduced-motion. */
function useSmoothScroll() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true })
    let raf = 0
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    ;(window as unknown as { __lenis?: Lenis }).__lenis = lenis
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])

  // Reset scroll on route change (unless navigating to a hash anchor).
  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: Lenis }).__lenis
    if (!hash && lenis) lenis.scrollTo(0, { immediate: true })
  }, [pathname, hash])
}

export default function App() {
  const location = useLocation()
  useSmoothScroll()

  const isHome = location.pathname === '/'

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className={`flex-1 ${isHome ? '' : 'pt-20'}`}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  )
}
