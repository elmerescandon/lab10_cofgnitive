var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmpleadoSchema = new Schema({
    nombre: {type: String, required: true, max:60},
    email: {type: String, required: true, max:5},
    dni: {type: String, required: true,max:30},
    sexo: {type: String, required:true, max:5},
    telefono: {type: String,required: true,max:10}
});

module.exports = mongoose.model('Empleado',EmpleadoSchema);
