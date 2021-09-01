import { useDispatch } from "react-redux";
import { CartContainer } from "./CartStyle";
import { toggleCart } from "./../../Redux/actions/actions";

function Cart() {
  const dispatch = useDispatch();
  return (
    <CartContainer>
      <div className="cartScreen">
        <div className="cartBox">
          <div className="cartHeader">
            <p>
              My Cart <span>(1 item)</span>
            </p>
            <p onClick={() => dispatch(toggleCart())}>&#x2716;</p>
          </div>
          <div className="cartContent">
            <div className="noItem">
              <p>No items in your cart</p>
              <p>your favourite items are just a click away</p>
            </div>
            {/* <div className="cartItems">
              <p>No items in your cart</p>
              <p>your favourite items are just a click away</p>
            </div> */}
          </div>
          <div className="cartFooter">
            <p>Promo code can be applied on payment page</p>
            <button>
              <span>Proceed to Checkout</span>
              <span>Rs.187 &nbsp; &gt;</span>
            </button>
          </div>
        </div>
      </div>
    </CartContainer>
  );
}

export default Cart;
