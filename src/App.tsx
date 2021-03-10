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

  return (
    <div className="App">
        <header className="App-header">
          <Panel isCollapsed={panel.collapsed}>
            {dealer.current.map(vehicle => 
              <VehicleBlock
                key={vehicle.id}
                width={100}
                height={100}
                BGColor={"white"}
                HoverColor={"green"}
              />
            )}
          </Panel>
          <button onClick={() => panel.collapse(panel.collapsed)}>{panel.collapsed ? "Open Panel" : "Close Panel"}</button>
          <img src={logo} className="App-logo" alt="logo" />
          <VehiclesProvider>
            <VehiclesView/>
          </VehiclesProvider>
        </header>
    </div>
  );
}