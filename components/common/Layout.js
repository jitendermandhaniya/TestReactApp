import Head from "next/head";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Cart from "../cart/cart";
import Header from "../header/Header";
import Footer from "./Footer";
import { Container } from "./styles/GlobalStyle";

export default function Layout({ children }) {
  const [showCart, setShowCart] = useState(false);

  const cart = useSelector((state) => state.cart.showCart);
  useEffect(() => {
    setShowCart(cart);
  }, [cart]);

  return (
    <>
      <Head>
        <title>Sabka Bazaar</title>
        <link rel="shortcut icon" href="/static/favicon.png" />
        <meta
          name="description"
          content="Sabka Bazaar Online Grocery Store gets you best deals on Grocery"
        />
      </Head>
      <Header />
      <Container>{children}</Container>
      {showCart && <Cart />}

      <Footer />
    </>
  );
}
