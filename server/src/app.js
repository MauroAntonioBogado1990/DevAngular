const express = require('express')
const morgan = require('morgan')

const app = express()

app.set('port',process.env.PORT || 4000);
app.use(morgan('dev'))
//para no repetir las rutas
app.use('/api/articles',require('./routes/articles.routes'))

module.exports = app;