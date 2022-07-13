const mongooose = require('mongoose');
const { Schema } = mongooose;

const productoSchema = new mongooose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    descripcion: {
        type: String
    },
    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'Categoria'
    },
    subcategoria: {
        type: Schema.Types.ObjectId,
        ref: 'Subcategoria'
    },
    clase: {
        type: Schema.Types.ObjectId,
        ref: 'Clase'
    },
    unidad: {
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
module.exports = mongooose.model('Producto', productoSchema);