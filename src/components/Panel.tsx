import React from 'react';
import styled from 'styled-components';

type PanelProps = {
    isCollapsed: boolean,
    closedWidth: number,
    openWidth: number
};

const Container = styled.div<PanelProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 0;
    bottom: 0;
    min-width: ${p => p.isCollapsed ? p.closedWidth : p.openWidth}px;
    background: black;
    &:hover {
        background: darkblue;
    };
    overflow: auto;
    padding-bottom: 20px;
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

