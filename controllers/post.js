const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

router.get('/', (req, res) => {
  Post.find({}).then(posts => {
    res.render('post/index', { posts })
  })
})

module.exports = router
