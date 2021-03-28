import React from 'react';
import styled from 'styled-components';

type PanelProps = {
    isCollapsed: boolean
};

const Container = styled.div<PanelProps>`
    height: 100%;
    min-width: ${p => p.isCollapsed ? 150 : 300}px;
    background: black;
    &:hover {
        background: darkblue;
    };
    overflow: auto;
`;

export const Panel: React.FC<PanelProps> = ({ isCollapsed, children }) => {
    return (
        <Container isCollapsed={isCollapsed}>
            { children }
        </Container>
    );
};

