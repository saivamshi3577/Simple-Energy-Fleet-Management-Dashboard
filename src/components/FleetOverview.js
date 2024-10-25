import React, { useEffect, useRef, useState} from 'react';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import VehicleList from './VehicleList'; 
Chart.register(ArcElement, Tooltip, Legend);

const FleetOverview = () => {
    const chartRef = useRef(null);
    const [vehicles, setVehicles] = useState([]);
    const [vehicleForm, setVehicleForm] = useState({
        id: '',
        distance: 0,
        lastChargeTime: '',
        status: 'Idle',
    });

    useEffect(() => {
        const storedVehicles = JSON.parse(localStorage.getItem('vehicles'));
        if (storedVehicles) {
            setVehicles(storedVehicles);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('vehicles', JSON.stringify(vehicles));
    }, [vehicles]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setVehicleForm((prev) => ({
            ...prev,
            [name]: name === 'distance' ? Number(value) : value,
        }));
    };

    const addVehicle = () => {
        if (vehicleForm.id && !vehicles.some(v => v.id === vehicleForm.id)) {
            setVehicles((prev) => [...prev, vehicleForm]);
            setVehicleForm({ id: '', distance: 0, lastChargeTime: '', status: 'Idle' });
        } else {
            alert('Please provide a unique vehicle ID.');
        }
    };

    const data = {
        labels: vehicles.map((vehicle) => vehicle.id),
        datasets: [
            {
                data: vehicles.map((vehicle) => vehicle.distance), 
                backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
            },
        ],
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Fleet Overview Dashboard</h2>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <Doughnut data={data} ref={chartRef} />
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-md-12">
                    <h5>Add Vehicle</h5>
                    <input
                        type="text"
                        name="id"
                        className="form-control"
                        placeholder="Vehicle ID"
                        value={vehicleForm.id}
                        onChange={handleInputChange}
                    />
                    <select
                        name="status"
                        className="form-control mt-2"
                        value={vehicleForm.status}
                        onChange={handleInputChange}
                    >
                        <option value="Idle">Idle</option>
                        <option value="Charging">Charging</option>
                        <option value="In Transit">In Transit</option>
                    </select>
                    <input
                        type="number"
                        name="distance"
                        className="form-control mt-2"
                        placeholder="Distance Travelled (km)"
                        value={vehicleForm.distance}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="lastChargeTime"
                        className="form-control mt-2"
                        placeholder="Last Charge Time"
                        value={vehicleForm.lastChargeTime}
                        onChange={handleInputChange}
                    />
                    <button className="btn btn-primary mt-2" onClick={addVehicle}>
                        Add Vehicle
                    </button>
                </div>
            </div>

            <VehicleList vehicles={vehicles} />
        </div>
    );
};

export default FleetOverview;
