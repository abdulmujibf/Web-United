const express = require('express')
const router = express.Router()
const ControllerService = require('../controllers/controllerService')

router.get('/', ControllerService.get)

module.exports = router