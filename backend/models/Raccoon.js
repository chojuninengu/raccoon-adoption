const mongoose = require('mongoose');

const raccoonSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
});

module.exports = mongoose.model('Raccoon', raccoonSchema);