const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

// index view listing all posts
router.get('/', (req, res) => {
  Post.find({}).then(posts => {
    res.render('post/index', { posts })
  })
})

// post request for adding new post
router.post('/', (req, res) => {
  Post.create({
    title: req.body.title,
    user: req.body.user,
    link: req.body.link
  }).then(() => {
    res.redirect('/posts')
  })
})

// add a comment
router.post('/:id', (req, res) => {
  Post.findOne({ _id: req.params.id }).then(post => {
    post.comments.push({
      comment: req.body.comment,
      name: req.body.name
    })
    post.save()
    res.redirect('/posts/' + req.params.id)
  })
})

// new view for posting new content
router.get('/new', (req, res) => {
  res.render('post/new')
})
// edit view for existing posts
router.get('/edit/:id', (req, res) => {
  Post.findOne({ _id: req.params.id }).then(post => {
    res.render('post/edit', post)
  })
})

// edit item in db
router.put('/:id', (req, res) => {
  Post.findOneAndUpdate({ _id: req.params.id }, req.body).then(() => {
    res.redirect('/posts')
  })
})

// delete post from db
router.delete('/:id', (req, res) => {
  Post.findOneAndRemove({ _id: req.params.id }).then(() => {
    res.redirect('/posts')
  })
})

// show view
router.get('/:id', (req, res) => {
  Post.findOne({ _id: req.params.id }).then(post => {
    res.render('post/show', post)
  })
})

module.exports = router
