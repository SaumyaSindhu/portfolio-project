import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: '0 24px',
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(8,8,8,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}
    >
      <nav style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 64
      }}>
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none' }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: 'linear-gradient(135deg, #2F81F7, #6366f1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 17, fontWeight: 800, color: '#fff',
            boxShadow: '0 0 20px rgba(47,129,247,0.3)'
          }}>
            S
          </div>
        </a>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}
             className="hidden-mobile">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: '#888', fontSize: 14, fontWeight: 500,
                padding: '6px 14px', borderRadius: 8,
                textDecoration: 'none', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.target.style.color = '#f0f0f0'; e.target.style.background = 'rgba(255,255,255,0.05)' }}
              onMouseLeave={e => { e.target.style.color = '#888'; e.target.style.background = 'transparent' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              marginLeft: 8,
              background: 'rgba(47,129,247,0.15)',
              border: '1px solid rgba(47,129,247,0.3)',
              color: '#2F81F7', fontSize: 14, fontWeight: 600,
              padding: '7px 18px', borderRadius: 8,
              textDecoration: 'none', transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.target.style.background = '#2F81F7'; e.target.style.color = '#fff' }}
            onMouseLeave={e => { e.target.style.background = 'rgba(47,129,247,0.15)'; e.target.style.color = '#2F81F7' }}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="mobile-only"
          style={{
            background: 'none', border: 'none', color: '#f0f0f0',
            cursor: 'pointer', padding: 8
          }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: 'rgba(12,12,12,0.98)', borderTop: '1px solid rgba(255,255,255,0.06)',
              overflow: 'hidden'
            }}
          >
            <div style={{ padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 4 }}>
              {links.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  style={{
                    color: '#888', fontSize: 15, fontWeight: 500,
                    padding: '10px 0', textDecoration: 'none',
                    borderBottom: '1px solid rgba(255,255,255,0.04)'
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .mobile-only { display: block !important; }
        }
        @media (min-width: 769px) {
          .hidden-mobile { display: flex !important; }
          .mobile-only { display: none !important; }
        }
      `}</style>
    </motion.header>
  )
}
