import React from 'react';
import { VehicleBlock } from './VehicleBlock';
import { useVehicles } from '../hooks/VehiclesContext';
import styled from 'styled-components';

type VBProps = {
    collapsed: boolean,
    last: boolean,
    dealerMake: string,
    dealerModel: string
};

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const VehicleStack: React.FC<VBProps> = props => {
    const vehicles = useVehicles();
    const pxSquare = props.collapsed ? 100 : 150;
    const blockFontSize = props.collapsed ? "calc(5px + 2vmin)" : "calc(10px + 2vmin)";
    return (
        <>
            <Container>
                <VehicleBlock
                    // key={vehicle.id}
                    width={pxSquare}
                    height={pxSquare}
                    fontSize={blockFontSize}
                    bgColor={"white"}
                    border={"none"}
                    horiCenter
                    hoverColor={"green"}
                    last={props.last}
                    click={() => vehicles.add({make: props.dealerMake, model: props.dealerModel})}
                    dealerMake={props.dealerMake}
                    dealerModel={props.dealerModel}
                />
                {true && <div style={{width: "50px", height: "50px", background: "yellow"}}></div>}
            </Container>
        </>
    );
};