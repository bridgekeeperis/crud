const mongoose = require('mongoose');

const seriesSchema = mongoose.Schema(
    {
        series_name: {
            type: String,
            trim: true
        },
        series_rating: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Series', seriesSchema);
