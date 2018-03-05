const mongoose = require('../db/connection')

const video = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  link: {
    type: String,
    required: true
  }
})

const Video = mongoose.model('Video', video)

module.exports = Video
