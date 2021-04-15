import React from 'react';
import styled from 'styled-components';

type VBProps = {
    width: number,
    height: number,
    fontSize: string,
    bgColor: string,
    border: string,
    horiCenter?: boolean,
    hoverColor: string,
    onClick: () => void,
    dealerMake: string,
    dealerModel: string
};

type ContainerProps = {
    width: number,
    height: number,
    fontSize: string,
    bgColor: string,
    border: string,
    horiCenter?: boolean,
    hoverColor: string
};

const Container = styled.div<ContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: ${p => p.width}px;
    min-height: ${p => p.height}px;
    height: ${p => p.height}px;
    font-size: ${p => p.fontSize};
    color: black;
    background: ${p => p.bgColor};
    border: ${p => p.border};
    border-radius: 10px;
    margin-top: 20px;
    margin-right: ${p => p.horiCenter ? "0" : "20px"};
    &:hover {
        color: white;
        background: ${p => p.hoverColor};
    };
`;

export const VehicleBlock: React.FC<VBProps> = props => {
    return (
        <Container
            className="no-select-pointer"
            {...props}
        >
            {props.dealerMake + " " + props.dealerModel}
        </Container>
    );
};