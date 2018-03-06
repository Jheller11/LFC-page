const mongoose = require('../db/connection')

const commentSchema = new mongoose.Schema({
  comment: String,
  name: String,
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

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
  comments: [commentSchema]
})

const Post = mongoose.model('Post', post)

module.exports = Post
