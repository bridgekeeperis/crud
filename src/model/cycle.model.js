const mongoose = require('mongoose');

const cycleSchema = mongoose.Schema(
    {
        cycle_name: {
            type: String,
            trim: true
        },
        cycle_type: {
            type: String,
            trim:true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Cycle', cycleSchema);
