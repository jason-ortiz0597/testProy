const mongoose = require('mongoose');
const productSiipiSchema = mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    
    name: {
        type: String,
        required: true
    },
    
    unit : {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
},
{
    timestamps: true,
    versionKey: false
}
);
module.exports = mongoose.model('ProductSiipi', productSiipiSchema);