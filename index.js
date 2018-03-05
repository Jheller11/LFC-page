const express = require('express')
const app = express()
const hbs = require('hbs')
const parser = require('body-parser')
const postController = require('./controllers/post')
const videoController = require('./controllers/video')
const override = require('method-override')
const path = require('path')
const cors = require('cors')

app.use(parser.urlencoded({ extended: true }))
app.use(override('_method'))
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'hbs')
app.use(cors())

app.use('/posts', postController)
app.use('/videos', videoController)

app.get('/', (req, res) => res.redirect('/posts'))

app.get('/table', (req, res) => res.render('table'))

app.listen(4000, () => console.log('server running'))
