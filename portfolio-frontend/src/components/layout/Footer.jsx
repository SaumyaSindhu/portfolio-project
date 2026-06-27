import { motion } from 'framer-motion'
import { Mail, ArrowUp, Download, ExternalLink } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer style={{
      padding: '48px 24px 32px',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      background: 'rgba(0,0,0,0.3)',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24, marginBottom: 40 }}>
          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 10,
              background: 'linear-gradient(135deg, #2F81F7, #6366f1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 16, fontWeight: 800, color: '#fff',
            }}>
              S
            </div>
            <div>
              <p style={{ fontSize: 15, fontWeight: 700, color: '#f0f0f0' }}>Saumya Sindhu</p>
              <p style={{ fontSize: 12, color: '#444' }}>Full Stack Developer · AI Engineer</p>
            </div>
          </div>

          {/* Social + CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {[
              { Icon: GithubIcon, href: 'https://github.com/SaumyaSindhu', label: 'GitHub' },
              { Icon: LinkedinIcon, href: 'https://www.linkedin.com/in/saumya-sindhu-7078a4332', label: 'LinkedIn' },
              { Icon: Mail, href: 'mailto:saumyasindhu75@gmail.com', label: 'Email' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  width: 38, height: 38, borderRadius: 10,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#555', textDecoration: 'none', transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = '#f0f0f0'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#555'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
              >
                <Icon size={16} />
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '9px 16px', borderRadius: 10,
                background: 'rgba(47,129,247,0.1)',
                border: '1px solid rgba(47,129,247,0.25)',
                color: '#2F81F7', fontSize: 13, fontWeight: 600,
                textDecoration: 'none', transition: 'all 0.2s',
                marginLeft: 8,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#2F81F7'; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(47,129,247,0.1)'; e.currentTarget.style.color = '#2F81F7' }}
            >
              <Download size={13} /> Resume
            </a>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                width: 38, height: 38, borderRadius: 10,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#555', cursor: 'pointer', transition: 'all 0.2s',
                marginLeft: 8,
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#f0f0f0'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#555'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>

        {/* Nav links */}
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginBottom: 32, borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 24 }}>
          {['About', 'Skills', 'Projects', 'Experience', 'Education', 'Services', 'Contact'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{ fontSize: 13, color: '#444', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#888'}
              onMouseLeave={e => e.target.style.color = '#444'}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 12, color: '#333' }}>
            © {new Date().getFullYear()} Saumya Sindhu. Built with React &amp; Framer Motion.
          </p>
          <p style={{ fontSize: 12, color: '#333' }}>
            New Delhi, India
          </p>
        </div>
      </div>
    </footer>
  )
}
