import { GET_PRODUCTS } from "../actions/types";

const productState = {
  productList: [],
};

export const productReducer = (state = productState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      console.log("show cart ", state.productList);
      return { ...state, productList: action.payload };
    default:
      return state;
  }
};
