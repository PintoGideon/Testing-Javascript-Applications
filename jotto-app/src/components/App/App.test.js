import React from "react";
import { UnConnectedApp } from "./App";
import { shallow } from "enzyme";
import { getSecretWord } from "../../actions";

const setup = (state = {}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<App store={store} />)
    .dive()
    .dive();
  return wrapper;
};

test("get secret word runs on App mount", () => {
  const getSecretWordMock = jest.fn();

  // Setup the app component with getSecretWord as the getSecretWord prop

  const props = {
    getSecretWord: getSecretWordMock,
    success: false,
    guessedWords: [],
  };
  const wrapper = shallow(<UnConnectedApp {...props} />);

  // run lifecycle method

  wrapper.instance().componentDidMount();
  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
  expect(getSecretWordCallCount).toBe(1);
});
