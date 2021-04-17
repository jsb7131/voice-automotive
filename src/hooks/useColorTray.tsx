import { useState } from 'react';

export const useColorTray = () => {
    const [open, setOpen] = useState(false);
    const toggle = (value: boolean) => setOpen(value);
    return {
        open,
        toggle
    };
};