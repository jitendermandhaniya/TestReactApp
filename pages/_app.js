import { Provider } from "react-redux";
import store from "./../Redux/reducers/store";
import { GlobalStyles } from "../components/common/styles/GlobalStyle";
import Layout from "../components/common/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
