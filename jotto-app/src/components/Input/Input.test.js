import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../test/testUtils";
import Input from "./Input";

const setup = () => {
  const secretWord = "party";
  return shallow(<Input secret={secretWord} />);
};

test("Input renders without error", () => {
  const wrapper = setup();
  const inputComponent = findByTestAttr(wrapper, "component-input");
  expect(inputComponent).toBe(1);
});

test("It does not throw warning with expectProps", () => {
  checkProps(Input, { secret: "party" });
});

describe("state controlled input field", () => {
  let mockSetCurrentGuess;
  let wrapper;
  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    mockSetCurrentGuess = jest.fn();
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
    wrapper = setup();
  });
  test("state updates with value of input box", () => {
    const inputBox = findByTestAttr(wrapper, "input-box");
    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });

  test("Field is cleared upon submit button click", () => {
    const mockSetCurrentGuess = jest.fn();
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
    const wrapper = setup();
    const submit = findByTestAttr(wrapper, "submit-button");
    submit.simulate("click", {
      preventDefault() {},
    });
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });
});
