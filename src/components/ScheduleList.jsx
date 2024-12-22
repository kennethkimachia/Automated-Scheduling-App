import React, { useEffect, useState } from 'react';

const ScheduleList = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await fetch('/api/schedules');
        const data = await response.json();
        setSchedules(data);
      } catch (error) {
        console.error('Error fetching schedules:', error);
      }
    };

    fetchSchedules();
  }, []);

  return (
    <div className="schedule-list">
      {schedules.map((schedule) => (
        <div key={schedule.id} className="schedule-item">
          <h3>{schedule.title}</h3>
          <p>
            {new Date(schedule.start_time).toLocaleString()} -{' '}
            {new Date(schedule.end_time).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ScheduleList;
