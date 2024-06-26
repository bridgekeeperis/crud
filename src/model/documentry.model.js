const mongoose = require('mongoose');

const documentrySchema = mongoose.Schema(
    {
        documentry_name: {
            type: String,
            trim: true
        },
        documentry_episode_number: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Documentry', documentrySchema);
