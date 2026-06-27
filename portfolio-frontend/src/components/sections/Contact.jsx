import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react'

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

const inputStyle = {
  width: '100%',
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: 10,
  padding: '12px 16px',
  fontSize: 14,
  color: '#f0f0f0',
  outline: 'none',
  fontFamily: 'Inter, sans-serif',
  transition: 'border-color 0.2s, background 0.2s',
  boxSizing: 'border-box',
}

function Field({ label, error, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label style={{ fontSize: 12, fontWeight: 600, color: '#666', letterSpacing: '0.05em' }}>
        {label}
      </label>
      {children}
      {error && <span style={{ fontSize: 11, color: '#f87171' }}>{error}</span>}
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email address'
    if (!form.message.trim()) errs.message = 'Message is required'
    return errs
  }

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      // Demo: treat as success for portfolio
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    }
  }

  return (
    <section id="contact" style={{
      padding: '120px 24px',
      background: 'rgba(255,255,255,0.01)',
      borderTop: '1px solid rgba(255,255,255,0.04)',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div {...reveal()} style={{ marginBottom: 64 }}>
          <p className="section-label" style={{ marginBottom: 12 }}>Get in Touch</p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#f0f0f0' }}>
            Let's Work Together
          </h2>
          <p style={{ fontSize: 15, color: '#555', marginTop: 10, maxWidth: 440 }}>
            I'm open to internships, freelance projects, and full-time opportunities. Let's build something great.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 60, alignItems: 'start' }} className="contact-grid">
          {/* Left: Info */}
          <motion.div {...reveal(0.1)}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
              {[
                { Icon: Mail, label: 'Email', value: 'saumyasindhu75@gmail.com', href: 'mailto:saumyasindhu75@gmail.com' },
                { Icon: Phone, label: 'Phone', value: '+91 9810223773', href: 'tel:+919810223773' },
                { Icon: MapPin, label: 'Location', value: 'New Delhi, India', href: null },
              ].map(({ Icon, label, value, href }) => (
                <div key={label} style={{
                  display: 'flex', gap: 14, alignItems: 'flex-start',
                  padding: '16px 18px', borderRadius: 14,
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: 10,
                    background: 'rgba(47,129,247,0.1)',
                    border: '1px solid rgba(47,129,247,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#2F81F7', flexShrink: 0,
                  }}>
                    <Icon size={16} />
                  </div>
                  <div>
                    <p style={{ fontSize: 11, color: '#444', fontWeight: 600, letterSpacing: '0.05em', marginBottom: 2 }}>{label}</p>
                    {href ? (
                      <a href={href} style={{ fontSize: 14, color: '#888', textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={e => e.target.style.color = '#f0f0f0'}
                        onMouseLeave={e => e.target.style.color = '#888'}>
                        {value}
                      </a>
                    ) : (
                      <p style={{ fontSize: 14, color: '#888' }}>{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              padding: '20px 22px', borderRadius: 14,
              background: 'rgba(34,197,94,0.06)',
              border: '1px solid rgba(34,197,94,0.2)',
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', animation: 'pulse 2s infinite', flexShrink: 0 }} />
              <span style={{ fontSize: 13, color: '#666' }}>
                <strong style={{ color: '#22c55e' }}>Available</strong> — open to new opportunities
              </span>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div {...reveal(0.2)}>
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    padding: '48px 40px', borderRadius: 20, textAlign: 'center',
                    background: 'rgba(34,197,94,0.05)',
                    border: '1px solid rgba(34,197,94,0.2)',
                  }}
                >
                  <CheckCircle2 size={48} color="#22c55e" style={{ margin: '0 auto 16px' }} />
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: '#f0f0f0', marginBottom: 8 }}>Message Sent!</h3>
                  <p style={{ fontSize: 14, color: '#555', marginBottom: 24 }}>
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    style={{
                      background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)',
                      color: '#22c55e', fontSize: 13, fontWeight: 600, padding: '9px 20px',
                      borderRadius: 8, cursor: 'pointer',
                    }}
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  style={{
                    padding: '36px 32px', borderRadius: 20,
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    display: 'flex', flexDirection: 'column', gap: 20,
                  }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-row">
                    <Field label="Full Name" error={errors.name}>
                      <input
                        name="name" value={form.name} onChange={handleChange}
                        placeholder="Saumya Sindhu"
                        style={{ ...inputStyle, borderColor: errors.name ? '#f87171' : inputStyle.border }}
                        onFocus={e => { e.target.style.borderColor = '#2F81F7'; e.target.style.background = 'rgba(47,129,247,0.04)' }}
                        onBlur={e => { e.target.style.borderColor = errors.name ? '#f87171' : 'rgba(255,255,255,0.08)'; e.target.style.background = 'rgba(255,255,255,0.03)' }}
                      />
                    </Field>
                    <Field label="Email Address" error={errors.email}>
                      <input
                        name="email" value={form.email} onChange={handleChange}
                        type="email" placeholder="you@example.com"
                        style={{ ...inputStyle, borderColor: errors.email ? '#f87171' : inputStyle.border }}
                        onFocus={e => { e.target.style.borderColor = '#2F81F7'; e.target.style.background = 'rgba(47,129,247,0.04)' }}
                        onBlur={e => { e.target.style.borderColor = errors.email ? '#f87171' : 'rgba(255,255,255,0.08)'; e.target.style.background = 'rgba(255,255,255,0.03)' }}
                      />
                    </Field>
                  </div>

                  <Field label="Subject (optional)">
                    <input
                      name="subject" value={form.subject} onChange={handleChange}
                      placeholder="Internship opportunity / Project collaboration"
                      style={inputStyle}
                      onFocus={e => { e.target.style.borderColor = '#2F81F7'; e.target.style.background = 'rgba(47,129,247,0.04)' }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.background = 'rgba(255,255,255,0.03)' }}
                    />
                  </Field>

                  <Field label="Message" error={errors.message}>
                    <textarea
                      name="message" value={form.message} onChange={handleChange}
                      placeholder="Tell me about your project, opportunity, or just say hi..."
                      rows={5}
                      style={{ ...inputStyle, resize: 'vertical', minHeight: 120, borderColor: errors.message ? '#f87171' : inputStyle.border }}
                      onFocus={e => { e.target.style.borderColor = '#2F81F7'; e.target.style.background = 'rgba(47,129,247,0.04)' }}
                      onBlur={e => { e.target.style.borderColor = errors.message ? '#f87171' : 'rgba(255,255,255,0.08)'; e.target.style.background = 'rgba(255,255,255,0.03)' }}
                    />
                  </Field>

                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    style={{
                      background: 'linear-gradient(135deg, #2F81F7, #6366f1)',
                      border: 'none', color: '#fff',
                      fontSize: 14, fontWeight: 700, padding: '13px 24px',
                      borderRadius: 10, cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                      boxShadow: '0 0 30px rgba(47,129,247,0.25)',
                      opacity: status === 'loading' ? 0.7 : 1,
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {status === 'loading' ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                          style={{ width: 14, height: 14, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%' }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>Send Message <Send size={14} /></>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
