
import React from 'react';
import '../styles/ChargingSchedule.css';

function ChargingSchedule({ vehicles, setVehicles }) {
  const scheduleCharging = (id) => {
    setVehicles(prevVehicles =>
      prevVehicles.map(v => v.id === id ? { ...v, status: 'Charging' } : v)
    );
  };

  return (
    <div className="charging-schedule p-3 bg-light border rounded">
      <h3>Charging Schedule</h3>
      {vehicles.map(vehicle => (
        <div key={vehicle.id} className="d-flex justify-content-between align-items-center">
          <span>{vehicle.id}</span>
          <button className="btn btn-success" onClick={() => scheduleCharging(vehicle.id)}>Schedule Charging</button>
        </div>
      ))}
    </div>
  );
}

export default ChargingSchedule;
