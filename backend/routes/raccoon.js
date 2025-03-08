const express = require('express');
const Raccoon = require('../models/Raccoon');
const router = express.Router();

// Get all raccoons
router.get('/', async (req, res) => {
    try {
        const raccoons = await Raccoon.find();
        res.json(raccoons);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new raccoon
router.post('/', async (req, res) => {
    const raccoon = new Raccoon({
        name: req.body.name,
        age: req.body.age,
        description: req.body.description,
        price: req.body.price,
        imageUrl: req.body.imageUrl,
    });

    try {
        const newRaccoon = await raccoon.save();
        res.status(201).json(newRaccoon);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;