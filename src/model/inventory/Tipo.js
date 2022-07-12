const mongoose = require('mongoose');
const { Schema } = mongoose;

const tipoShema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    },

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

//tipoShema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('Tipo', tipoShema);
