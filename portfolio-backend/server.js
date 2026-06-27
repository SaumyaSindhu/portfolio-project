const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const helmet = require('helmet')
const compression = require('compression')
const rateLimit = require('express-rate-limit')
require('dotenv').config()

const contactRoutes = require('./src/routes/contact')
const authRoutes = require('./src/routes/auth')
const adminRoutes = require('./src/routes/admin')

const app = express()
const PORT = process.env.PORT || 5000

// Security
app.use(helmet())
app.use(compression())

// CORS
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
}))

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 100,
  message: { error: 'Too many requests, please try again later.' }
})
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hr
  max: 5,
  message: { error: 'Too many contact submissions. Please wait before trying again.' }
})
app.use('/api/', limiter)
app.use('/api/contact', contactLimiter)

// Body parsing
app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api/contact', contactRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/admin', adminRoutes)

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// 404
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).json({
    error: err.message || 'Internal server error'
  })
})

// Connect to MongoDB and start
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio')
  .then(() => {
    console.log('✅ MongoDB connected')
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err.message)
    process.exit(1)
  })
