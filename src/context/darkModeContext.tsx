import React, { createContext, useReducer, Dispatch, ReactNode } from "react";
import DarkModeReducer, { DarkModeAction, DarkModeState } from "./darkModeReducer";

const INITIAL_STATE: DarkModeState = {
    darkMode: false,
};

interface DarkModeContextProps {
    darkMode: boolean;
    dispatch: Dispatch<DarkModeAction>;
}

export const DarkModeContext = createContext<DarkModeContextProps | undefined>(undefined);

interface DarkModeProviderProps {
    children: ReactNode;
}

export const DarkModeContextProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

    return (
        <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
            {children}
        </DarkModeContext.Provider>
    );
};
