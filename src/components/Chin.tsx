import React from 'react';
import styled from 'styled-components';

type ChinProps = {
    borderRad: number,
    percentHeight: number,
    title: string
};

const Container = styled.div<ChinProps>`
    display: flex;
    align-items: center;
    width: 100%;
    height: ${p => p.percentHeight}%;
    border-top: 1px solid gray;
    border-bottom-left-radius: ${p => p.borderRad}px;
    border-bottom-right-radius: ${p => p.borderRad}px;
    color: gray;
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
            <div style={{marginLeft: "20px"}}>{props.title}</div>
        </Container>
    );
};

