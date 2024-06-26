const mongoose = require('mongoose');

const trainSchema = mongoose.Schema(
    {
        train_name: {
            type: String,
            trim: true
        },
        train_calss: {
            type:String,
            trim:true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Train', trainSchema);
