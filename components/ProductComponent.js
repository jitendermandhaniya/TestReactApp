import {
  CategoryDrop,
  LeftNav,
  ProductList,
  ProductsContainer,
} from "../styles/ProductsStyle";

import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/Link";
import { toast } from "react-toastify";

import { fetchCategories, fetchProducts } from "../Redux/actions/thunk";
import { addCartItem } from "../Redux/actions/actions";

const ProductComponent = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products.productList);
  const categoryList = useSelector((state) => state.categories.categoryList);

  const router = useRouter();
  const categoryId = router.query.categoryId;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (categoryList.length === 0) dispatch(fetchCategories());
    if (productList.length === 0) dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    if (categoryId && categoryId !== "All")
      setProducts(
        productList?.filter((product) => product.category === categoryId)
      );
    else setProducts(productList);
  }, [productList, categoryId]);

  const cartHandler = (item) => {
    dispatch(addCartItem(item));
    toast.success("Item added to cart");
  };

  return (
    <>
      <ProductsContainer>
        <CategoryDrop>
          <select
            value={categoryId || "All"}
            onChange={(e) => {
              router.push(`/products/${e.target.value}`);
            }}
          >
            <option value="All">--ALL--</option>
            {categoryList
              .filter((category) => category.enabled)
              .map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
          </select>
        </CategoryDrop>
        <LeftNav>
          <ul>
            {categoryList
              .filter((category) => category.enabled)
              .map((category) => (
                <li key={category.id}>
                  <Link href={"/products/" + category.id}>{category.name}</Link>
                </li>
              ))}
          </ul>
        </LeftNav>

        <ProductList>
          {products.map((product) => (
            <div className="card" key={product.id}>
              <h4>{product.name}</h4>
              <div className="productContent">
                <img src={product.imageURL} alt={product.name} />
                <p className="productDescription">{product.description}</p>
                <div>
                  <p className="productDescriptionMob">{product.description}</p>
                  <div>MRP Rs.{product.price}</div>
                  <button
                    className="BuyBtn"
                    onClick={() => cartHandler(product)}
                  >
                    Buy Now
                  </button>
                  <button
                    className="BuyBtnTablet"
                    onClick={() => cartHandler(product)}
                  >
                    Buy Now @ Rs.{product.price}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </ProductList>
      </ProductsContainer>
    </>
  );
};

export default ProductComponent;
