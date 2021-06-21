//creamos el modelo y el esquema
const {Schema, model} = require('mongoose')

//Estructura de los datos a guardar
const articleSchema = new Schema({
    name : {type: String, required: true},
    color : {type: String, required: true},
    size : {type: String, required: true},
    company : {type: String, required: true},
    price : {type: Number, required: true},
    description : {type: String,required:true},
}, {
    timestamps:true,
    versionKey:false
})




module.exports = model('Article',articleSchema )
