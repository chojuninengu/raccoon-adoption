const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const raccoonRoutes = require('./routes/raccoons');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/raccoonAdoption')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

// Routes
app.use('/api/raccoons', raccoonRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const cloudinary = require('cloudinary').v2;

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'denyzh0lv',
  api_key: '416522596959239',
  api_secret: 'XteoFid3PJ7IzGrZmfGPJX_2JWk'
});