const mongoose = require('mongoose');
require('dotenv').config();

// Use local MongoDB URI
const mongoURI = "mongodb://127.0.0.1:27017/votingdb";

// Set up MongoDB connection
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Get the default connection
const db = mongoose.connection;

// Define event listeners for database connection
db.on('connected', () => {
    console.log('✅ Connected to MongoDB server');
});

db.on('error', (err) => {
    console.error('❌ MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('⚠️ MongoDB disconnected');
});

// Export the database connection
module.exports = db;
