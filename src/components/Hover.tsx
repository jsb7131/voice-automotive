import React, { PropsWithChildren, useState } from 'react';

type HoverControl = {
    current: boolean,
    update: React.Dispatch<React.SetStateAction<boolean>>
};

type Props = {
    children: (hovered: HoverControl) => React.ReactNode
};

export const Hover: React.FC<PropsWithChildren<Props>> = ({children}) => {

    const [hovered, setHovered] = useState(false);

    const hoverControl = {
        current: hovered,
        update: setHovered
    };

    // Return a children render function so that the state of this component
    // can be accessed by its children / passed in as props
    return (
        <>
            {children(hoverControl)}
        </>
    );
};