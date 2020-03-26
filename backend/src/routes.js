const express = require('express')

const OngController = require('./controllers/OngController')
const incidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const router = express.Router()

router.post('/sessions', SessionController.create)

router.post('/ongs', OngController.create)
router.get('/ongs', OngController.index)

router.get('/profile', ProfileController.index)

router.post('/incidents', incidentController.create)
router.get('/incidents', incidentController.index)
router.delete('/incidents/:id', incidentController.delete)

module.exports = router