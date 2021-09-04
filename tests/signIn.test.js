import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";
import { Provider } from "react-redux";
import store from "../Redux/reducers/store";
import SignIn from "../components/SignInComponent";

configure({ adapter: new Adapter() });

describe("SignInPage", () => {
  const wrapper = shallow(
    <Provider store={store}>
      <SignIn />
    </Provider>
  );

  test("SignInPage should render correctly", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <SignIn />
      </Provider>
    );
  });

  test("SignInPage should have submit input", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <SignIn />
      </Provider>
    );
    expect(wrapper.find('input[type="submit"]'));
  });
  test("SignInPage should have email", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <SignIn />
      </Provider>
    );
    expect(wrapper.find('input[name="email"]'));
  });
  test("SignInPage should have password", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <SignIn />
      </Provider>
    );
    expect(wrapper.find('input[name="password"]'));
  });
  test("SignInPage should have confirm Password", () => {
    expect(wrapper.find('input[name="confirmPassword"]'));
  });
});
