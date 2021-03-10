import React from 'react';
import { useDealer } from '../hooks/useDealer';
import { VehicleBlock } from './VehicleBlock';

export const PanelBlocks: React.FC = () => {
    const dealer = useDealer();
    return (
        <>
            {dealer.current.map(vehicle => 
                <VehicleBlock
                    key={vehicle.id}
                    width={100}
                    height={100}
                    BGColor={"white"}
                    HoverColor={"green"}
                />
            )}
        </>
    );
};