import React, { useContext, useState, useEffect } from 'react';
import { uniqueId } from 'lodash';

type Vehicle = {id: string, make: string, model: string};

type Context = {
    current: Vehicle[]
};

// Seeded vehicles
const automobiles: Vehicle[] = [
    {id: uniqueId(), make: "Tesla", model: "Model S"},
    {id: uniqueId(), make: "Tesla", model: "Model 3"},
    {id: uniqueId(), make: "Tesla", model: "Model X"},
    {id: uniqueId(), make: "Tesla", model: "Model Y"},
    {id: uniqueId(), make: "Tesla", model: "Roadster"},
    {id: uniqueId(), make: "Tesla", model: "Cybertruck"}
];

const DealerContext = React.createContext<Context>({
    current: []
});

export const useDealer = () => useContext(DealerContext);

export const DealerProvider: React.FC = ({ children }) => {
    
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);

    // Emulating initial fetch of vehicles / data on mount
    useEffect(() => {
        setTimeout(() => {
            setVehicles(automobiles);
        }, 1200);
    }, []);

    const vehicleControl = {
        current: vehicles
    };
    
    return (
        <DealerContext.Provider value={vehicleControl}>
            { children }
        </DealerContext.Provider>
    );
};