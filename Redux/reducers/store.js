import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./cartReducer";
import { productReducer } from "./productReducer";

const store = createStore(
  combineReducers({ cart: cartReducer, products: productReducer }),
  applyMiddleware(thunk)
);

export default store;
