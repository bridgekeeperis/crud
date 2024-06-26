const mongoose = require('mongoose');

const doctorSchema = mongoose.Schema(
    {
        doctor_name: {
            type: String,
            trim: true
        },
        doctor_type: {
            type: String,
            trim: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Doctor', doctorSchema);
