const express = require('express')
const router = express.Router()
const routerProducts = require('./routerProducts')
const routerServices = require('./routerServices')

router.use('/products', routerProducts)
router.use('/services', routerServices)

module.exports = router