const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cuisineSchema = new Schema({
    name: {
        type: String
    }
}, {
    timestamps: true
})
const Cuisine = mongoose.model('Cuisine', cuisineSchema)
module.exports = Cuisine