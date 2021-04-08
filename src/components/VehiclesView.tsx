import React from 'react';
import { useVehicles } from '../hooks/VehiclesContext';
import { VehicleBlock } from './VehicleBlock';

export const VehiclesView: React.FC = () => {

    const vehicles = useVehicles();

    return (
        <div id="garage-container">
            {vehicles.current.map((vehicle, i) => 
                <VehicleBlock
                    key={vehicle.id}
                    width={400}
                    height={270}
                    fontSize={"calc(10px + 2vmin)"}
                    bgColor={"white"}
                    border={"1px solid black"}
                    hoverColor={"darkblue"}
                    click={() => vehicles.remove(vehicle.id)}
                    dealerMake={vehicle.make}
                    dealerModel={vehicle.model}
                />
            )}
        </div>
    );
};