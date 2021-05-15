import React from 'react';
import styled from 'styled-components';

type CTBProps = {
    percentHeight: number,
    fontSize: string,
    bgColor: string,
    borderRad: number,
    horiCenter?: boolean,
    hoverColor: string,
    onClick: () => void,
    text: string
};

type ContainerProps = {
    percentHeight: number,
    fontSize: string,
    bgColor: string,
    borderRad: number,
    horiCenter?: boolean,
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
    border-top-left-radius: ${p => p.borderRad}px;
    border-top-right-radius: ${p => p.borderRad}px;
    border-bottom-left-radius: ${p => p.horiCenter ? p.borderRad : 0}px;
    border-bottom-right-radius: ${p => p.horiCenter ? p.borderRad : 0}px;
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
            {props.text}
        </Container>
    );
};