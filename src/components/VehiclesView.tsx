import React from 'react';
import { useVehicles } from '../hooks/VehiclesContext';
import { HoverableDiv } from './HoverableDiv';

const VehiclesView: React.FC = () => {

    const vehicles = useVehicles();

    return (
        <>
            <button onClick={() => vehicles.add({make: "Alta", model: "Redshift"})}>Add Alta Redshift</button>
            {vehicles.current.map(vehicle => 
                <HoverableDiv
                    key={vehicle.id}
                    click={() => vehicles.remove(vehicle.id)}
                    innerHTML={vehicle.make + " " + vehicle.model}
                >
                </HoverableDiv>
            )}
            {vehicles.current.length > 0 && <button onClick={vehicles.clear}>Clear</button>}
            <button onClick={vehicles.reset}>Reset</button>
        </>
    );
};

export default VehiclesView;
