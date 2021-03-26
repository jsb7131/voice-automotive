import React from 'react';
import styled from 'styled-components';

type VBProps = {
    width: number;
    height: number;
    fontSize: string;
    bgColor: string;
    horiCenter: boolean;
    hoverColor: string;
    last: boolean;
    click: () => void;
    dealerMake: string;
    dealerModel: string;
};

type ContainerProps = {
    width: number;
    height: number;
    fontSize: string;
    bgColor: string;
    horiCenter:boolean;
    hoverColor: string;
    last: boolean;
};

const Container = styled.div<ContainerProps>`
    width: ${p => p.width}px;
    height: ${p => p.height}px;
    font-size: ${p => p.fontSize};
    color: black;
    background: ${p => p.bgColor};
    border-radius: 10px;
    margin-top: 20px;
    margin-left: ${p => p.horiCenter ? "auto" : 0};
    margin-right: ${p => p.horiCenter ? "auto" : "20px"};
    margin-bottom: ${p => p.last ? 20 : 0}px;
    &:hover {
        color: white;
        background: ${p => p.hoverColor};
    };
`;

export const VehicleBlock: React.FC<VBProps> = ({ width, height, fontSize, bgColor, horiCenter, hoverColor, last, click, dealerMake, dealerModel }) => {
    return (
        <Container
            className="list-item"
            width={width}
            height={height}
            fontSize={fontSize}
            bgColor={bgColor}
            horiCenter={horiCenter}
            hoverColor={hoverColor}
            last={last}
            onClick={click}
        >
            {dealerMake + " " + dealerModel}
        </Container>
    );
};