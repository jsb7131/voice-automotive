import { useState } from 'react';

type SelectableElem = {id: string, selected: boolean};

export const useSelection = () => {
    const [selection, setSelection] = useState<SelectableElem[]>([]);
    const addElement = (id: string) => {
        setSelection([
            {id, selected: false},
            ...selection
        ]);
    };
    return {
        selection,
        addElement
    };
};