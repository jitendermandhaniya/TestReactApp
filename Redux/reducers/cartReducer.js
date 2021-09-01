import { TOGGLE_CART } from "../actions/types";

const cartState = {
  showCart: false,
};

export const cartReducer = (state = cartState, action) => {
  switch (action.type) {
    case TOGGLE_CART:
      console.log("show cart ", state.showCart);
      return { ...state, showCart: !state.showCart };
    default:
      return state;
  }
};
