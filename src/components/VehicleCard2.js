


import React from 'react';
import { FaTrash } from 'react-icons/fa';
import '../styles/VehicleCard.css';

function VehicleCard({ vehicle }) {
    return (
        <div className={`vehicle-card p-3 border rounded ${vehicle.distance < 15 ? 'alert-danger' : ''}`}>
            <h4>{vehicle.id}</h4>
            <p>Status: {vehicle.status}</p>
            <p>Distance: {vehicle.distance} km</p>
            <p>Last Charge: {vehicle.lastChargeTime}</p>
            <button className="btn btn-danger mt-2">
                <FaTrash /> Delete
            </button>
        </div>
    );
}

export default VehicleCard;
