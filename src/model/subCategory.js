const mongoose = require('mongoose');


const subCategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }]
},
{
    timestamps: true,
    versionKey: false
}
);

module.exports = mongoose.model('SubCategory', subCategorySchema);