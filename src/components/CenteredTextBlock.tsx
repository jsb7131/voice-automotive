import React from 'react';
import styled from 'styled-components';

type CTBProps = {
    height: number,
    fontSize: string,
    bgColor: string,
    borderRad: number,
    hoverColor: string,
    onClick: () => void,
    dealerMake: string,
    dealerModel: string
};

type ContainerProps = {
    height: number,
    fontSize: string,
    bgColor: string,
    borderRad: number,
    hoverColor: string
};

const Container = styled.div<ContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    min-height: ${p => p.height}px;
    height: ${p => p.height}px;
    font-size: ${p => p.fontSize};
    color: ${p => p.bgColor === "black" || p.bgColor === "blue" ? "white" : "black"};
    background: ${p => p.bgColor};
    border-radius: ${p => p.borderRad}px;
    &:hover {
        color: white;
        background: ${p => p.hoverColor};
    };
`;

export const CenteredTextBlock: React.FC<CTBProps> = props => {
    return (
        <Container
            className="no-select-pointer"
            {...props}
        >
            {props.dealerMake + " " + props.dealerModel}
        </Container>
    );
};

// Put this on top of Chin inside the VehicleBlock Container