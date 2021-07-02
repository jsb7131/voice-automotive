import React from 'react';
import { useVehicles } from '../hooks/VehiclesContext';
import { useSelection } from '../hooks/useSelection';
import { useVoiceVehicles } from '../hooks/useVoiceVehicles';
import { VehicleBlock } from './VehicleBlock';

export const VehiclesView: React.FC = () => {

    const vehicles = useVehicles();
    const selectableVehicles = useSelection(vehicles.current, false);
    const voiceRemove = useVoiceVehicles(
        selectableVehicles,
        selectableVehicles.selectElement,
        vehicles.remove,
        vehicles.clear,
        vehicles.reset
    );

    return (
        <>
            <div id="garage-container">
                {selectableVehicles.selection.map(vehicle => 
                    <VehicleBlock
                        key={vehicle.element.id}
                        width={400}
                        height={350}
                        fontSize={"calc(10px + 2vmin)"}
                        bgColor={vehicle.element.color}
                        borderBoxShadow={vehicle.selected ? "0 0 0 7px lightblue" : "0 0 0 1px gray"}
                        selected={vehicle.selected}
                        hoverColor={"darkblue"}
                        onClick={() => vehicles.remove(vehicle.element.id)}
                        dealerMake={vehicle.element.make}
                        dealerModel={vehicle.element.model}
                    />
                )}
            </div>
            <div style={{paddingLeft: "20px", paddingRight: "20px", paddingBottom: "20px"}}>
                <p>Microphone: {voiceRemove.listening ? 'on' : 'off'}</p>
                <button className="light-btn" onClick={voiceRemove.startListening}>Start</button>
                <p>Press the Start button and always begin by saying "Select". You can then say these commands: "Next", "Remove", "Clear", and "Reset".</p>
            </div>
        </>
    );
};