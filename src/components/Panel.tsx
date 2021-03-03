import React from 'react';
import styled from 'styled-components';

type PanelProps = {
    isCollapsed: boolean
};

const Container = styled.div<PanelProps>`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: ${p => p.isCollapsed ? 150 : 500}px;
    background: black;
    &:hover {
        background: darkblue;
    }
`;

export const Panel: React.FC<PanelProps> = props => {

    return (
        <Container isCollapsed={props.isCollapsed}>
            { props.children }
        </Container>
    );
};

