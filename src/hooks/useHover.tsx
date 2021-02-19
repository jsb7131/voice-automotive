import { useState, useRef, useEffect } from 'react';

export const useHover = () => {
    const [hovered, setHovered] = useState(false);
    const targetRef = useRef<HTMLDivElement>(null);

    const onMouseOver = () => setHovered(true);
    const onMouseOut = () => setHovered(false);

    useEffect(() => {
        const node = targetRef.current;
        if (node) {
            node.addEventListener('mouseover', onMouseOver);
            node.addEventListener('mouseout', onMouseOut);

            return () => {
                node.removeEventListener('mouseover', onMouseOver);
                node.removeEventListener('mouseout', onMouseOut);
            };
        };
    }, []);

    return {
        hovered,
        targetRef
    };
};