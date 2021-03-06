import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { bannerReducer } from "./bannerReducers";
import { cartReducer } from "./cartReducer";
import { categoryReducer } from "./categoryReducer";
import { productReducer } from "./productReducer";
import { userReducer } from "./userReducer";

const store = createStore(
  combineReducers({
    cart: cartReducer,
    products: productReducer,
    categories: categoryReducer,
    banners: bannerReducer,
    user: userReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
