import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, storeFactory } from "../../test/testUtils";
import Input from "./Input";
import { UnConnectedInput } from "../Input/Input";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};
setup();

describe("render", () => {
  describe("Word has been guessed", () => {
    test("renders component without error", () => {});
    test("renders input box", () => {});
    test("renders submit button", () => {});
  });
  describe("Word has not been guessed", () => {
    let wrapper;
    const initialState = { success: false };
    wrapper = setup(initialState);
    test("does not render input box", () => {
      const component = findByTestAttr(wrapper, "input-box");
      expect(component.length).toBe(1);
    });
    test("does not render submit button", () => {
      const component = findByTestAttr(wrapper, "submit-button");
      expect(component.length).toBe(1);
    });
  });
});

describe("redux props", () => {
  test("has success piece of state as prop", () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });

  test("guess word action create is a function prop", () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});

describe("guess word action creator call", () => {
  let guessWordMock;

  let wrapper;
  const guessedWord = "train";

  beforeEach(() => {
    guessWordMock = jest.fn();

    wrapper = shallow(<UnConnectedInput guessWord={guessWordMock} />);
    wrapper.setState({ currentGuess: guessedWord });

    // add value to input box
    const submitButton = findByTestAttr(wrapper, "submit-button");
    submitButton.simulate("click", {
      preventDefault() {},
    });
  });
  test("calls guessword when button is clicked", () => {
    const guessWordCallCount = guessWordMock.mock.calls.length;
    expect(guessWordCallCount).toBe(1);
  });

  test("calls guessword with input value as argument", () => {
    const guessWordArg = guessWordMock.mock.calls[0][0];
    expect(guessWordArg).toBe(guessedWord);
  });

  test("input box clears on submit", () => {
    expect(wrapper.state("currentGuess")).toBe("");
  });
});
