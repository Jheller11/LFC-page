var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/lfclinks')

mongoose.Promise = Promise

module.exports = mongoose
