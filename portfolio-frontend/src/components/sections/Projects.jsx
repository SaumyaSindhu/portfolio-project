import { motion } from 'framer-motion'
import { ExternalLink, ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '../ui/SocialIcons'
import { useState } from 'react'

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

const projects = [
  {
    id: 1,
    name: 'VEXA',
    tagline: 'AI Chat Platform',
    description:
      'A production-ready AI chat platform with real-time streaming, multi-model support (Gemini & Mistral), and AI-powered web search capabilities. Built with JWT auth and SSE streaming for a seamless chat experience.',
    tags: ['JWT Auth', 'SSE Streaming', 'LangChain', 'Gemini', 'Mistral', 'AI Web Search'],
    github: 'https://github.com/SaumyaSindhu/VEXA',
    live: null,
    accent: '#2F81F7',
    gradient: 'linear-gradient(135deg, rgba(47,129,247,0.15) 0%, rgba(99,102,241,0.08) 100%)',
    featured: true,
  },
  {
    id: 2,
    name: 'DripKart',
    tagline: 'Full Stack Marketplace',
    description:
      'A full-featured e-commerce marketplace with role-based access control, secure authentication, shopping cart, product management, and a complete admin dashboard for store management.',
    tags: ['Authentication', 'RBAC', 'Shopping Cart', 'Product Management', 'MERN'],
    github: 'https://github.com/SaumyaSindhu/DripKart',
    live: null,
    accent: '#f59e0b',
    gradient: 'linear-gradient(135deg, rgba(245,158,11,0.12) 0%, rgba(251,146,60,0.06) 100%)',
    featured: true,
  },
  {
    id: 3,
    name: 'macOS Terminal Portfolio',
    tagline: 'Interactive Terminal UI',
    description:
      'An immersive terminal-style portfolio that mimics the macOS terminal experience. Navigate through my work using Unix-like commands — a unique way to present a developer portfolio.',
    tags: ['React', 'Terminal UI', 'Interactive', 'macOS Design'],
    github: 'https://github.com/SaumyaSindhu/macOS',
    live: 'https://mac-os-portfolio432.vercel.app/',
    accent: '#22c55e',
    gradient: 'linear-gradient(135deg, rgba(34,197,94,0.12) 0%, rgba(16,185,129,0.06) 100%)',
    featured: false,
  },
]

function ProjectCard({ project, delay }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      {...reveal(delay)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 20,
        background: hovered ? project.gradient : 'rgba(255,255,255,0.02)',
        border: `1px solid ${hovered ? project.accent + '30' : 'rgba(255,255,255,0.07)'}`,
        overflow: 'hidden',
        transition: 'all 0.35s ease',
        cursor: 'default',
        position: 'relative',
      }}
    >
      {/* Glow */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'absolute', top: -60, left: '50%', transform: 'translateX(-50%)',
          width: 300, height: 150,
          background: `radial-gradient(ellipse, ${project.accent}25 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />

      <div style={{ padding: 32 }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '3px 10px', borderRadius: 6,
              background: `${project.accent}15`,
              border: `1px solid ${project.accent}30`,
              marginBottom: 10,
            }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: project.accent, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                {project.tagline}
              </span>
            </div>
            <h3 style={{ fontSize: 24, fontWeight: 800, color: '#f0f0f0', letterSpacing: '-0.02em' }}>
              {project.name}
            </h3>
          </div>

          <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: 36, height: 36, borderRadius: 10,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#888', textDecoration: 'none', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#f0f0f0'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#888'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
            >
              <GithubIcon size={15} />
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: `${project.accent}15`,
                  border: `1px solid ${project.accent}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: project.accent, textDecoration: 'none', transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = project.accent; e.currentTarget.style.color = '#fff' }}
                onMouseLeave={e => { e.currentTarget.style.background = `${project.accent}15`; e.currentTarget.style.color = project.accent }}
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>

        <p style={{ fontSize: 14, color: '#666', lineHeight: 1.75, marginBottom: 24 }}>
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 24 }}>
          {project.tags.map(tag => (
            <span
              key={tag}
              style={{
                fontSize: 11, fontWeight: 600, padding: '4px 10px',
                borderRadius: 6,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#666',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer link */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontSize: 13, fontWeight: 600, color: project.accent,
            textDecoration: 'none', transition: 'gap 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.gap = '10px'}
          onMouseLeave={e => e.currentTarget.style.gap = '6px'}
        >
          View on GitHub <ArrowUpRight size={14} />
        </a>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '120px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div {...reveal()} style={{ marginBottom: 64 }}>
          <p className="section-label" style={{ marginBottom: 12 }}>Portfolio</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#f0f0f0' }}>
              Featured Projects
            </h2>
            <a
              href="https://github.com/SaumyaSindhu"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                fontSize: 13, fontWeight: 600, color: '#555',
                textDecoration: 'none', transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#f0f0f0'}
              onMouseLeave={e => e.currentTarget.style.color = '#555'}
            >
              View all on GitHub <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={0.1 + i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
