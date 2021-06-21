const mongoose = require('mongoose')
//creamos la Base de Datos
mongoose
    .connect('mongodb://localhost/mean-Articles',{
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then((db) => console.log("Db is connected"))
    .catch((err) => console.error(err));