import React from 'react';
import { useHover } from '../hooks/useHover';

type Props = {
    click: () => void,
    make: string,
    model: string
};

export const HoverableDiv: React.FC<Props> = ({ click, make, model }) => {

    const hover = useHover();

    return (
        <div 
            ref={hover.targetRef}
            style={{cursor: "pointer", background: hover.hovered ? "blue" : "inherit"}}
            onClick={click}
        >
            {make + " " + model}
        </div>
    );
};
