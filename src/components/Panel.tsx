import React from 'react';
import styled from 'styled-components';

type PanelProps = {
    isCollapsed: boolean,
    closedWidth: number,
    openWidth: number
};

const Container = styled.div<PanelProps>`
    height: 100%;
    min-width: ${p => p.isCollapsed ? p.closedWidth : p.openWidth}px;
    background: black;
    &:hover {
        background: darkblue;
    };
    overflow: auto;
`;

export const Panel: React.FC<PanelProps> = ({ isCollapsed, closedWidth, openWidth, children }) => {
    return (
        <Container
            isCollapsed={isCollapsed}
            closedWidth={closedWidth}
            openWidth={openWidth}
        >
            { children }
        </Container>
    );
};

