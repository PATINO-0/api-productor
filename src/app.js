// src/app.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const eventRoutes = require('./routes/eventRoutes');
const db = require('./utils/db');
const config = require('../config/config');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/events', eventRoutes);

// Connect to DB
db.connect();

// Start server
app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`);
});
