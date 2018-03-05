const express = require('express')
const app = express()
const hbs = require('hbs')
const parser = require('body-parser')
const postController = require('./controllers/post')
const videoController = require('./controllers/video')
const override = require('method-override')

app.use(parser.urlencoded({ extended: true }))
app.use(override('_method'))

app.set('view engine', 'hbs')

app.use('/posts', postController)
app.use('/videos', videoController)

app.get('/', (req, res) => res.render('index.hbs'))

app.listen(4000, () => console.log('server running'))
