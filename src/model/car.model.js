const mongoose = require('mongoose');

const carSchema = mongoose.Schema(
    {
        car_name: {
            type: String,
            trim: true
        },
        car_model: {
            type:String,
            trim:true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Car', carSchema);
