import PropTypes from "prop-types";
import { createContext, useReducer } from "react";
import { SET_PRODUCTS } from "./actionType";

// Initial state
const initialState = { products: [] };

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

// Create context
const GlobalStateContext = createContext(initialState);

// Provider component
export default function GlobalStateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
}

GlobalStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { GlobalStateContext };
