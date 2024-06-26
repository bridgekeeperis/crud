const mongoose = require('mongoose');

const movieSchema = mongoose.Schema(
    {
        movie_name: {
            type: String,
            trim: true
        },
        movie_rating: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Movie', movieSchema);
