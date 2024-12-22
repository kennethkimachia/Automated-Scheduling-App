import React from 'react';
import ScheduleForm from '../src/components/ScheduleForm';
import ScheduleList from '../src/components/ScheduleList';
import CircuitControl from '../src/components/CircuitControl';
function App() {

  return (
    <div className="container mx-auto">
      <h1>Automated Scheduling App</h1>
      <ScheduleForm />
      <ScheduleList />
      <CircuitControl />
    </div>
  )
}

export default App
