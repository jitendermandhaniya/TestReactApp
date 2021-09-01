import { TOGGLE_LOADER } from "../actions/types";

const loaderState = {
  showLoader: false,
};

export const cartReducer = (state = loaderState, action) => {
  switch (action.type) {
    case TOGGLE_LOADER:
      console.log("show cart ", state.showLoader);
      return { ...state, showLoader: !state.showLoader };
    default:
      return state;
  }
};
