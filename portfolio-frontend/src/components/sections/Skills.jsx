import { motion } from 'framer-motion'

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

const categories = [
  {
    label: 'Frontend',
    color: '#61dafb',
    skills: ['React', 'Redux Toolkit', 'JavaScript', 'HTML5', 'CSS3', 'SCSS'],
  },
  {
    label: 'Backend',
    color: '#68a063',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Socket.IO'],
  },
  {
    label: 'Database',
    color: '#47a248',
    skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Prisma', 'Mongoose'],
  },
  {
    label: 'AI / ML',
    color: '#c084fc',
    skills: ['LangChain', 'AI Agents', 'Tool Calling', 'RAG', 'Gemini API', 'Mistral API'],
  },
  {
    label: 'Tools',
    color: '#f59e0b',
    skills: ['Git', 'GitHub', 'Postman', 'Vercel'],
  },
]

function SkillPill({ name, color, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay }}
      whileHover={{ y: -3, scale: 1.04 }}
      style={{
        padding: '8px 16px',
        borderRadius: 100,
        background: `${color}0d`,
        border: `1px solid ${color}28`,
        fontSize: 13,
        fontWeight: 600,
        color: color,
        cursor: 'default',
        userSelect: 'none',
        transition: 'box-shadow 0.2s',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
      }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = `0 0 18px ${color}30`}
      onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
    >
      <span style={{ width: 5, height: 5, borderRadius: '50%', background: color, display: 'block' }} />
      {name}
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '120px 24px', background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div {...reveal()} style={{ marginBottom: 64, textAlign: 'center' }}>
          <p className="section-label" style={{ marginBottom: 12 }}>Expertise</p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#f0f0f0' }}>
            Skills &amp; Technologies
          </h2>
          <p style={{ fontSize: 16, color: '#555', marginTop: 12, maxWidth: 480, margin: '12px auto 0' }}>
            The tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              {...reveal(0.1 + ci * 0.08)}
              style={{
                padding: '28px 32px',
                borderRadius: 20,
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                display: 'grid',
                gridTemplateColumns: '140px 1fr',
                gap: 32,
                alignItems: 'center',
              }}
              className="skill-row"
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
            >
              <div>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '5px 12px', borderRadius: 8,
                  background: `${cat.color}10`, border: `1px solid ${cat.color}25`,
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: cat.color }} />
                  <span style={{ fontSize: 12, fontWeight: 700, color: cat.color, letterSpacing: '0.05em' }}>
                    {cat.label}
                  </span>
                </div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {cat.skills.map((skill, si) => (
                  <SkillPill key={skill} name={skill} color={cat.color} delay={0.05 * si} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .skill-row { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </section>
  )
}
