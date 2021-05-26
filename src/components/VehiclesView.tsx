import React from 'react';
import { useVehicles } from '../hooks/VehiclesContext';
import { VehicleBlock } from './VehicleBlock';

export const VehiclesView: React.FC = () => {

    const vehicles = useVehicles();

    return (
        <div id="garage-container">
            {vehicles.current.map(vehicle => 
                <VehicleBlock
                    key={vehicle.id}
                    width={400}
                    height={350}
                    fontSize={"calc(10px + 2vmin)"}
                    bgColor={vehicle.color}
                    borderBoxShadow={"0 0 0 1px black"}
                    hoverColor={"darkblue"}
                    onClick={() => vehicles.remove(vehicle.id)}
                    dealerMake={vehicle.make}
                    dealerModel={vehicle.model}
                />
            )}
        </div>
    );
};