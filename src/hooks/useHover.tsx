import { useState, useRef, useEffect } from 'react';

export const useHover = () => {
    const [hovered, setHovered] = useState(false);
    const targetRef = useRef(null);

    const onMouseEnter = () => {
        setHovered(true);
    };

    const onMouseLeave = () => {
        setHovered(false);
    };

    useEffect(() => {
        if (!targetRef.current) return;
        targetRef.current.addEventListener('onMouseEnter', onMouseEnter);
        targetRef.current.addEventListener('onMouseLeave', onMouseLeave);

        return () => {
            targetRef.current.removeEventListener('onMouseEnter', onMouseEnter);
            targetRef.current.removeEventListener('onMouseLeave', onMouseLeave);
        };
    }, [targetRef]);

    return {
        hovered,
        targetRef
    };
};