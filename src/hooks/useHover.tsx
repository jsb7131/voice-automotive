import { useState, useRef, useEffect } from 'react';

export const useHover = () => {
    const [hovered, setHovered] = useState(false);
    const targetRef = useRef<HTMLDivElement>(null);

    const onMouseEnter = () => {
        setHovered(true);
    };

    const onMouseLeave = () => {
        setHovered(false);
    };

    useEffect(() => {
        let curRef = targetRef.current;
        curRef?.addEventListener('onMouseEnter', onMouseEnter);
        curRef?.addEventListener('onMouseLeave', onMouseLeave);

        return () => {
            curRef?.removeEventListener('onMouseEnter', onMouseEnter);
            curRef?.removeEventListener('onMouseLeave', onMouseLeave);
        };
    }, [targetRef]);

    return {
        hovered,
        targetRef
    };
};