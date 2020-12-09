import React from 'react';
import './App.css';
import LayoutProvider from './hooks/LayoutContext';
import VehiclesProvider from './hooks/VehiclesContext';
import VehiclesView from './components/VehiclesView';

function App() {
  return (
    <div className="App">
      <LayoutProvider>
        <header className="App-header">
          <VehiclesProvider>
            <VehiclesView/>
          </VehiclesProvider>
        </header>
      </LayoutProvider>
    </div>
  );
}

export default App;
