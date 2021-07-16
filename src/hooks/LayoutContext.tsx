import React, { useContext, useState } from 'react';

type Layout = {
    collapsed: boolean,
    setCollapsed: (value: boolean) => void,
    collapse: (value: boolean) => void
};

const LayoutContext = React.createContext<Layout>({
    collapsed: true,
    setCollapsed: () => {},
    collapse: () => {}
});

export const useLayout = () => useContext(LayoutContext);

// Controls the layout of the dashboard
// (currently the opening and closing of the left side panel)

export const LayoutProvider: React.FC = ({ children }) => {

    const [collapsed, setCollapsed] = useState(true);

    const collapse = (value: boolean) => setCollapsed(!value);

    const LayoutControl = {
        collapsed,
        setCollapsed,
        collapse
    };

    return (
        <LayoutContext.Provider value={LayoutControl}>
            { children }
        </LayoutContext.Provider>
    );
};