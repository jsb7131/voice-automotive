import { useState } from 'react';

type SelectableElem = {id: string, selected: boolean};

export const useSelection = (manySelect: boolean) => {

    const [selection, setSelection] = useState<SelectableElem[]>([]);

    const addElement = (id: string) => {
        setSelection([
            {id, selected: false},
            ...selection
        ]);
    };

    const selectOne = (id: string) => {
        const newSelection = selection.map(elem => {
            if (elem.id === id && elem.selected === false) {
                return {...elem, selected: true};
            } else {
                return {...elem, selected: false};
            };
        });
        return newSelection;
    };

    const selectMany = (id: string) => {
        const newSelection = selection.map(elem => {
            if (elem.id === id && elem.selected === false) {
                return {...elem, selected: true};
            } else if (elem.id === id && elem.selected === true) {
                return {...elem, selected: false};
            } else {
                return elem;
            };
        });
        return newSelection;
    };

    const selectElement = (id: string) => {
        let selectedElems: SelectableElem[];
        if (manySelect === false) {
            selectedElems = selectOne(id);
        } else {
            selectedElems = selectMany(id);
        };
        setSelection(selectedElems);
    };

    return {
        selection,
        addElement,
        selectElement
    };
};