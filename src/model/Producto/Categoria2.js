const mongooose = require('mongoose');

const categoria2Schema = new mongooose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    descripcion: {
        type: String,
        required: true
    },
    estado: {
        type: Boolean,
        default: true
    }


},
{
    timestamps: true,
    versionKey: false
}
);
module.exports = mongooose.model('Categoria2', categoria2Schema);


