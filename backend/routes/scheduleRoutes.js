const express = require('express');
const { getSchedules, createSchedule } = require('../controllers/scheduleController');

const router = express.Router();

// Define routes
router.get('/', getSchedules);
router.post('/', createSchedule);

module.exports = router;
