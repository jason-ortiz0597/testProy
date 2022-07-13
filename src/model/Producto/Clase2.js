const mongooose = require('mongoose');

const claseSchema = new mongooose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    descripcion: {
        type: String
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
module.exports = mongooose.model('Clase', claseSchema);
