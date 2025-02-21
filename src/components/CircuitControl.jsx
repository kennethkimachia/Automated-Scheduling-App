import React from 'react';
import anyone from '..';

const CircuitControl = () => {
  const handleStart = () => anyone.start();
  const handlePause = () => anyone.pause();
  const handleEnd = () => anyone.end();

  return (
    <div className="circuit-control">
      <button onClick={handleStart} className="btn">Start</button>
      <button onClick={handlePause} className="btn">Pause</button>
      <button onClick={handleEnd} className="btn">End</button>
    </div>
  );
};

export default CircuitControl;
