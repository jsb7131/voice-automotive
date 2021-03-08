import React from 'react';
import './App.css';
import logo from './logo.svg';
import { useLayout } from './hooks/LayoutContext';
import { DealerProvider } from './hooks/DealerContext';
import { VehiclesProvider } from './hooks/VehiclesContext';
import { Panel } from './components/Panel';
import { VehiclesView } from './components/VehiclesView';
import { VehicleBlocks } from './components/VehicleBlocks';

export default function App() {
  const panel = useLayout();
  return (
    <div className="App">
        <header className="App-header">
          <Panel isCollapsed={panel.collapsed}>
            <DealerProvider>
              <VehicleBlocks width={100} height={100} BGColor={"white"} HoverColor={"green"} />
            </DealerProvider>
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