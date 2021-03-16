import { shallow } from "enzyme";

import App from "./App";
import { findElement } from "./utils";

const createWrapper = () => {
  return shallow(<App />);
};

describe("App component", () => {
  test("renders correctly", () => {
    const wrapper = createWrapper();
    const element = findElement(wrapper, "app-component");
    expect(element.length).toBe(1);
  });
});
