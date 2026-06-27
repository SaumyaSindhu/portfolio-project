import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Achievements from './components/sections/Achievements'
import Education from './components/sections/Education'
import Services from './components/sections/Services'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import LoadingScreen from './components/ui/LoadingScreen'
import ScrollProgress from './components/ui/ScrollProgress'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <BrowserRouter>
      <div className="noise">
        <AnimatePresence mode="wait">
          {loading ? (
            <LoadingScreen key="loading" />
          ) : (
            <motion.div
              key="main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <ScrollProgress />
              <Navbar />
              <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Achievements />
                <Education />
                <Services />
                <Contact />
              </main>
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </BrowserRouter>
  )
}
