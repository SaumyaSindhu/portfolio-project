import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, GraduationCap, Code2, Cpu, Target } from 'lucide-react'

function reveal(delay = 0) {
  return {
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }
}

const cards = [
  {
    icon: Code2, color: '#2F81F7',
    title: 'Full Stack Development',
    desc: 'Building end-to-end applications with React, Node.js, Express, and MongoDB. From pixel-perfect UIs to robust REST APIs.',
  },
  {
    icon: Cpu, color: '#c084fc',
    title: 'AI Engineering',
    desc: 'Integrating LangChain, Gemini, and Mistral APIs to build intelligent, production-ready AI-powered features.',
  },
  {
    icon: Target, color: '#22c55e',
    title: 'Current Focus',
    desc: 'Deepening expertise in system design, distributed architectures, and building AI agents with real-world tool use.',
  },
]

export default function About() {
  return (
    <section id="about" style={{ padding: '120px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <motion.div {...reveal()} style={{ marginBottom: 64 }}>
        <p className="section-label" style={{ marginBottom: 12 }}>About</p>
        <h2 style={{
          fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800,
          letterSpacing: '-0.03em', color: '#f0f0f0', lineHeight: 1.1,
          maxWidth: 600,
        }}>
          Building software that{' '}
          <span style={{
            background: 'linear-gradient(135deg, #2F81F7, #6366f1)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            matters
          </span>
        </h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }} className="about-grid">
        {/* Left: Bio */}
        <div>
          <motion.p {...reveal(0.1)} style={{
            fontSize: 17, color: '#888', lineHeight: 1.8, marginBottom: 24
          }}>
            I'm a Full Stack Developer and B.Tech student at GGSIPU passionate about building scalable web applications and AI-powered solutions. I bridge the gap between modern design sensibilities and robust engineering.
          </motion.p>
          <motion.p {...reveal(0.2)} style={{
            fontSize: 17, color: '#666', lineHeight: 1.8, marginBottom: 32
          }}>
            I enjoy solving real-world problems with clean code, learning modern technologies, and shipping production-quality software. My current interest lies at the intersection of web development and artificial intelligence.
          </motion.p>

          <motion.div {...reveal(0.3)} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { Icon: MapPin, text: 'New Delhi, India' },
              { Icon: GraduationCap, text: 'B.Tech IoT · GGSIPU · 2024–2028' },
            ].map(({ Icon, text }) => (
              <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 8,
                  background: 'rgba(47,129,247,0.08)',
                  border: '1px solid rgba(47,129,247,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#2F81F7', flexShrink: 0,
                }}>
                  <Icon size={15} />
                </div>
                <span style={{ fontSize: 14, color: '#777' }}>{text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {cards.map((card, i) => {
            const { icon: Icon, color, title, desc } = card
            return (
              <motion.div
                key={title}
                {...reveal(0.1 + i * 0.1)}
                whileHover={{ x: 4 }}
                style={{
                  padding: '20px 22px', borderRadius: 16,
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex', gap: 16, alignItems: 'flex-start',
                  transition: 'border-color 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
              >
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: `${color}14`, border: `1px solid ${color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color, flexShrink: 0,
                }}>
                  <Icon size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: 15, fontWeight: 700, color: '#f0f0f0', marginBottom: 4 }}>
                    {title}
                  </h4>
                  <p style={{ fontSize: 13, color: '#555', lineHeight: 1.7 }}>{desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
