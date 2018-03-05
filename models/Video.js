const mongoose = require('./db/connection')

const video = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  embed_link: {
    type: String,
    required: true
  }
})

const Video = mongoose.model('Video', video)

module.exports = Video
