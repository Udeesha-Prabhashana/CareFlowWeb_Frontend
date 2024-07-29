import { createContext, useReducer, ReactNode, Dispatch } from "react";

// Define types for state and actions
interface ScriptState {
  scripts: string[]; // Array of script URLs to be managed
}

type ScriptAction =
  | { type: "ADD_SCRIPT"; payload: string }
  | { type: "REMOVE_SCRIPT"; payload: string }
  | { type: "CLEAR_SCRIPTS" };

// Define the initial state
const INITIAL_STATE: ScriptState = {
  scripts: [],
};

// Extend the context to include dispatch
interface ScriptContextProps extends ScriptState {
  dispatch: Dispatch<ScriptAction>;
}

// Create the context with the extended type
export const ScriptContext = createContext<ScriptContextProps>({
  ...INITIAL_STATE,
  dispatch: () => undefined,
});
