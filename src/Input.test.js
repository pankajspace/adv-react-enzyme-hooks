import React from "react";
import { shallow } from "enzyme";

import { Input } from "./Input";
import { findElement, checkProps } from "./utils";

const createWrapper = () => {
  return shallow(<Input secretWord="party" />)
}

describe("Input component", () => {
  const wrapper = createWrapper();
  const element = findElement(wrapper, "component-input");
  test("should render correctly", () => {
    expect(element.length).toBe(1);
  })
  test("should not throw warning with expected props", () => {
    const expectedProps = { secretWord: "party" };
    const propError = checkProps(Input, expectedProps);
    expect(propError).toBeUndefined();
  });
})

describe("Input components state controlled input field", () => {
  let wrapper;
  let mockSetCurrentGuess = jest.fn();
  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
    wrapper = createWrapper();
  })
  test("state changes as per input box value change", () => {
    const inputBox = findElement(wrapper, "input-box");
    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  })
  test("input box is cleared when submit button is clicked", () => {
    const submitButton = findElement(wrapper, "submit-button");
    const mockEvent = { preventDefault: jest.fn() }
    submitButton.simulate("click", mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  })
})