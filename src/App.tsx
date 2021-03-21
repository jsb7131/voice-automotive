import React from 'react';
import './App.css';
import { useLayout } from './hooks/LayoutContext';
import { useDealer } from './hooks/useDealer';
import { useVehicles } from './hooks/VehiclesContext';
import { Panel } from './components/Panel';
import { VehicleBlock } from './components/VehicleBlock';
import { VehiclesView } from './components/VehiclesView';

export default function App() {

  const panel = useLayout();
  const dealer = useDealer();
  const vehicles = useVehicles();
  const pxSquare = panel.collapsed ? 100 : 150;
  // const panelButtonText = panel.collapsed ? "Open Panel" : "Close Panel";

  return (
    <div className="App">
        <header className="App-header">
          <Panel layoutCollapsed={panel.collapsed} updateLayout={panel.collapse}>
            {/* <button>{panelButtonText}</button> */}
            {!panel.collapsed && <h2>Dealership</h2>}
            {dealer.map((vehicle, i) => 
              <VehicleBlock
                key={vehicle.id}
                width={pxSquare}
                height={pxSquare}
                bgColor={"white"}
                horiCenter={true}
                hoverColor={"green"}
                last={i === dealer.length - 1 ? true : false}
                click={() => vehicles.add({make: vehicle.make, model: vehicle.model})}
                dealerMake={vehicle.make}
                dealerModel={vehicle.model}
              />
            )}
          </Panel>
          {/* <button onClick={() => panel.collapse(panel.collapsed)}>{panelButtonText}</button> */}
          <div style={{overflow: "auto"}}>
            <div id="garage-top-bar">
              {vehicles.current.length > 0 && <button onClick={vehicles.clear}>Clear</button>}
              <button onClick={vehicles.reset}>Reset</button>
            </div>
            <VehiclesView/>
          </div>
        </header>
    </div>
  );
}