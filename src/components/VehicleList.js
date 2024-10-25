
import React from 'react';
import VehicleCard from './VehicleCard2';
function VehicleList({ vehicles }) {
    return (
        <div className="row mt-4">
            <div className="col-md-12">
                <h5>Vehicle List</h5>
                <div className="row">
                    {vehicles.map((vehicle) => (
                        <div className="col-md-4 mb-3" key={vehicle.id}>
                            <VehicleCard vehicle={vehicle} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default VehicleList;
