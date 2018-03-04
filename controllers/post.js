const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

// index view listing all posts
router.get('/', (req, res) => {
  Post.find({}).then(posts => {
    res.render('post/index', { posts })
  })
})

// show view (commenting feature to be added here)
router.get('/:id', (req, res) => {
  Post.findOne({ _id: req.params.id }).then(post => {
    res.render('post/show', post)
  })
})

module.exports = router
