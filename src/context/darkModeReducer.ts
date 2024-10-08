export interface DarkModeState {
    darkMode: boolean;
}

export type DarkModeAction =
    | { type: "LIGHT" }
    | { type: "DARK" }
    | { type: "TOGGLE" };

const DarkModeReducer = (state: DarkModeState, action: DarkModeAction): DarkModeState => {
    switch (action.type) {
        case "LIGHT":
            return {
                darkMode: false,
            };
        case "DARK":
            return {
                darkMode: true,
            };
        case "TOGGLE":
            return {
                darkMode: !state.darkMode,
            };
        default:
            return state;
    }
};

export default DarkModeReducer;
