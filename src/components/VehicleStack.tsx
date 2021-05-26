import React from 'react';
import { VehicleBlock } from './VehicleBlock';
import { uniqueId } from 'lodash';

type Vehicle = {make: string, model: string, color: string};

type VSProps = {
    collapsed: boolean,
    dealerMake: string,
    dealerModel: string,
    vehicleColors: string[],
    selected: boolean,
    select: () => void,
    addVehicle: (vehicle: Vehicle) => void
};

export const VehicleStack: React.FC<VSProps> = props => {

    const pxSquare = props.collapsed ? 100 : 150;
    const blockFontSize = props.collapsed ? "calc(5px + 2vmin)" : "calc(10px + 2vmin)";

    return (
        <>
            <VehicleBlock
                width={pxSquare}
                height={pxSquare}
                fontSize={blockFontSize}
                bgColor={"white"}
                borderBoxShadow={props.selected ? "0 0 0 4px lightblue" : "none"}
                horiCenter
                hoverColor={"green"}
                onClick={props.select}
                dealerMake={props.dealerMake}
                dealerModel={props.dealerModel}
            />
            {props.selected &&
                <div style={{width: `${pxSquare}px`, marginTop: "4px"}}>
                    {props.vehicleColors.map(vehicleColor =>
                        <div
                            key={uniqueId()}
                            className="no-select-pointer"
                            style={{width: "100%", height: "20px", backgroundColor: vehicleColor}}
                            onClick={() => props.addVehicle({make: props.dealerMake, model: props.dealerModel, color: vehicleColor})}
                        >
                        </div>
                    )}
                </div>
            }
        </>
    );
};