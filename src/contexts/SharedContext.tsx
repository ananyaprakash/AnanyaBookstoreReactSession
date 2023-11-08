import React, { createContext, useContext, ReactNode } from 'react';

// Define the shape of your shared context data
interface SharedContextData {
    sharedValue: string;
    setSharedValue: (value: string) => void;
}

// Create the context with an initial value
const SharedContext = createContext<SharedContextData | undefined>(undefined);

// Create a custom hook to access the context
export function useSharedContext() {
    const context = useContext(SharedContext);
    if (!context) {
        throw new Error('useSharedContext must be used within a SharedProvider');
    }
    return context;
}

// Create a provider component to wrap your app
interface SharedProviderProps {
    children: ReactNode;
}

export function SharedProvider({ children }: SharedProviderProps) {
    const [sharedValue, setSharedValue] = React.useState('Initial Value');

    return (
        <SharedContext.Provider value={{ sharedValue, setSharedValue }}>
            {children}
        </SharedContext.Provider>
    );
}