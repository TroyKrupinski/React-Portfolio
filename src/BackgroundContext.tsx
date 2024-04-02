import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the background context structure
interface BackgroundContextProps {
    backgroundColor: string;
    changeBackground: (color: string) => void;
}

// Create the context with default values
const BackgroundContext = createContext<BackgroundContextProps>({
    backgroundColor: 'transparent',
    changeBackground: () => null, // Default function that does nothing
});

interface BackgroundProviderProps {
    children: ReactNode; // Define the type for children here
}

// Create the provider component with the correct props type
export const BackgroundProvider: React.FC<BackgroundProviderProps> = ({ children }) => {
    const [backgroundColor, setBackgroundColor] = useState<string>('transparent');

    const changeBackground = (color: string) => {
        setBackgroundColor(color);
    };

    return (
        <BackgroundContext.Provider value={{ backgroundColor, changeBackground }}>
            {children}
        </BackgroundContext.Provider>
    );
};

// Create a custom hook for the context
export const useBackground = () => useContext(BackgroundContext);
