const mongoose = require('../db/connection')

const post = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  link: String,
  comments: [
    {
      comment: String,
      commenter: String
    }
  ]
})

const Post = mongoose.model('Post', post)

module.exports = Post
