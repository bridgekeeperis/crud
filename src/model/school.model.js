const mongoose = require('mongoose');

const schoolSchema = mongoose.Schema(
    {
        school_name: {
            type: String,
            trim: true
        },
        school_type: {
            type: String,
            trim:true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('School', schoolSchema);
