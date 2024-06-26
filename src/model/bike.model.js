const mongoose = require('mongoose');

const bikeSchema = mongoose.Schema(
    {
        bike_name: {
            type: String,
            trim: true
        },
        bike_number: {
            type: Number,
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Bike', bikeSchema);
