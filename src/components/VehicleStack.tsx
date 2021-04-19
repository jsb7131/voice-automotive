import React, { useEffect } from 'react';
import { VehicleBlock } from './VehicleBlock';
import { useVehicles } from '../hooks/VehiclesContext';
import { useColorTray } from '../hooks/useColorTray';
import { uniqueId } from 'lodash';

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

    const vehicleColors = ["white", "gray", "black", "red", "blue"];

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
                    {vehicleColors.map(vehicleColor =>
                        <div
                            key={uniqueId()}
                            className="no-select-pointer"
                            style={{width: "100%", height: "20%", backgroundColor: vehicleColor}}
                            onClick={() => vehicles.add({make: props.dealerMake, model: props.dealerModel, color: vehicleColor})}
                        >
                        </div>
                    )}
                </div>
            }
        </>
    );
};