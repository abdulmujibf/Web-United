const express = require('express')
const router = express.Router()
const ControllerProduct = require('../controllers/controllerProduct')

router.get('/', ControllerProduct.get)

module.exports = router