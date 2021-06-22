const express = require('express');
const morgan = require('morgan');
//agregamos el path
const path = require('path');
const multer = require('multer');

const app = express()

app.set('port', process.env.PORT || 4000);
//agregado de las plantillas 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(morgan('dev'));
//para que vea lo que he pedido
app.use(express.json());
//para entender los datos de los formularios
app.use(express.urlencoded({ extended: false }));
app.use(multer({ dest: path.join(__dirname, 'public/img/uploads') }).single('image'));
//para no repetir las rutas
app.use('/api/articles', require('./routes/articles.routes'))

module.exports = app;