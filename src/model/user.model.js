const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        user_name: {
            type: String,
            trim: true
        },
        user_number: {
            type: Number,
            
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('User', userSchema);
