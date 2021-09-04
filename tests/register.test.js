import Register from "../components/RegisterComponent";

import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";
import { Provider } from "react-redux";
import store from "../Redux/reducers/store";

configure({ adapter: new Adapter() });

describe("Register page", () => {
  test("Register page should render correctly", () => {
    <Provider store={store}>
      <Register />
    </Provider>;
  });

  test("Register page should should have submit input", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Register />
      </Provider>
    );
    expect(wrapper.find('input[type="submit"]'));
  });
});
