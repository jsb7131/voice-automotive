import { useState, useEffect } from 'react';
import { useDealer } from './useDealer';

type Colors = string[];
type Vehicle = {make: string, model: string, colors: Colors};
type SelectableElem = {id: string, selected: boolean, vehicle: Vehicle};

export const useSelection = (manySelect: boolean) => {

    const [selection, setSelection] = useState<SelectableElem[]>([]);

    const dealer = useDealer();

    useEffect(() => {
        const selects: SelectableElem[] = [];
        dealer.forEach(vehicle =>
          selects.push({
            id: vehicle.id,
            selected: false,
            vehicle: {make: vehicle.make, model: vehicle.model, colors: vehicle.colors}
          })
        );
        setSelection(selects);
      }, [dealer]);

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
        selectElement
    };
};