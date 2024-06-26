const mongoose = require('mongoose');

const adminSchema = mongoose.Schema(
    {
        admin_name: {
            type: String,
            trim: true,
            default:"ADMIN"
        },
        admin_number: {
            type: Number,
            trim: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Admin', adminSchema);
