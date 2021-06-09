import React from 'react';
import './App.css';
import { useLayout } from './hooks/LayoutContext';
import { useVehicles } from './hooks/VehiclesContext';
import { useDealer } from './hooks/useDealer';
import { useSelection } from './hooks/useSelection';
import { Panel } from './components/Panel';
import { VehiclesView } from './components/VehiclesView';
import { VehicleStack } from './components/VehicleStack';

export default function App() {

  const panel = useLayout();
  const vehicles = useVehicles();
  const dealer = useDealer();
  const selectableVehicles = useSelection(dealer, false);

  const panelButtonText = panel.collapsed ? "Open" : "Close";

  return (
    <div className="App">
        <header className="App-header">
          <Panel
            isCollapsed={panel.collapsed}
            closedWidth={150}
            openWidth={300}
          >
            <button
              className="btn"
              style={{
                fontSize: `${panel.collapsed ? "10px" : "14px"}`,
                marginTop: "10px",
                cursor: "pointer"
              }}
              onClick={() => panel.collapse(panel.collapsed)}
            >
              {panelButtonText}
            </button>
            {!panel.collapsed && <h2 style={{color: "white"}}>Dealership</h2>}
            {selectableVehicles.selection.map(vehicle =>
              <VehicleStack
                key={vehicle.element.id}
                collapsed={panel.collapsed}
                dealerMake={vehicle.element.make}
                dealerModel={vehicle.element.model}
                vehicleColors={vehicle.element.colors}
                selected={vehicle.selected}
                select={() => selectableVehicles.selectElement(vehicle.element.id)}
                addVehicle={vehicles.add}
              />
            )}
          </Panel>
          <div style={{overflow: "auto"}}>
            <div id="garage-top-bar">
              <div style={{marginRight: "80px"}}>Collection</div>
              {vehicles.current.length > 0 &&
                <div
                  className="top-nav-btn no-select-pointer"
                  onClick={vehicles.clear}
                >
                  Clear
                </div>
              }
              <div
                className="top-nav-btn no-select-pointer"
                onClick={vehicles.reset}
              >
                Reset
              </div>
            </div>
            <VehiclesView/>
          </div>
        </header>
    </div>
  );
}