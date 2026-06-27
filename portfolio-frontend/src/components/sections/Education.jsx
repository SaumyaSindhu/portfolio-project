import { motion } from 'framer-motion'
import { GraduationCap, Star, Calendar, MapPin } from 'lucide-react'

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Education() {
  return (
    <section id="education" style={{
      padding: '120px 24px',
      background: 'rgba(255,255,255,0.01)',
      borderTop: '1px solid rgba(255,255,255,0.04)',
      borderBottom: '1px solid rgba(255,255,255,0.04)',
    }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <motion.div {...reveal()} style={{ marginBottom: 48 }}>
          <p className="section-label" style={{ marginBottom: 12 }}>Background</p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#f0f0f0' }}>
            Education
          </h2>
        </motion.div>

        <motion.div
          {...reveal(0.1)}
          style={{
            padding: '36px 40px', borderRadius: 24,
            background: 'rgba(47,129,247,0.04)',
            border: '1px solid rgba(47,129,247,0.15)',
            display: 'flex', gap: 32, alignItems: 'flex-start',
            position: 'relative', overflow: 'hidden',
          }}
          className="edu-card"
        >
          {/* Background glow */}
          <div style={{
            position: 'absolute', top: -60, right: -60,
            width: 240, height: 240, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(47,129,247,0.08), transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div style={{
            width: 60, height: 60, borderRadius: 16,
            background: 'rgba(47,129,247,0.12)',
            border: '1px solid rgba(47,129,247,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#2F81F7', flexShrink: 0,
          }}>
            <GraduationCap size={26} />
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 8 }}>
              <div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: '#f0f0f0', marginBottom: 4 }}>
                  Guru Gobind Singh Indraprastha University
                </h3>
                <p style={{ fontSize: 14, color: '#666' }}>
                  B.Tech in Internet of Things (IoT)
                </p>
              </div>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '6px 14px', borderRadius: 100,
                background: 'rgba(251,191,36,0.1)',
                border: '1px solid rgba(251,191,36,0.3)',
              }}>
                <Star size={12} color="#fbbf24" fill="#fbbf24" />
                <span style={{ fontSize: 13, fontWeight: 800, color: '#fbbf24' }}>CGPA 8.02</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginTop: 16 }}>
              {[
                { Icon: Calendar, text: '2024 — 2028' },
                { Icon: MapPin, text: 'New Delhi, India' },
              ].map(({ Icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Icon size={13} color="#555" />
                  <span style={{ fontSize: 13, color: '#555' }}>{text}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <p style={{ fontSize: 13, color: '#555', lineHeight: 1.7 }}>
                Studying Internet of Things with a strong focus on software engineering, distributed systems, and AI integration. Complementing formal education with hands-on project development and open-source contributions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .edu-card { flex-direction: column !important; gap: 20px !important; padding: 24px !important; }
        }
      `}</style>
    </section>
  )
}
