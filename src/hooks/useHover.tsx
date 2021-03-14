import { useState, useRef, useEffect } from 'react';

export const useHover = () => {
    const [hovered, setHovered] = useState(false);
    const targetRef = useRef<HTMLDivElement>(null);

    const onMouseEnter = () => setHovered(true);
    const onMouseLeave = () => setHovered(false);

    useEffect(() => {
        const node = targetRef.current;
        if (node) {
            node.addEventListener('mouseenter', onMouseEnter);
            node.addEventListener('mouseleave', onMouseLeave);

            return () => {
                node.removeEventListener('mouseenter', onMouseEnter);
                node.removeEventListener('mouseleave', onMouseLeave);
            };
        };
    });

    return {
        hovered,
        targetRef
    };
};