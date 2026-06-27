const jwt = require('jsonwebtoken')
const Admin = require('../models/Admin')

const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET || 'fallback-secret-change-in-production', {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  })

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' })
    }

    const admin = await Admin.findOne({ email })
    if (!admin || !(await admin.comparePassword(password))) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    const token = signToken(admin._id)

    res.json({
      success: true,
      token,
      admin: { id: admin._id, email: admin.email },
    })
  } catch (error) {
    next(error)
  }
}

exports.register = async (req, res, next) => {
  try {
    const { email, password, secret } = req.body

    // Protect registration with a secret key
    if (secret !== process.env.ADMIN_REGISTER_SECRET) {
      return res.status(403).json({ error: 'Invalid registration secret' })
    }

    const existing = await Admin.findOne({ email })
    if (existing) return res.status(400).json({ error: 'Admin already exists' })

    const admin = await Admin.create({ email, password })
    const token = signToken(admin._id)

    res.status(201).json({
      success: true,
      token,
      admin: { id: admin._id, email: admin.email },
    })
  } catch (error) {
    next(error)
  }
}

exports.getMe = async (req, res) => {
  res.json({ success: true, admin: req.admin })
}
