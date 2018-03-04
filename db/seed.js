const Post = require('../models/Post')
const data = require('./seeds.json')

Post.remove({})
  .then(() => {
    return Post.collection.insert(data)
  })
  .then(() => {
    process.exit()
  })
