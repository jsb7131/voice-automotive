import { useState, useEffect } from 'react';
import { uniqueId } from 'lodash';

type Colors = string[];
type Vehicle = {id: string, make: string, model: string, colors: Colors};

// Seeded vehicles
const automobiles: Vehicle[] = [
    {id: uniqueId(), make: "Tesla", model: "Model S", colors: ["white", "gray", "black", "red", "blue"]},
    {id: uniqueId(), make: "Tesla", model: "Model 3", colors: ["white", "gray", "black", "red", "blue"]},
    {id: uniqueId(), make: "Tesla", model: "Model X", colors: ["white", "gray", "black", "red", "lightblue"]},
    {id: uniqueId(), make: "Tesla", model: "Model Y", colors: ["white", "gray", "black", "red", "blue"]},
    {id: uniqueId(), make: "Tesla", model: "Roadster", colors: ["white", "gray", "black", "red", "blue", "orange"]},
    {id: uniqueId(), make: "Tesla", model: "Cybertruck", colors: ["gray"]},
    {id: uniqueId(), make: "KTM", model: "Freeride", colors: ["white", "lightblue", "orange"]},
    {id: uniqueId(), make: "Alta", model: "Redshift", colors: ["white", "red"]}
];

export const useDealer = () => {
    
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);

    // Emulating initial fetch of vehicles / data on mount
    useEffect(() => {
        setTimeout(() => {
            setVehicles(automobiles);
        }, 1200);
    }, []);
    
    return vehicles;
};