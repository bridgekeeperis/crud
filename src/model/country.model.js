const mongoose = require('mongoose');

const countrySchema = mongoose.Schema(
    {
        country_name: {
            type: String,
            trim: true
        },
        country_langauge: {
            type: String,
            trim: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Country', countrySchema);
