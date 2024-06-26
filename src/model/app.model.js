const mongoose = require('mongoose');

const appSchema = mongoose.Schema(
    {
        app_name: {
            type: String,
            trim: true
        },
        app_rating: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('App', appSchema);
