import React from 'react';
import styled from 'styled-components';

type CTBProps = {
    percentHeight: number,
    fontSize: string,
    bgColor: string,
    borderRad: number,
    hoverColor: string,
    onClick: () => void,
    dealerMake: string,
    dealerModel: string
};

type ContainerProps = {
    percentHeight: number,
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
    height: ${p => p.percentHeight}%;
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