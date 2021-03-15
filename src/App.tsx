import React from 'react';
import './App.css';
import logo from './logo.svg';
import { useLayout } from './hooks/LayoutContext';
import { useDealer } from './hooks/useDealer';
import { Panel } from './components/Panel';
import { VehicleBlock } from './components/VehicleBlock';
import { VehiclesProvider } from './hooks/VehiclesContext';
import { VehiclesView } from './components/VehiclesView';

export default function App() {

  const panel = useLayout();
  const dealer = useDealer();
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
                BGColor={"white"}
                HoverColor={"green"}
                last={i === dealer.length - 1 ? true : false}
              />
            )}
          </Panel>
          {/* <button onClick={() => panel.collapse(panel.collapsed)}>{panelButtonText}</button> */}
          <img src={logo} className="App-logo" alt="logo" />
          <VehiclesProvider>
            <VehiclesView/>
          </VehiclesProvider>
        </header>
    </div>
  );
}