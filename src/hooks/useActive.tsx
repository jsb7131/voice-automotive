import { useState } from 'react';

export const useActiveID = () => {
    const [id, setId] = useState("");
    // useMemo?
    return {
        id,
        setId
    };
};