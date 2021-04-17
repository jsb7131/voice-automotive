import { useState } from 'react';

export const useActiveID = () => {
    const [id, setId] = useState("");
    return {
        id,
        setId
    };
};