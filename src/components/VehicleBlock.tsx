import React from 'react';
import styled from 'styled-components';

type VBProps = {
    BGColor: string;
    HoverColor: string;
    width: number;
    height: number;
    last: boolean;
};

const Container = styled.div<VBProps>`
    width: ${p => p.width}px;
    height: ${p => p.height}px;
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

export const VehicleBlock: React.FC<VBProps> = ({ width, height, BGColor, HoverColor, last }) =>
    <Container
        width={width}
        height={height}
        BGColor={BGColor}
        HoverColor={HoverColor}
        last={last}
    />
;