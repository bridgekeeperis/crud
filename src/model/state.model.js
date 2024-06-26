const mongoose = require('mongoose');

const stateSchema = mongoose.Schema(
    {
        state_name: {
            type: String,
            trim: true
        },
        state_key: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('State', stateSchema);
