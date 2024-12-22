import React, { useState } from 'react';

const ScheduleForm = ({ onScheduleCreated }) => {
  const [title, setTitle] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/schedules', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, start_time: startTime, end_time: endTime }),
      });

      const newSchedule = await response.json();
      onScheduleCreated(newSchedule);
    } catch (error) {
      console.error('Error creating schedule:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input"
      />
      <input
        type="datetime-local"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
        className="input"
      />
      <input
        type="datetime-local"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
        className="input"
      />
      <button type="submit" className="btn">
        Create Schedule
      </button>
    </form>
  );
};

export default ScheduleForm;
