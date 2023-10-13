const express = require('express');
const app = express.Router()

app.post('/login', require('./Login'))
app.post('/register', require('./Register'))



module.exports = app;