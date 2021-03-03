import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100px;
    height: 100px;
    background: white;
    border-radius: 2px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    &:hover {
        background: green;
    }
`;

export const VehicleBlock: React.FC = () => <Container></Container>;