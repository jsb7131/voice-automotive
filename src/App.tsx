import React from 'react';
import './App.css';
import logo from './logo.svg';
import { useLayout } from './hooks/LayoutContext';
import { VehiclesProvider } from './hooks/VehiclesContext';
import { Panel } from './components/Panel';
import { VehiclesView } from './components/VehiclesView';

export default function App() {
  const panel = useLayout();
  return (
    <div className="App">
        <header className="App-header">
          <Panel isCollapsed={panel.collapsed} />
          <button onClick={() => panel.collapse(panel.collapsed)}>{panel.collapsed ? "Open Panel" : "Close Panel"}</button>
          <img src={logo} className="App-logo" alt="logo" />
          <VehiclesProvider>
            <VehiclesView/>
          </VehiclesProvider>
        </header>
    </div>
  );
}