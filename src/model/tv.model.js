const mongoose = require('mongoose');

const tvSchema = mongoose.Schema(
    {
        tv_name: {
            type: String,
            trim: true
        },
        tv_type: {
            type:String,
            trim:true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Tv', tvSchema);
