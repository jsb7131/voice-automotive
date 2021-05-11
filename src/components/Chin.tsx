import React from 'react';
import styled from 'styled-components';

type ChinProps = {
    borderRad: number,
    percentHeight: number
};

const Container = styled.div<ChinProps>`
    width: 100%;
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

