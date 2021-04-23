import { useState } from 'react';

type SelectableElem = {id: string, selected: boolean};

export const useSelection = () => {
    const [selection, setSelection] = useState<SelectableElem[]>([]);
    return {
        selection,
        setSelection
    };
};