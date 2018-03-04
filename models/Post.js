import { url } from 'inspector'

// 1.  Post: this model will contain information pertaining to:
//     * author: required
//     * content: required
//     * link to external content: optional
//     * date created: default value
//     * comments: (new sub-model with author/content?)

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
  link: String
})

const Post = mongoose.model('Post', post)

module.exports = Post
