const mongoose = require('mongoose');

const bankSchema = mongoose.Schema(
    {
        bank_name: {
            type: String,
            trim: true
        },
        bank_type: {
            type:String,
            trim:true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Bank', bankSchema);
