import React from 'react';
import styled from 'styled-components';

type BSProps = {
    width: number,
    height: number,
    border: string
};

type ContainerProps = {
    width: number,
    height: number,
    border: string
};

const Container = styled.div<ContainerProps>`
    width: ${p => p.width}px;
    min-height: ${p => p.height}px;
    height: ${p => p.height}px;
    border: ${p => p.border};
    border-radius: 10px;
`;

export const BorderSelect: React.FC<BSProps> = props => <Container {...props} />;