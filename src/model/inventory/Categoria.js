const mongoose = require('mongoose');


const categoriaShema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    }
},
{
    timestamps: true,
    versionKey: false
}
);

module.exports = mongoose.model('Categoria', categoriaShema);