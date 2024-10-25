
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardHeader from './components/DashboardHeader';
import FleetOverview from './components/FleetOverview';
import VehicleList from './components/VehicleList';
import ChargingSchedule from './components/ChargingSchedule';
import './styles/App.css';

function App() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const storedVehicles = JSON.parse(localStorage.getItem('vehicles'));
    if (storedVehicles) {
      setVehicles(storedVehicles);
    }
  }, []);

 
  useEffect(() => {
    localStorage.setItem('vehicles', JSON.stringify(vehicles));
  }, [vehicles]);

  const addVehicle = (newVehicle) => {
    setVehicles([...vehicles, newVehicle]);
  };

  const updateVehicle = (updatedVehicle) => {
    setVehicles(vehicles.map(vehicle => vehicle.id === updatedVehicle.id ? updatedVehicle : vehicle));
  };

  const deleteVehicle = (id) => {
    setVehicles(vehicles.filter(vehicle => vehicle.id !== id));
  };

  return (
    <div className="app container">
      <DashboardHeader />
      <FleetOverview vehicles={vehicles} />
      <VehicleList
        vehicles={vehicles}
        addVehicle={addVehicle}
        updateVehicle={updateVehicle}
        deleteVehicle={deleteVehicle}
      />
      <ChargingSchedule vehicles={vehicles} setVehicles={setVehicles} />
    </div>
  );
}

export default App;
