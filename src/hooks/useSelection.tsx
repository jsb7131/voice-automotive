import { useState, useEffect } from 'react';

type ObjWithID = {id: string, [key: string]: any};
type SelectableElement = {element: ObjWithID, selected: boolean};

// Incoming item object in array must have an id property (type ObjWithID defined above)
export const useSelection = (items: ObjWithID[], manySelect: boolean) => {

    const [selection, setSelection] = useState<SelectableElement[]>([]);

    useEffect(() => {
        const SelectableElements: SelectableElement[] = [];
        items.forEach(item =>
            SelectableElements.push({
                element: item,
                selected: false
            })
        );
        setSelection(SelectableElements);
    }, [items]);

    const selectOne = (id: string) => {
        const newSelection = selection.map(elem => {
            if (elem.element.id === id && elem.selected === false) {
                return {...elem, selected: true};
            } else {
                return {...elem, selected: false};
            };
        });
        return newSelection;
    };

    const selectMany = (id: string) => {
        const newSelection = selection.map(elem => {
            if (elem.element.id === id && elem.selected === false) {
                return {...elem, selected: true};
            } else if (elem.element.id === id && elem.selected === true) {
                return {...elem, selected: false};
            } else {
                return elem;
            };
        });
        return newSelection;
    };

    const selectElement = (id: string) => {
        let selectedElems: SelectableElement[];
        if (manySelect === false) {
            selectedElems = selectOne(id);
        } else {
            selectedElems = selectMany(id);
        };
        setSelection(selectedElems);
    };

    return {
        selection,
        selectElement
    };
};