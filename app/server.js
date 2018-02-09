// Read in some important credentials
require('dotenv').config()

const path = require('path')
const express = require('express')
const session = require('express-session')
const oauth = require('oauth')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

// Logger
const logger = require('./utils/logger')

const app = express()
const port = 3000

// Parse application/x-www-form-urlencoded for submission of form
app.use(bodyParser.urlencoded({ extended: false }))

// Endpoints
const connect = require('./endpoints/connect')
const retrieve = require('./endpoints/retrieve')
const tagcloud = require('./endpoints/tagcloud')
const start = require('./endpoints/start')

// Middleware for session
app.use(session({
  // This should probably lie in an environmental variable but leaving it here for now
  secret: 'not_very_secret_used_to_sign',
  // Only save modified sessions to the store
  resave: false,
  // Forces a new but not modified session to be saved to the store
  saveUninitialized: true
}))

// Make session variable available to any render for a request
// in case we would like to append more to the templates.
app.use((req, res, next) => {
  res.locals.session = req.session
  next()
})

// Middleware for cookies
app.use(cookieParser())

// Static files (css/js)
app.use(express.static(path.join(__dirname, 'public')))

// Endpoints [POST]
app.post('/svtagcloud/retrieve', retrieve.endpoint)

// Endpoints [GET]
app.get('/svtagcloud/connect', connect.endpoint)
app.get('/svtagcloud/show', tagcloud.endpoint)
app.get('/', start.endpoint)

// Use pug as template engine
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

// Kick in server
app.listen(port, () => {
  logger.log(`Listening on http://localhost:${port}`)
})
