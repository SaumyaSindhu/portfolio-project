const router = require('express').Router()
const { getContacts, markRead, deleteContact } = require('../controllers/contactController')
const protect = require('../middleware/auth')

router.use(protect)

router.get('/messages', getContacts)
router.patch('/messages/:id/read', markRead)
router.delete('/messages/:id', deleteContact)

module.exports = router
