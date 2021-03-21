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
                    bgColor={"peru"}
                    horiCenter={false}
                    hoverColor={"darkblue"}
                    last={i === vehicles.current.length - 1 ? true : false}
                    click={() => vehicles.remove(vehicle.id)}
                    dealerMake={vehicle.make}
                    dealerModel={vehicle.model}
                />
            )}
        </div>
    );
};