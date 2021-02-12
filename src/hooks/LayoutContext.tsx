import React, { useContext, useState } from 'react';

type Layout = {
    collapsed: boolean,
    collapse: (value: boolean) => void
};

const LayoutContext = React.createContext<Layout>({
    collapsed: false,
    collapse: () => {}
});

const LayoutProvider: React.FC = ({ children }) => {

    const [collapsed, setCollapsed] = useState(false);

    const collapse = (value: boolean) => setCollapsed(!value);

    const LayoutControl = {
        collapsed: collapsed,
        collapse: collapse
    };

    return (
        <LayoutContext.Provider value={LayoutControl}>
            { children }
        </LayoutContext.Provider>
    );
};

export default LayoutProvider;

export const useLayout = () => useContext(LayoutContext);