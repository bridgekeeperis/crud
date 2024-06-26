const mongoose = require('mongoose');

const burgerSchema = mongoose.Schema(
    {
        burger_name: {
            type: String,
            trim: true
        },
        burger_quantity: {
            type: Number,
            default: 1
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Burger', burgerSchema);
