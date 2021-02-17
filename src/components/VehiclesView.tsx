import React from 'react';
import { useVehicles } from '../hooks/VehiclesContext';
import { Hover } from './Hover';

const VehiclesView: React.FC = () => {

    const vehicles = useVehicles();

    return (
        <>
            <button onClick={() => vehicles.add({make: "Alta", model: "Redshift"})}>Add Alta Redshift</button>
            {vehicles.current.map(vehicle => 
                <Hover key={vehicle.id}>
                    {hovered =>
                        // Wrap elements that need access to a hover state in a Hover component / its children render function
                        <div 
                            style={{cursor: "pointer", background: hovered.current ? "blue" : "inherit"}} 
                            onMouseEnter={() => hovered.update(true)} 
                            onMouseLeave={() => hovered.update(false)} 
                            onClick={() => vehicles.remove(vehicle.id)}
                        >
                            {vehicle.make + " " + vehicle.model}
                        </div>
                    }
                </Hover>
            )}
            {vehicles.current.length > 0 && <button onClick={vehicles.clear}>Clear</button>}
            <button onClick={vehicles.reset}>Reset</button>
        </>
    );
};

export default VehiclesView;
