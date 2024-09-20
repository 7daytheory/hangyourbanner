const express = require('express');
const connectDB = require('./config/db'); // If using MongoDB
const authRoutes = require('./routes/auth');

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Auth routes
app.use('/api', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
