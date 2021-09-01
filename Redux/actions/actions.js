import {
  ADD_CART_ITEMS,
  GET_PRODUCTS,
  TOGGLE_LOADER,
  TOGGLE_CART,
} from "./types";

// Cart actions
export const toggleLoader = () => {
  return {
    type: TOGGLE_LOADER,
  };
};

// Cart actions
export const toggleCart = () => {
  return {
    type: TOGGLE_CART,
  };
};

export const addCartItem = (payload) => {
  return {
    type: ADD_CART_ITEMS,
    payload,
  };
};

// Product actions
export const getProducts = (payload) => {
  return {
    type: GET_PRODUCTS,
    payload,
  };
};
