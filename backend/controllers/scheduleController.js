const pocketbase = require('../services/pocketbaseService');

// Get all schedules
const getSchedules = async (req, res) => {
  try {
    const schedules = await pocketbase.collection('schedules').getFullList();
    res.status(200).json(schedules);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching schedules', error });
  }
};

// Create a new schedule
const createSchedule = async (req, res) => {
  try {
    const newSchedule = await pocketbase.collection('schedules').create(req.body);
    res.status(201).json(newSchedule);
  } catch (error) {
    res.status(500).json({ message: 'Error creating schedule', error });
  }
};

module.exports = { getSchedules, createSchedule };
