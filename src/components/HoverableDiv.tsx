import React from 'react';
import { useHover } from '../hooks/useHover';

type Props = {
    click: () => void,
    innerHTML: string
};

export const HoverableDiv: React.FC<Props> = ({ click, innerHTML }) => {

    const hover = useHover();

    return (
        <div 
            ref={hover.targetRef}
            style={{cursor: "pointer", background: hover.hovered ? "blue" : "inherit"}}
            onClick={click}
        >
            {innerHTML}
        </div>
    );
};
