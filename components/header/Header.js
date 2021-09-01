import {
  HeaderStyle,
  HeaderLeft,
  HeaderRight,
  HeaderContainer,
} from "./HeaderStyle";
import Link from "next/link";
import CartIcon from "./CartIcon";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderStyle>
        <HeaderLeft>
          <Link href="/">
            <img
              src="/static/images/logo.png"
              layout="responsive"
              alt="Sabka Bazar"
            />
          </Link>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
          </ul>
        </HeaderLeft>
        <HeaderRight>
          <ul>
            <li>
              <Link href="/signIn">Signin</Link>
            </li>
            <li>
              <Link href="/register">Register</Link>
            </li>
          </ul>
          <CartIcon />
        </HeaderRight>
      </HeaderStyle>
    </HeaderContainer>
  );
}
