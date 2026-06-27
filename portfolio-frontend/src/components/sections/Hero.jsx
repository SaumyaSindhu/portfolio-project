import { motion, useMotionValue, useTransform } from 'framer-motion'
import { ArrowDown, Download, Mail, ExternalLink } from 'lucide-react'
import { useRef } from 'react'
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons'

const techBadges = [
  { label: 'React', color: '#61dafb', bg: 'rgba(97,218,251,0.08)', border: 'rgba(97,218,251,0.2)' },
  { label: 'Node.js', color: '#68a063', bg: 'rgba(104,160,99,0.08)', border: 'rgba(104,160,99,0.2)' },
  { label: 'MongoDB', color: '#47a248', bg: 'rgba(71,162,72,0.08)', border: 'rgba(71,162,72,0.2)' },
  { label: 'LangChain', color: '#c084fc', bg: 'rgba(192,132,252,0.08)', border: 'rgba(192,132,252,0.2)' },
  { label: 'AI / LLMs', color: '#2F81F7', bg: 'rgba(47,129,247,0.08)', border: 'rgba(47,129,247,0.2)' },
  { label: 'TypeScript', color: '#3178c6', bg: 'rgba(49,120,198,0.08)', border: 'rgba(49,120,198,0.2)' },
]

function TechBadge({ label, color, bg, border, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4, type: 'spring' }}
      whileHover={{ scale: 1.08, y: -2 }}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: '6px 12px', borderRadius: 100,
        background: bg, border: `1px solid ${border}`,
        fontSize: 12, fontWeight: 600, color,
        cursor: 'default', userSelect: 'none',
        backdropFilter: 'blur(10px)',
      }}
    >
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: color, display: 'block' }} />
      {label}
    </motion.div>
  )
}

export default function Hero() {
  const containerRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-200, 200], [8, -8])
  const rotateY = useTransform(x, [-200, 200], [-8, 8])

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set(e.clientX - centerX)
    y.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "80px 24px 40px",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      {/* Animated background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(47,129,247,0.12) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(99,102,241,0.08) 0%, transparent 60%)",
        }}
      />

      {/* Grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Floating orbs */}
      <motion.div
        className="float-anim"
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          top: "10%",
          right: "5%",
          background:
            "radial-gradient(circle, rgba(47,129,247,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
          zIndex: 0,
        }}
      />
      <motion.div
        className="float-anim-2"
        style={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          bottom: "15%",
          left: "5%",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: 1100,
          width: "100%",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 80,
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* Left: Text content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            style={{ marginBottom: 20 }}
          >
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#2F81F7",
                border: "1px solid rgba(47,129,247,0.3)",
                padding: "5px 12px",
                borderRadius: 100,
                background: "rgba(47,129,247,0.08)",
              }}
            >
              Available for Internships & Full-time
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            style={{
              fontSize: "clamp(40px, 6vw, 76px)",
              fontWeight: 800,
              lineHeight: 1.06,
              letterSpacing: "-0.03em",
              marginBottom: 12,
              color: "#f0f0f0",
            }}
          >
            Saumya{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2F81F7 0%, #6366f1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Sindhu
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              color: "#666",
              fontWeight: 400,
              marginBottom: 8,
              letterSpacing: "-0.01em",
            }}
          >
            Full Stack Developer{" "}
            <span style={{ color: "#444", margin: "0 8px" }}>·</span>
            <span style={{ color: "#888" }}>AI Engineer</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{
              fontSize: 16,
              color: "#555",
              lineHeight: 1.7,
              maxWidth: 520,
              marginBottom: 40,
            }}
          >
            Building scalable web applications and AI-powered solutions using
            React, Node.js, and LangChain. B.Tech student at GGSIPU, passionate
            about shipping production-quality software.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              marginBottom: 48,
            }}
          >
            <a
              href="#projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#2F81F7",
                color: "#fff",
                fontSize: 14,
                fontWeight: 600,
                padding: "11px 22px",
                borderRadius: 10,
                textDecoration: "none",
                boxShadow: "0 0 30px rgba(47,129,247,0.3)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-2px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              View Projects <ExternalLink size={14} />
            </a>
            <a
              href="/resume.pdf"
              download
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#f0f0f0",
                fontSize: 14,
                fontWeight: 600,
                padding: "11px 22px",
                borderRadius: 10,
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Download Resume <Download size={14} />
            </a>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "transparent",
                border: "1px solid rgba(47,129,247,0.3)",
                color: "#2F81F7",
                fontSize: 14,
                fontWeight: 600,
                padding: "11px 22px",
                borderRadius: 10,
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(47,129,247,0.1)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Contact Me <Mail size={14} />
            </a>
          </motion.div>

          {/* Tech badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{
              display: "flex",
              gap: 8,
              flexWrap: "wrap",
              marginBottom: 40,
            }}
          >
            {techBadges.map((badge, i) => (
              <TechBadge key={badge.label} {...badge} delay={0.6 + i * 0.08} />
            ))}
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            style={{ display: "flex", gap: 16, alignItems: "center" }}
          >
            <span
              style={{ fontSize: 12, color: "#444", letterSpacing: "0.05em" }}
            >
              Find me on
            </span>
            {[
              {
                Icon: GithubIcon,
                href: "https://github.com/SaumyaSindhu",
                label: "GitHub",
              },
              {
                Icon: LinkedinIcon,
                href: "https://www.linkedin.com/in/saumya-sindhu-7078a4332",
                label: "LinkedIn",
              },
              {
                Icon: Mail,
                href: "mailto:saumyasindhu75@gmail.com",
                label: "Email",
              },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#666",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#f0f0f0";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#666";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                }}
                aria-label={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: Profile card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="profile-card-wrapper"
          style={{ perspective: 1000 }}
        >
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
          >
            <div
              style={{
                width: 260,
                padding: 24,
                borderRadius: 24,
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(30px)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow:
                  "0 40px 80px rgba(0,0,0,0.5), 0 0 60px rgba(47,129,247,0.06)",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Glow top */}
              <div
                style={{
                  position: "absolute",
                  top: -40,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 200,
                  height: 100,
                  background:
                    "radial-gradient(ellipse, rgba(47,129,247,0.2) 0%, transparent 70%)",
                }}
              />

              {/* Avatar */}
              <div
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: "50%",
                  margin: "0 auto 16px",
                  boxShadow: "0 0 30px rgba(47,129,247,0.4)",
                  border: "3px solid rgba(47,129,247,0.3)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <img
                  src="/profile.jpg"
                  alt="Saumya Sindhu"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                SS
                <div
                  style={{
                    position: "absolute",
                    bottom: 4,
                    right: 4,
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    background: "#22c55e",
                    border: "2px solid #080808",
                  }}
                />
              </div>

              <h3
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  color: "#f0f0f0",
                  marginBottom: 4,
                }}
              >
                Saumya Sindhu
              </h3>
              <p style={{ fontSize: 12, color: "#555", marginBottom: 16 }}>
                Full Stack · AI Engineer
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  padding: "14px 0",
                  margin: "0 -4px",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  marginBottom: 16,
                }}
              >
                {[
                  ["3+", "Projects"],
                  ["5+", "Skills"],
                  ["8.02", "CGPA"],
                ].map(([num, label]) => (
                  <div key={label} style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontSize: 18,
                        fontWeight: 800,
                        color: "#f0f0f0",
                      }}
                    >
                      {num}
                    </div>
                    <div
                      style={{
                        fontSize: 10,
                        color: "#555",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {[
                  { dot: "#22c55e", text: "Open to work" },
                  { dot: "#2F81F7", text: "New Delhi, India" },
                  { dot: "#c084fc", text: "GGSIPU · B.Tech IoT" },
                ].map(({ dot, text }) => (
                  <div
                    key={text}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      textAlign: "left",
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: dot,
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ fontSize: 12, color: "#666" }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          color: "#444",
        }}
      >
        <span
          style={{
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .profile-card-wrapper { display: flex; justify-content: center; }
        }
      `}</style>
    </section>
  );
}
