import React from 'react';
import styled from 'styled-components';

type VBProps = {
    BGColor: string;
}

const Container = styled.div<VBProps>`
    width: 100px;
    height: 100px;
    background: ${p => p.BGColor};
    border-radius: 2px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    &:hover {
        background: green;
    }
`;

export const VehicleBlock: React.FC<VBProps> = ({ BGColor }) => <Container BGColor={BGColor}/>;