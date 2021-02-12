import React from 'react';
import { useVehicles } from '../hooks/VehiclesContext';

const VehiclesView: React.FC = () => {

    const vehicles = useVehicles();

    return (
        <>
            <button onClick={() => vehicles.add({make: "Alta", model: "Redshift"})}>Add Alta Redshift</button>
            {vehicles.current.map(vehicle => <div key={vehicle.id} onClick={() => vehicles.remove(vehicle.id)}>{vehicle.make + " " + vehicle.model}</div>)}
            <button onClick={vehicles.clear}>Clear</button>
            <button onClick={vehicles.reset}>Reset</button>
        </>
    );
};

export default VehiclesView;