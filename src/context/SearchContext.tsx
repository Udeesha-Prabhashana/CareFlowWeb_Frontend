import { createContext, useReducer, ReactNode, Dispatch } from "react";

// Define types for state and actions
interface SearchState {
  doctor: string | undefined;
  specialization: string | undefined;
  date: Date | undefined;
  options: {
    adult: number | undefined;
    children: number | undefined;
    room: number | undefined;
  };
}

type SearchAction =
  | { type: "NEW_SEARCH"; payload: SearchState }
  | { type: "RESET_SEARCH" };

// Define the initial state
const INITIAL_STATE: SearchState = {
  doctor: undefined,
  specialization: undefined,
  date: undefined,
  options: {
    adult: undefined,
    children: undefined,
    room: undefined,
  },
};

// Extend the context to include dispatch
interface SearchContextProps extends SearchState {
  dispatch: Dispatch<SearchAction>;
}

// Create the context with the extended type
export const SearchContext = createContext<SearchContextProps>({
  ...INITIAL_STATE,
  dispatch: () => undefined,
});

// Reducer function to handle state changes
const SearchReducer = (state: SearchState, action: SearchAction): SearchState => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return INITIAL_STATE;
    default:
      return state;
  }
};

// Provider component to wrap around components that need access to this context
interface SearchContextProviderProps {
  children: ReactNode;
}

export const SearchContextProvider: React.FC<SearchContextProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

  return (
    <SearchContext.Provider value={{ ...state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};
