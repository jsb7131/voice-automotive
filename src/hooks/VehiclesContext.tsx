import React, { useContext, useState, useRef, useEffect } from 'react';
import { uniqueId } from 'lodash';

type Vehicle = {id: string, make: string, model: string, color: string};
type AddVehicle = {make: string, model: string, color: string};
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

// Seeded vehicles
const automobiles: Vehicle[] = [
    {id: uniqueId(), make: "Tesla", model: "Model S", color: "green"},
    {id: uniqueId(), make: "Tesla", model: "Model 3", color: "red"},
    {id: uniqueId(), make: "Tesla", model: "Model X", color: "lightblue"},
    {id: uniqueId(), make: "Tesla", model: "Model Y", color: "yellow"},
    {id: uniqueId(), make: "Tesla", model: "Roadster", color: "orange"},
    {id: uniqueId(), make: "Tesla", model: "Cybertruck", color: "purple"}
];

const VehiclesContext = React.createContext<Context>({
    current: [],
    add: () => {},
    remove: () => {},
    clear: () => {},
    reset: () => {}
});

export const useVehicles = () => useContext(VehiclesContext);

export const VehiclesProvider: React.FC = ({ children }) => {
    
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);

    const memoVehicles = useRef("");

    // Hold the vehicles array state as a string in a ref for memoization
    const setVehiclesWithMemo = (vehiclesArray: Vehicle[]) => {
        setVehicles(vehiclesArray);
        memoVehicles.current = JSON.stringify(vehiclesArray);
    };

    // Emulating initial fetch of vehicles / data on mount
    useEffect(() => {
        setTimeout(() => {
            setVehiclesWithMemo(automobiles);
        }, 1200);
    }, []);

    // Emulate an API fetch of current data (it could be the same exact
    // data that is already currently held in the vehicles array state)
    // If string of results is the same exact data as the current state,
    // do not set new state / do not cause any unnecessary rendering
    const fetchSeedVehicles = () => {
        if (JSON.stringify(automobiles) !== memoVehicles.current) {
            setVehiclesWithMemo(automobiles);
        };
    };

    // Add vehicle to vehicles array state
    const addVehicle = (vehicle: AddVehicle) => {
        setVehiclesWithMemo([
            {id: uniqueId(), ...vehicle},
            ...vehicles
        ]);
    };

    // Remove vehicle from vehicles array state
    const removeVehicle = (id: string) => setVehiclesWithMemo(vehicles.filter(vehicle => vehicle.id !== id ));

    // Remove all vehicles
    const clearVehicles = () => setVehiclesWithMemo([]);

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