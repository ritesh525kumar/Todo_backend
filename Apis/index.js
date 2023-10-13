const express = require('express')
const app = express.Router()

const auth = require('./Auth')
app.use('/auth', auth)

module.exports = app
