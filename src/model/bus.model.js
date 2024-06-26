const mongoose = require('mongoose');

const busSchema = mongoose.Schema(
    {
        bus_name: {
            type: String,
            trim: true
        },
        bus_type: {
            type: String,
            trim:true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Bus', busSchema);
