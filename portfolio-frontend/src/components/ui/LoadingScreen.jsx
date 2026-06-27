import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed', inset: 0, background: '#080808',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', zIndex: 9999
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center' }}
      >
        <motion.div
          style={{
            width: 52, height: 52, borderRadius: 14,
            background: 'linear-gradient(135deg, #2F81F7, #6366f1)',
            margin: '0 auto 24px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 24, fontWeight: 800, color: '#fff', fontFamily: 'Inter, sans-serif',
            boxShadow: '0 0 40px rgba(47,129,247,0.4)'
          }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        >
          S
        </motion.div>
        <motion.p
          style={{
            fontFamily: 'Inter, sans-serif', fontSize: 12,
            color: '#555', letterSpacing: '0.15em', textTransform: 'uppercase'
          }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Saumya Sindhu
        </motion.p>
      </motion.div>
      <motion.div
        style={{
          position: 'absolute', bottom: 0, left: 0, height: 2,
          background: 'linear-gradient(90deg, #2F81F7, #6366f1)',
        }}
        initial={{ width: '0%' }}
        animate={{ width: '100%' }}
        transition={{ duration: 2.1, ease: 'easeInOut' }}
      />
    </motion.div>
  )
}
