const mongoose = require('mongoose');

const fanSchema = mongoose.Schema(
    {
        fan_name: {
            type: String,
            trim: true
        },
        fan_rating: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Fan', fanSchema);
