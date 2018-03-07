const express = require('express')
const app = express()
const hbs = require('hbs')
const parser = require('body-parser')
const postController = require('./controllers/post')
const videoController = require('./controllers/video')
const override = require('method-override')
const path = require('path')
const Team = require('./models/Team')

app.use(parser.urlencoded({ extended: true }))
app.use(override('_method'))
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'hbs')

app.use('/posts', postController)
app.use('/videos', videoController)

app.get('/', (req, res) => res.redirect('/posts'))
app.get('/table', (req, res) => {
  Team.find({}).then(teams => {
    res.render('table', { teams })
  })
})

app.set('port', process.env.PORT || 4000)

app.listen(app.get('port'), () => console.log('server running'))
