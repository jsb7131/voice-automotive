import React from 'react';
import { useHover } from '../hooks/useHover';

type Props = {
    click: () => void,
    innerText: string
};

export const HoverableDiv: React.FC<Props> = ({ click, innerText }) => {

    const hover = useHover();

    return (
        <div 
            ref={hover.targetRef}
            className="list-item"
            style={{background: hover.hovered ? "blue" : "inherit"}}
            onClick={click}
        >
            {innerText}
        </div>
    );
};
