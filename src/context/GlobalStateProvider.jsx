import PropTypes from "prop-types";
import { createContext, useReducer } from "react";
import { isExist } from "../utils";
import {
  ADD_TO_CART,
  ADD_TO_WISHLIST,
  REMOVE_FROM_CART,
  REMOVE_FROM_WISHLIST,
  SET_PRODUCTS,
  SORT_BY_PRICE,
} from "./actionType";

// Initial state
const initialState = { products: [], cart: [], wishlist: [] };

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    case ADD_TO_CART:
      if (isExist(state.cart, action.payload)) {
        alert("Product already in cart");
        return state;
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, cart: true }],
      };
    case ADD_TO_WISHLIST:
      if (isExist(state.wishlist, action.payload)) {
        alert("Product already in wishlist");
        return state;
      }
      return {
        ...state,
        wishlist: [...state.wishlist, { ...action.payload, wishlist: true }],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(
          (product) => product.product_id !== action.payload,
        ),
      };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (product) => product.product_id !== action.payload,
        ),
      };
    case SORT_BY_PRICE:
      return {
        ...state,
        cart: [...state.cart].sort((a, b) => b.price - a.price),
      };
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
