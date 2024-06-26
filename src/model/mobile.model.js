const mongoose = require('mongoose');

const mobileSchema = mongoose.Schema(
    {
        mobile_name: {
            type: String,
            trim: true
        },
        mobile_brand: {
            type: String,
            trim:true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Mobile', mobileSchema);
