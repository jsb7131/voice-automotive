import { useState } from 'react';

export const usePopDown = () => {
    const [open, setPopDown] = useState(false);
    const toggle = (value: boolean) => setPopDown(!value);
    return {
        open,
        toggle
    };
};