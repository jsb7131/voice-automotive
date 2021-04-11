import React from 'react';
import { VehicleBlock } from './VehicleBlock';
import { useVehicles } from '../hooks/VehiclesContext';

type VSProps = {
    collapsed: boolean,
    dealerMake: string,
    dealerModel: string
};

export const VehicleStack: React.FC<VSProps> = props => {
    const vehicles = useVehicles();
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
                click={() => vehicles.add({make: props.dealerMake, model: props.dealerModel})}
                dealerMake={props.dealerMake}
                dealerModel={props.dealerModel}
            />
            {true &&
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