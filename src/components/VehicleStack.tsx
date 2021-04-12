import React from 'react';
import { VehicleBlock } from './VehicleBlock';
import { useVehicles } from '../hooks/VehiclesContext';
import { usePopDown } from '../hooks/usePopDown';

type VSProps = {
    collapsed: boolean,
    dealerMake: string,
    dealerModel: string
};

export const VehicleStack: React.FC<VSProps> = props => {
    
    const vehicles = useVehicles();
    const colorTray = usePopDown();

    const pxSquare = props.collapsed ? 100 : 150;
    const blockFontSize = props.collapsed ? "calc(5px + 2vmin)" : "calc(10px + 2vmin)";

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
                click={() => {
                    vehicles.add({make: props.dealerMake, model: props.dealerModel});
                    colorTray.toggle(colorTray.open);
                }}
                dealerMake={props.dealerMake}
                dealerModel={props.dealerModel}
            />
            {colorTray.open &&
                <div
                    style={{
                        width: `${pxSquare}px`,
                        minHeight: `${pxSquare}px`,
                        background: "rgba(155, 155, 155, 0.5)"
                    }}
                >
                </div>
            }
        </>
    );
};