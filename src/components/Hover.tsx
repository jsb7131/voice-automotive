import React, { PropsWithChildren, useState } from 'react';

type HoverControl = {
    current: boolean,
    update: React.Dispatch<React.SetStateAction<boolean>>
};

type HoverProps = {
    kind: boolean,
    children: (hovered: HoverControl) => React.ReactNode
};

export const Hover: React.FC<PropsWithChildren<HoverProps>> = ({kind, children}) => {
    const [hovered, setHovered] = useState(false);
    const hoverControl = {
        current: hovered,
        update: setHovered
    };
    return (
        <>
            {children(hoverControl)}
        </>
    );
};