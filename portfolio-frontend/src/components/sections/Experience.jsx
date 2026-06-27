import { motion } from 'framer-motion'
import { Shield, Database, Zap, Brain, Server, Globe, BarChart2 } from 'lucide-react'

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

const timeline = [
  {
    icon: Globe,
    color: '#2F81F7',
    title: 'MERN Stack Development',
    period: '2024 — Present',
    desc: 'Built full-stack applications using MongoDB, Express.js, React, and Node.js. Created RESTful APIs, responsive UIs, and end-to-end features from design to deployment.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    icon: Shield,
    color: '#22c55e',
    title: 'Authentication Systems',
    period: '2024 — Present',
    desc: 'Implemented JWT-based authentication, refresh tokens, RBAC (Role-Based Access Control), and secure session management in production applications.',
    tags: ['JWT', 'RBAC', 'bcrypt', 'Sessions'],
  },
  {
    icon: Server,
    color: '#f59e0b',
    title: 'REST API Architecture',
    period: '2024 — Present',
    desc: 'Designed and built scalable REST APIs following MVC architecture, with middleware pipelines, rate limiting, error handling, and Postman testing.',
    tags: ['REST', 'MVC', 'Middleware', 'Rate Limiting'],
  },
  {
    icon: Brain,
    color: '#c084fc',
    title: 'AI Integration & LLM Engineering',
    period: '2025 — Present',
    desc: 'Integrated LangChain with Gemini and Mistral APIs to build AI agents, implement RAG pipelines, tool calling, and streaming SSE responses.',
    tags: ['LangChain', 'Gemini', 'Mistral', 'RAG', 'Tool Calling'],
  },
  {
    icon: Database,
    color: '#06b6d4',
    title: 'Database Design',
    period: '2024 — Present',
    desc: 'Designed relational and document-based schemas for MongoDB and PostgreSQL. Used Mongoose and Prisma ORMs, with Redis for caching layers.',
    tags: ['MongoDB', 'PostgreSQL', 'Redis', 'Prisma'],
  },
  {
    icon: Zap,
    color: '#f97316',
    title: 'Deployment & Performance',
    period: '2025 — Present',
    desc: 'Deployed applications on Vercel with environment configuration, CI/CD pipelines, performance optimization through code splitting, and lazy loading.',
    tags: ['Vercel', 'CI/CD', 'Code Splitting', 'Lazy Loading'],
  },
  {
    icon: BarChart2,
    color: '#ec4899',
    title: 'Real-time Systems',
    period: '2025 — Present',
    desc: 'Built real-time features using Socket.IO and Server-Sent Events (SSE) for live chat, notifications, and streaming AI responses.',
    tags: ['Socket.IO', 'SSE', 'WebSockets', 'Real-time'],
  },
]

export default function Experience() {
  return (
    <section id="experience" style={{
      padding: '120px 24px',
      background: 'rgba(255,255,255,0.01)',
      borderTop: '1px solid rgba(255,255,255,0.04)',
      borderBottom: '1px solid rgba(255,255,255,0.04)',
    }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <motion.div {...reveal()} style={{ marginBottom: 64 }}>
          <p className="section-label" style={{ marginBottom: 12 }}>Journey</p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#f0f0f0' }}>
            Building Production&#8209;Ready{' '}
            <span style={{
              background: 'linear-gradient(135deg, #2F81F7, #6366f1)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Applications
            </span>
          </h2>
          <p style={{ fontSize: 15, color: '#555', marginTop: 12, maxWidth: 480 }}>
            A self-driven developer forging production skills through real projects and applied learning.
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: 19, top: 0, bottom: 0, width: 1,
            background: 'linear-gradient(to bottom, rgba(47,129,247,0.3), rgba(47,129,247,0.05))',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {timeline.map((item, i) => {
              const { icon: Icon, color, title, period, desc, tags } = item
              return (
                <motion.div
                  key={title}
                  {...reveal(0.05 * i)}
                  style={{ display: 'flex', gap: 24, paddingLeft: 0 }}
                >
                  {/* Dot */}
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: `${color}10`,
                    border: `1px solid ${color}35`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color, flexShrink: 0, marginTop: 20,
                    position: 'relative', zIndex: 1,
                  }}>
                    <Icon size={16} />
                  </div>

                  {/* Content */}
                  <motion.div
                    whileHover={{ x: 4 }}
                    style={{
                      flex: 1, padding: '20px 24px', borderRadius: 16,
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      marginBottom: 12, transition: 'border-color 0.2s, background 0.2s',
                      cursor: 'default',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = `${color}25`; e.currentTarget.style.background = `${color}05` }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8, flexWrap: 'wrap', gap: 8 }}>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: '#f0f0f0' }}>{title}</h3>
                      <span style={{ fontSize: 11, color: '#444', fontWeight: 600, letterSpacing: '0.05em' }}>{period}</span>
                    </div>
                    <p style={{ fontSize: 13, color: '#555', lineHeight: 1.7, marginBottom: 12 }}>{desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {tags.map(tag => (
                        <span key={tag} style={{
                          fontSize: 11, fontWeight: 600, padding: '3px 9px', borderRadius: 6,
                          background: `${color}0f`, border: `1px solid ${color}25`, color,
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
