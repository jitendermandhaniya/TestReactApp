import { getData } from "../../utility/Datahandler";
import { getBanners, getProducts, getCategories } from "./actions";

export const fetchBanners = () => {
  return (dispatch) => {
    getData("/banners")
      .then((response) => {
        dispatch(getBanners(response));
      })
      .catch((error) => {
        console.log(`Some thing went wrong ${error}`);
      });
  };
};

export const fetchCategories = () => {
  return (dispatch) => {
    getData("/categories")
      .then((response) => {
        dispatch(getCategories(response));
      })
      .catch((error) => {
        console.log(`Some thing went wrong ${error}`);
      });
  };
};

export const fetchProducts = () => {
  return (dispatch) => {
    getData("/products")
      .then((response) => {
        dispatch(getProducts(response));
      })
      .catch((error) => {
        console.log(`Some thing went wrong ${error}`);
      });
  };
};
