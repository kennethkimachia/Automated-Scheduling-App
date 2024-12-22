const express = require('express');
const scheduleRoutes = require('./routes/scheduleRoutes');

const app = express();
app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/api/schedules', scheduleRoutes);

module.exports = app;
