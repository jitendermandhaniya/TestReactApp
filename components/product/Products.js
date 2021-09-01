import { useEffect, useState } from "react";
import { getProducts } from "../../Redux/actions/actions";
import { getData } from "../../utility/Datahandler";
import { LeftNav, ProductList, ProductsContainer } from "./ProductsStyle";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategory] = useState([]);

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products.productList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await getData("/products")
      .then((response) => {
        dispatch(getProducts(response));
        //setProducts(response);
      })
      .catch((error) => console.log("something went wrong", error));

    await getData("/categories")
      .then((response) => {
        setCategory(response);
      })
      .catch((error) => console.log("something went wrong", error));
  };
  return (
    <>
      {/* {categories.map((product) => (
        <h1 key={product.id}>{product.name}</h1>
      ))} */}
      <ProductsContainer>
        <LeftNav>
          <ul>
            {categories.map((category) => (
              <li key={category.id}>
                <a>{category.name}</a>
              </li>
            ))}
          </ul>
        </LeftNav>
        <ProductList>
          {productList.map((product) => (
            <div className="card" key={product.id}>
              <h4>{product.name}</h4>
              <div className="productContent">
                <img src={product.imageURL} alt={product.name} />
                <p className="productDescription">{product.description}</p>
                <div>
                  <p className="productDescriptionMob">{product.description}</p>
                  <div>MRP Rs.{product.price}</div>
                  <button className="BuyBtn">Buy Now</button>
                  <button className="BuyBtnTablet">
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
}
