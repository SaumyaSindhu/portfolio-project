import { motion } from 'framer-motion'
import { Trophy, Cpu, Layers } from 'lucide-react'

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

const achievements = [
  {
    icon: Trophy,
    color: '#f59e0b',
    title: 'Smart India Hackathon 2025',
    subtitle: 'Pre-Finalist',
    desc: 'Qualified as a Pre-Finalist in India\'s largest national hackathon, SIH 2025, out of thousands of teams nationwide. Proposed a real-world technical solution evaluated by government panels.',
  },
  {
    icon: Cpu,
    color: '#c084fc',
    title: 'AI-Powered Applications',
    subtitle: 'Production Deployed',
    desc: 'Built and deployed VEXA — an AI chat platform leveraging LangChain, Gemini, and Mistral with streaming SSE responses, AI web search, and multi-model switching.',
  },
  {
    icon: Layers,
    color: '#2F81F7',
    title: 'Production-Ready MERN Projects',
    subtitle: '3+ Shipped',
    desc: 'Shipped multiple full-stack production applications including a marketplace with RBAC, an AI platform, and an interactive terminal portfolio — all publicly accessible on GitHub.',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" style={{ padding: '120px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div {...reveal()} style={{ marginBottom: 64, textAlign: 'center' }}>
          <p className="section-label" style={{ marginBottom: 12 }}>Highlights</p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#f0f0f0' }}>
            Achievements
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
          {achievements.map((a, i) => {
            const { icon: Icon, color, title, subtitle, desc } = a
            return (
              <motion.div
                key={title}
                {...reveal(0.1 + i * 0.1)}
                whileHover={{ y: -6 }}
                style={{
                  padding: '32px 28px', borderRadius: 20,
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  transition: 'all 0.3s ease',
                  cursor: 'default', position: 'relative', overflow: 'hidden',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `${color}35`
                  e.currentTarget.style.background = `${color}07`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                }}
              >
                <div style={{
                  position: 'absolute', top: -30, right: -30,
                  width: 120, height: 120, borderRadius: '50%',
                  background: `radial-gradient(circle, ${color}12, transparent 70%)`,
                  pointerEvents: 'none',
                }} />

                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: `${color}15`, border: `1px solid ${color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color, marginBottom: 20,
                }}>
                  <Icon size={22} />
                </div>

                <div style={{
                  display: 'inline-block', padding: '3px 10px', borderRadius: 6,
                  background: `${color}12`, border: `1px solid ${color}25`,
                  fontSize: 10, fontWeight: 700, color, letterSpacing: '0.1em',
                  textTransform: 'uppercase', marginBottom: 10,
                }}>
                  {subtitle}
                </div>

                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#f0f0f0', marginBottom: 10, lineHeight: 1.3 }}>
                  {title}
                </h3>
                <p style={{ fontSize: 13, color: '#555', lineHeight: 1.7 }}>{desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
