import React, { useEffect } from 'react';
import { VehicleBlock } from './VehicleBlock';
import { useVehicles } from '../hooks/VehiclesContext';
import { usePopDown } from '../hooks/usePopDown';

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
    const colorTray = usePopDown();

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
                <div
                    className="no-select-pointer"
                    onClick={() => vehicles.add({make: props.dealerMake, model: props.dealerModel})}
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