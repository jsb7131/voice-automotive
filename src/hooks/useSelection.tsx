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

    const selectElement = (id: string) => {
        const newSelection = selection.map(elem => {
            if (elem.id === id && elem.selected === false) {
                return {...elem, selected: true};
            } else {
                return {...elem, selected: false};
            };
        });
        setSelection(newSelection);
    };

    return {
        selection,
        addElement,
        selectElement
    };
};