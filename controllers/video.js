const express = require('express')
const router = express.Router()
const Video = require('../models/Video')

router.get('/', (req, res) => {
  Video.find({}).then(videos => {
    res.render('video/index', { videos })
  })
})

router.post('/', (req, res) => {
  Video.create({
    link: req.body.link,
    description: req.body.description
  }).then(() => {
    res.redirect('/videos')
  })
})

router.get('/new', (req, res) => {
  res.render('video/new')
})

module.exports = router
