import React from 'react';
import styled from 'styled-components';

type ChinProps = {
    width: number,
    border: string,
    borderRad: number,
    percentHeight: number
};

const Container = styled.div<ChinProps>`
    position: relative;
    left: ${p => p.border === "none" ? 0 : 1}px;
    bottom: ${p => p.percentHeight}%;
    width: ${p => p.width}px;
    height: ${p => p.percentHeight}%;
    border-radius: ${p => p.borderRad}px;
    background: inherit;
    &:hover {
        background: peru;
    };
`;

export const Chin: React.FC<ChinProps> = props => {
    return (
        <Container
            {...props}
        >
        </Container>
    );
};

