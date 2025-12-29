require('dotenv').config();
const app = require('./app');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

// Connect to MongoDB (Optional: Add MongoDB connection string to .env if needed)
// For now, we just start the server separately as per request constraints, 
// but usually database connection happens before listening.
// Since no DB specific requirement was given other than "Use dotenv", 
// we'll stick to the basic server start.

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM signal received: closing HTTP server');
    server.close(() => {
        console.log('HTTP server closed');
    });
});
