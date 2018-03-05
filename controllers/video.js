const express = require('express')
const router = express.Router()
// const Video = require('../models/Video')

router.get('/', (req, res) => res.send('router working'))

module.exports = router
