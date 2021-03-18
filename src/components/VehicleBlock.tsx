import React from 'react';
import styled from 'styled-components';

type VBProps = {
    inline: boolean;
    bgColor: string;
    horiCenter: boolean;
    hoverColor: string;
    width: number;
    height: number;
    last: boolean;
    click: () => void;
    dealerMake: string;
    dealerModel: string;
};

type ContainerProps = {
    inline: boolean;
    bgColor: string;
    horiCenter:boolean;
    hoverColor: string;
    width: number;
    height: number;
    last: boolean;
};

const Container = styled.div<ContainerProps>`
    display: ${p => p.inline ? "inline-block" : "block"};
    width: ${p => p.width}px;
    height: ${p => p.height}px;
    color: black;
    background: ${p => p.bgColor};
    border-radius: 2px;
    margin-top: 20px;
    margin-left: ${p => p.horiCenter ? "auto" : "20px"};
    margin-right: ${p => p.horiCenter ? "auto" : "20px"};
    margin-bottom: ${p => p.last ? 20 : 0}px;
    &:hover {
        color: white;
        background: ${p => p.hoverColor};
    };
`;

export const VehicleBlock: React.FC<VBProps> = ({ inline, width, height, bgColor, horiCenter, hoverColor, last, click, dealerMake, dealerModel }) => {
    return (
        <Container
            className="list-item"
            inline={inline}
            width={width}
            height={height}
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