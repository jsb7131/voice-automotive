import React, { useContext, useState, useEffect } from 'react';
import { uniqueId } from 'lodash';

type Vehicle = {id: string, make: string, model: string};
type AddVehicle = {make: string, model: string};
type AddFunc<T> = (item: T) => void;
type RemoveFunc = (id: string) => void;

type Context = {
    current: Vehicle[],
    add: AddFunc<AddVehicle>,
    remove: RemoveFunc
};

const automobiles: Vehicle[] = [
    {id: uniqueId(), make: "Tesla", model: "Model S"},
    {id: uniqueId(), make: "Tesla", model: "Model 3"},
    {id: uniqueId(), make: "Tesla", model: "Model X"},
    {id: uniqueId(), make: "Tesla", model: "Model Y"},
    {id: uniqueId(), make: "Tesla", model: "Roadster"},
    {id: uniqueId(), make: "Tesla", model: "Cybertruck"}
];

const VehiclesContext = React.createContext<Context>({
    current: [],
    add: () => {},
    remove: () => {}
});

export const useVehicles = () => {
    return useContext(VehiclesContext);
};

const VehiclesProvider: React.FC = ({ children }) => {
    
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);

    useEffect(() => {
        setTimeout(() => {
            setVehicles(automobiles);
        }, 1200);
    }, []);

    const addVehicle = (vehicle: AddVehicle) => {
        setVehicles([
            {id: uniqueId(), ...vehicle},
            ...vehicles
        ]);
    };

    const removeVehicle = (id: string) => {
        setVehicles(vehicles.filter(vehicle => { return vehicle.id !== id }));
    };

    const vehicleControl = {
        current: vehicles,
        add: addVehicle,
        remove: removeVehicle
    };
    
    return (
        <VehiclesContext.Provider value={vehicleControl}>
            { children }
        </VehiclesContext.Provider>
    );
};

export default VehiclesProvider;