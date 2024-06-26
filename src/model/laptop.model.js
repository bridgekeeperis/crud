const mongoose = require('mongoose');

const laptopSchema = mongoose.Schema(
    {
        laptop_name: {
            type: String,
            trim: true
        },
        laptop_type: {
            type:String,
            trim:true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Laptop', laptopSchema);
