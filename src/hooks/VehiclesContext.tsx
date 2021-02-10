import React, { useContext, useState, useRef, useEffect } from 'react';
import { uniqueId } from 'lodash';

type Vehicle = {id: string, make: string, model: string};
type AddVehicle = {make: string, model: string};
type AddFunc<T> = (item: T) => void;
type RemoveFunc = (id: string) => void;
type VoidFunc = () => void;

type Context = {
    current: Vehicle[],
    add: AddFunc<AddVehicle>,
    remove: RemoveFunc,
    clear: VoidFunc,
    reset: VoidFunc
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
    remove: () => {},
    clear: () => {},
    reset: () => {}
});

export const useVehicles = () => {
    return useContext(VehiclesContext);
};

const VehiclesProvider: React.FC = ({ children }) => {
    
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);

    const memoVehicles = useRef("");

    const setVehiclesWithMemo = (vehiclesArray: Vehicle[]) => {
        setVehicles(vehiclesArray);
        memoVehicles.current = JSON.stringify(vehiclesArray);
    };

    useEffect(() => {
        setTimeout(() => {
            setVehiclesWithMemo(automobiles);
        }, 1200);
    }, []);

    const fetchSeedVehicles = () => {
        if (JSON.stringify(automobiles) !== memoVehicles.current) {
            setVehiclesWithMemo(automobiles);
        };
    };

    const addVehicle = (vehicle: AddVehicle) => {
        setVehiclesWithMemo([
            {id: uniqueId(), ...vehicle},
            ...vehicles
        ]);
    };

    const removeVehicle = (id: string) => {
        setVehiclesWithMemo(vehicles.filter(vehicle => { return vehicle.id !== id }));
    };

    const clearVehicles = () => {
        setVehiclesWithMemo([]);
    };

    const vehicleControl = {
        current: vehicles,
        add: addVehicle,
        remove: removeVehicle,
        clear: clearVehicles,
        reset: fetchSeedVehicles
    };
    
    return (
        <VehiclesContext.Provider value={vehicleControl}>
            { children }
        </VehiclesContext.Provider>
    );
};

export default VehiclesProvider;