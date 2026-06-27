const Contact = require('../models/Contact')
const nodemailer = require('nodemailer')

const createTransporter = () =>
  nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

const sendNotificationEmail = async (contactData) => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) return

  const transporter = createTransporter()

  // Notify owner
  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `📬 New Message: ${contactData.subject}`,
    html: `
      <div style="font-family: Inter, sans-serif; max-width: 560px; margin: 0 auto; background: #0f0f0f; color: #f0f0f0; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #2F81F7, #6366f1); padding: 24px 32px;">
          <h2 style="margin: 0; color: #fff; font-size: 20px;">New Portfolio Message</h2>
        </div>
        <div style="padding: 32px;">
          <p><strong style="color: #888">From:</strong> <span>${contactData.name}</span></p>
          <p><strong style="color: #888">Email:</strong> <span>${contactData.email}</span></p>
          <p><strong style="color: #888">Subject:</strong> <span>${contactData.subject}</span></p>
          <div style="margin-top: 24px; padding: 20px; background: rgba(255,255,255,0.05); border-radius: 8px; border-left: 3px solid #2F81F7;">
            <p style="margin: 0; line-height: 1.7;">${contactData.message}</p>
          </div>
        </div>
      </div>
    `,
  })

  // Auto-reply to sender
  await transporter.sendMail({
    from: `"Saumya Sindhu" <${process.env.EMAIL_USER}>`,
    to: contactData.email,
    subject: `Thanks for reaching out, ${contactData.name}!`,
    html: `
      <div style="font-family: Inter, sans-serif; max-width: 560px; margin: 0 auto;">
        <h2 style="color: #2F81F7;">Hey ${contactData.name}! 👋</h2>
        <p>Thanks for getting in touch. I've received your message and will get back to you within 24 hours.</p>
        <p style="color: #888;">— Saumya Sindhu</p>
        <p style="color: #888; font-size: 12px;">Full Stack Developer · AI Engineer · New Delhi, India</p>
      </div>
    `,
  })
}

exports.submitContact = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' })
    }

    const contact = await Contact.create({ name, email, subject: subject || 'No subject', message })

    // Send emails (non-blocking — don't fail if email fails)
    sendNotificationEmail({ name, email, subject: subject || 'No subject', message }).catch(console.error)

    res.status(201).json({ success: true, message: 'Message received! I\'ll get back to you soon.' })
  } catch (error) {
    next(error)
  }
}

exports.getContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 })
    res.json({ success: true, count: contacts.length, contacts })
  } catch (error) {
    next(error)
  }
}

exports.markRead = async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    )
    if (!contact) return res.status(404).json({ error: 'Message not found' })
    res.json({ success: true, contact })
  } catch (error) {
    next(error)
  }
}

exports.deleteContact = async (req, res, next) => {
  try {
    await Contact.findByIdAndDelete(req.params.id)
    res.json({ success: true, message: 'Message deleted' })
  } catch (error) {
    next(error)
  }
}
