const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [{
        id: String,
        title: String,
        price: Number,
        quantity: Number,
        image: String,
        category: String
    }],
    totalPrice: {
        type: Number,
        required: true
    },
    totalItems: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: 'completed',
        enum: ['completed', 'pending', 'cancelled']
    },
    purchaseDate: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true })

module.exports = mongoose.model('Order', orderSchema)