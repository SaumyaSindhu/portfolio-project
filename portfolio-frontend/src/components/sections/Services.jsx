import { motion } from 'framer-motion'
import { Monitor, Code2, Server, Shield, Brain, Database, Zap, Globe } from 'lucide-react'

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

const services = [
  { icon: Monitor, color: '#2F81F7', title: 'Full Stack Development', desc: 'End-to-end MERN stack applications with clean architecture, scalable APIs, and polished UIs.' },
  { icon: Code2, color: '#61dafb', title: 'React Development', desc: 'Component-driven UIs with React, state management, animations, and performance optimization.' },
  { icon: Server, color: '#68a063', title: 'Backend APIs', desc: 'RESTful APIs built with Node.js and Express with proper error handling, middleware, and documentation.' },
  { icon: Shield, color: '#22c55e', title: 'Authentication Systems', desc: 'Secure JWT-based auth, RBAC, OAuth integration, and session management.' },
  { icon: Brain, color: '#c084fc', title: 'AI Integration', desc: 'LLM-powered features with LangChain, Gemini, Mistral, streaming responses, and RAG pipelines.' },
  { icon: Database, color: '#47a248', title: 'Database Design', desc: 'Schema design for MongoDB and PostgreSQL, ORMs, indexing strategies, and Redis caching.' },
  { icon: Zap, color: '#f59e0b', title: 'Performance Optimization', desc: 'Code splitting, lazy loading, image optimization, bundle analysis, and Core Web Vitals.' },
  { icon: Globe, color: '#06b6d4', title: 'Deployment', desc: 'CI/CD pipelines, Vercel deployments, environment configuration, and production monitoring.' },
]

export default function Services() {
  return (
    <section id="services" style={{ padding: '120px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div {...reveal()} style={{ marginBottom: 64, textAlign: 'center' }}>
          <p className="section-label" style={{ marginBottom: 12 }}>What I Do</p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#f0f0f0' }}>
            Services
          </h2>
          <p style={{ fontSize: 16, color: '#555', marginTop: 12, maxWidth: 400, margin: '12px auto 0' }}>
            Delivering quality at every layer of the stack.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: 16,
        }}>
          {services.map((s, i) => {
            const { icon: Icon, color, title, desc } = s
            return (
              <motion.div
                key={title}
                {...reveal(0.05 * i)}
                whileHover={{ y: -4 }}
                style={{
                  padding: '24px 22px', borderRadius: 16,
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  transition: 'all 0.25s ease',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `${color}30`
                  e.currentTarget.style.background = `${color}07`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: `${color}14`, border: `1px solid ${color}28`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color, marginBottom: 16,
                }}>
                  <Icon size={20} />
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#f0f0f0', marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: 13, color: '#555', lineHeight: 1.65 }}>{desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
