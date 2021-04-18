import React, { useEffect } from 'react';
import { VehicleBlock } from './VehicleBlock';
import { useVehicles } from '../hooks/VehiclesContext';
import { useColorTray } from '../hooks/useColorTray';

type VSProps = {
    id: string,
    activeId: string,
    setActiveId: (value: string) => void,
    collapsed: boolean,
    dealerMake: string,
    dealerModel: string
};

export const VehicleStack: React.FC<VSProps> = props => {
    
    const vehicles = useVehicles();
    const colorTray = useColorTray();

    const pxSquare = props.collapsed ? 100 : 150;
    const blockFontSize = props.collapsed ? "calc(5px + 2vmin)" : "calc(10px + 2vmin)";

    useEffect(() => {
        if (props.id !== props.activeId) {
            colorTray.toggle(false);
        };
    });

    const vbClick = () => {
        colorTray.toggle(!colorTray.open);
        props.setActiveId(props.id);
    };

    return (
        <>
            <VehicleBlock
                width={pxSquare}
                height={pxSquare}
                fontSize={blockFontSize}
                bgColor={"white"}
                border={"none"}
                horiCenter
                hoverColor={"green"}
                onClick={vbClick}
                dealerMake={props.dealerMake}
                dealerModel={props.dealerModel}
            />
            {colorTray.open &&
                <div style={{width: `${pxSquare}px`, minHeight: `${pxSquare}px`}}>
                    <div
                        className="no-select-pointer"
                        style={{width: "100%", height: "20%", backgroundColor: "white"}}
                        onClick={() => vehicles.add({make: props.dealerMake, model: props.dealerModel, color: "white"})}
                    > 
                    </div>
                    <div
                        className="no-select-pointer"
                        style={{width: "100%", height: "20%", backgroundColor: "gray"}}
                        onClick={() => vehicles.add({make: props.dealerMake, model: props.dealerModel, color: "gray"})}
                    > 
                    </div>
                    <div
                        className="no-select-pointer"
                        style={{width: "100%", height: "20%", backgroundColor: "black"}}
                        onClick={() => vehicles.add({make: props.dealerMake, model: props.dealerModel, color: "black"})}
                    > 
                    </div>
                    <div
                        className="no-select-pointer"
                        style={{width: "100%", height: "20%", backgroundColor: "red"}}
                        onClick={() => vehicles.add({make: props.dealerMake, model: props.dealerModel, color: "red"})}
                    > 
                    </div>
                    <div
                        className="no-select-pointer"
                        style={{width: "100%", height: "20%", backgroundColor: "blue"}}
                        onClick={() => vehicles.add({make: props.dealerMake, model: props.dealerModel, color: "blue"})}
                    > 
                    </div>
                </div>
            }
        </>
    );
};