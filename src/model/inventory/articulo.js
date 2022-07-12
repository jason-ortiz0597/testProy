const mongoose = require('mongoose');
const { Schema } = mongoose;

const articuloShema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    unidad: {
        type: String,
        required: true
    },
    abreviacion: {
        type: String,
        required: true
    },
    tipo: [{
        type: Schema.Types.ObjectId,
        ref: 'Tipo'

    }],
    categoria: [{
        type: Schema.Types.ObjectId,
        ref: 'Categoria'
    }]
},
{
    timestamps: true,
    versionKey: false
}
);
//articuloShema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('Articulo', articuloShema);