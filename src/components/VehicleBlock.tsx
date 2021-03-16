import React from 'react';
import styled from 'styled-components';
import { useVehicles } from '../hooks/VehiclesContext';

type VBProps = {
    BGColor: string;
    HoverColor: string;
    width: number;
    height: number;
    last: boolean;
    dealerMake: string;
    dealerModel: string;
};

type ContainerProps = {
    BGColor: string;
    HoverColor: string;
    width: number;
    height: number;
    last: boolean;
};

const Container = styled.div<ContainerProps>`
    width: ${p => p.width}px;
    height: ${p => p.height}px;
    color: black;
    background: ${p => p.BGColor};
    border-radius: 2px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: ${p => p.last ? 20 : 0}px;
    &:hover {
        background: ${p => p.HoverColor};
    };
`;

export const VehicleBlock: React.FC<VBProps> = ({ width, height, BGColor, HoverColor, last, dealerMake, dealerModel }) => {
    const vehicles = useVehicles();
    return (
        <Container
            className="list-item"
            width={width}
            height={height}
            BGColor={BGColor}
            HoverColor={HoverColor}
            last={last}
            onClick={() => vehicles.add({make: dealerMake, model: dealerModel})}
        >
            {dealerMake + " " + dealerModel}
        </Container>
    );
};