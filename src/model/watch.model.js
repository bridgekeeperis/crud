const mongoose = require('mongoose');

const watchSchema = mongoose.Schema(
    {
        watch_name: {
            type: String,
            trim: true
        },
        watch_rating: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Watch', watchSchema);
