const mongoose = require('mongoose');
const {Schema} = mongoose

const cartSchema = new Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, required: true},
    userId: {type: String, required: true},
    total: {type: Number, required: true},
    orderDate: {type: Date, required: true},
    status: {type: String, required: true},
    products: [
        {
            title: { type: String, required: true, unique: true },
            description: { type: String, required: true },
            price: { type: Number, min: [0, 'wrong price'], required: true },
            category: { type: String, required: true },
            brand: { type: String, required: true },
            rating: { type: Number, min: [0, 'wrong rating'], max: [5, 'wrong rating'], default: 0 },
            stock: { type: Number, min: [0, 'wrong min stock'], default: 0 },
            images: [String],
            count: {type: Number, default: 1},
            deliveryDate: {type: Date, required: true}
        }
    ]
})

module.exports = mongoose.model('Cart', cartSchema)