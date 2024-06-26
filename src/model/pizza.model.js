const mongoose = require('mongoose');

const pizzaSchema = mongoose.Schema(
    {
        pizza_name: {
            type: String,
            trim: true
        },
        pizza_quantity: {
            type: Number,
            default: 1
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Pizza', pizzaSchema);
