import React from 'react';
import { useVehicles } from '../hooks/VehiclesContext';

const VehiclesView: React.FC = () => {

    const vehicles = useVehicles();

    return (
        <>
            <button onClick={() => vehicles.add({make: "Alta", model: "Redshift"})}>Add Redshift</button>
            {vehicles.current.map(vehicle => { return <div key={vehicle.id} onClick={() => vehicles.remove(vehicle.id)}>{vehicle.make + " " + vehicle.model}</div> })}
        </>
    );
};

export default VehiclesView;