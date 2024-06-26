const mongoose = require('mongoose');

const citySchema = mongoose.Schema(
    {
        city_name: {
            type: String,
            trim: true
        },
        city_pincodeg: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('City', citySchema);
