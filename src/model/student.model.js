const mongoose = require('mongoose');

const studentSchema = mongoose.Schema(
    {
        student_name: {
            type: String,
            trim: true
        },
        student_type: {
            type: String,
            trim: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Student', studentSchema);
