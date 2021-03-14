import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useHover } from '../hooks/useHover';

type PanelProps = {
    updateLayout: (value: boolean) => void
};

type ContainerProps = {
    isCollapsed: boolean
};

const Container = styled.div<ContainerProps>`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: ${p => !p.isCollapsed ? 150 : 350}px;
    background: black;
    &:hover {
        background: darkblue;
    };
    overflow: auto;
`;

export const Panel: React.FC<PanelProps> = ({ updateLayout, children }) => {
    const hover = useHover();
    useEffect(() => updateLayout(hover.hovered));
    return (
        <Container ref={hover.targetRef} isCollapsed={hover.hovered}>
            { children }
        </Container>
    );
};

