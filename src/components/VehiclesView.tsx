import React from 'react';
import logo from '../logo.svg';
import Panel from '../components/Panel';
import { useLayout } from '../hooks/LayoutContext';
import { useVehicles } from '../hooks/VehiclesContext';

const VehiclesView: React.FC = () => {

    const panel = useLayout();
    const vehicles = useVehicles();

    return (
        <>
            <Panel isCollapsed={panel.collapsed} />
            <button onClick={() => panel.collapse(panel.collapsed)}>Toggle Panel</button>
            <img src={logo} className="App-logo" alt="logo" />
            <button onClick={() => vehicles.add({make: "Alta", model: "Redshift"})}>Add Redshift</button>
            {vehicles.current.map(vehicle => { return <div key={vehicle.id} onClick={() => vehicles.remove(vehicle.id)}>{vehicle.make + " " + vehicle.model}</div> })}
        </>
    );
};

export default VehiclesView;