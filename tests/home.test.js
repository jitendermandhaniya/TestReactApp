import Adapter from "enzyme-adapter-react-16";
import { configure, mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import store from "../Redux/reducers/store";
import { getData } from "../utility/datahandler";
import HomeComponent from "../components/HomeComonent";

// function loadData(callBack, url) {
//   getData(url).then((res) => {
//     callBack(res);
//   });
// }

// describe("Home Page", () => {
//   test("total number of banners must be 5", () => {
//     const callBack = (data) => {
//       console.log("responsed data", data);
//       expect(data).toBe(5);
//     };
//     loadData(callBack, "/banners");
//   });
// });

describe("Home Page", () => {
  test("Home page should mount", () => {
    const wrapper = mount(<HomeComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
