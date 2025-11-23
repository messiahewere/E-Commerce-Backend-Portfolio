const mongoose = require('mongoose');
const {Schema} = mongoose

const productSchema = new Schema({
    title: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    price: {type: Number, min: [0, 'wrong price'], required: true},
    category: {type: String, required: true},
    brand: {type: String, required: true},
    rating: {type: Number, min: [0, 'wrong rating'], max: [5, 'wrong rating'], default: 0},
    stock: {type: Number, min: [0, 'wrong min stock'], default: 0},
    images: [String]
})

module.exports = mongoose.model('Product', productSchema)