const mongoose = require('mongoose');

const sodaSchema = new mongoose.Schema({
    product_name:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required:true
    },
    cost: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Soda', sodaSchema);