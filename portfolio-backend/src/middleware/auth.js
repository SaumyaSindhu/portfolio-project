const jwt = require('jsonwebtoken')
const Admin = require('../models/Admin')

module.exports = async (req, res, next) => {
  try {
    let token
    if (req.headers.authorization?.startsWith('Bearer ')) {
      token = req.headers.authorization.split(' ')[1]
    }

    if (!token) {
      return res.status(401).json({ error: 'Not authenticated. Please log in.' })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret-change-in-production')
    const admin = await Admin.findById(decoded.id).select('-password')

    if (!admin) {
      return res.status(401).json({ error: 'Admin no longer exists.' })
    }

    req.admin = admin
    next()
  } catch (error) {
    res.status(401).json({ error: 'Invalid or expired token.' })
  }
}
