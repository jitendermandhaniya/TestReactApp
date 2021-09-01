import { useDispatch } from "react-redux";
import { CartIconStyle } from "./HeaderStyle";
import { toggleCart } from "./../../Redux/actions/actions";

export default function CartIcon() {
  const dispatch = useDispatch();
  return (
    <CartIconStyle onClick={() => dispatch(toggleCart())}>
      <img src="/static/images/cart.svg" alt="Cart" />
      <p>{0} items</p>
    </CartIconStyle>
  );
}
