import React from 'react';
import './App.css';
import { useLayout } from './hooks/LayoutContext';
import { useDealer } from './hooks/useDealer';
import { useVehicles } from './hooks/VehiclesContext';
import { Panel } from './components/Panel';
import { VehiclesView } from './components/VehiclesView';
import { VehicleStack } from './components/VehicleStack';
import { useActiveID } from './hooks/useActive';

export default function App() {

  const panel = useLayout();
  const dealer = useDealer();
  const vehicles = useVehicles();
  const active = useActiveID();
  const panelButtonText = panel.collapsed ? "Open" : "Close";

  return (
    <div className="App">
        <header className="App-header">
          <Panel isCollapsed={panel.collapsed} closedWidth={150} openWidth={300}>
            <button
              style={{fontSize: `${panel.collapsed ? "10px" : "14px"}`, marginTop: "10px"}}
              onClick={() => panel.collapse(panel.collapsed)}
            >
              {panelButtonText}
            </button>
            {!panel.collapsed && <h2 style={{color: "white"}}>Dealership</h2>}
            {dealer.map(vehicle =>
              <VehicleStack
                key={vehicle.id}
                id={vehicle.id}
                activeId={active.id}
                setActiveId={active.setId}
                collapsed={panel.collapsed}
                dealerMake={vehicle.make}
                dealerModel={vehicle.model}
                vehicleColors={vehicle.colors}
                addVehicle={vehicles.add}
              />
            )}
          </Panel>
          <div style={{overflow: "auto"}}>
            <div id="garage-top-bar">
              <div style={{marginRight: "80px"}}>Collection</div>
              {vehicles.current.length > 0 && <div className="top-nav-btn no-select-pointer" onClick={vehicles.clear}>Clear</div>}
              <div className="top-nav-btn no-select-pointer" onClick={vehicles.reset}>Reset</div>
            </div>
            <VehiclesView/>
          </div>
        </header>
    </div>
  );
}