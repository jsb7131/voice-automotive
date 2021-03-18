import React from 'react';
import { useVehicles } from '../hooks/VehiclesContext';
import { VehicleBlock } from './VehicleBlock';

export const VehiclesView: React.FC = () => {

    const vehicles = useVehicles();

    return (
        <>
            <button onClick={() => vehicles.add({make: "Alta", model: "Redshift"})}>Add Alta Redshift</button>
            <div className="garage-item">
                {vehicles.current.map(vehicle => 
                    <VehicleBlock
                        key={vehicle.id}
                        width={200}
                        height={100}
                        bgColor={"peru"}
                        horiCenter={false}
                        hoverColor={"darkblue"}
                        last={false}
                        click={() => vehicles.remove(vehicle.id)}
                        dealerMake={vehicle.make}
                        dealerModel={vehicle.model}
                    />
                )}
            </div>
            {vehicles.current.length > 0 && <button onClick={vehicles.clear}>Clear</button>}
            <button onClick={vehicles.reset}>Reset</button>
        </>
    );
};