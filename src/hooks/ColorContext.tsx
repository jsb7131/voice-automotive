import React, { useState, useContext } from 'react';

type Color = {
    color: string,
    setColor: (color: string) => void
};

const ColorContext = React.createContext<Color>({
    color: "",
    setColor: () => {}
});

export const useColor = () => useContext(ColorContext);

export const ColorProvider: React.FC = ({ children }) => {
    const [color, setColor] = useState("white");
    const colorControl = {
        color,
        setColor
    };
    return (
        <ColorContext.Provider value={colorControl}>
            { children }
        </ColorContext.Provider>
    );
};