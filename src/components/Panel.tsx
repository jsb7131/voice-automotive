import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useHover } from '../hooks/useHover';

type PanelProps = {
    layoutCollapsed: boolean,
    updateLayout: (value: boolean) => void
};

type ContainerProps = {
    isCollapsed: boolean
};

const Container = styled.div<ContainerProps>`
    height: 100%;
    min-width: ${p => p.isCollapsed ? 150 : 300}px;
    background: black;
    &:hover {
        background: darkblue;
    };
    overflow: auto;
`;

export const Panel: React.FC<PanelProps> = ({ layoutCollapsed, updateLayout, children }) => {
    const hover = useHover();
    useEffect(() => updateLayout(hover.hovered));
    return (
        <Container ref={hover.targetRef} isCollapsed={layoutCollapsed}>
            { children }
        </Container>
    );
};

