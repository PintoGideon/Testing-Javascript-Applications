import "@testing-library/jest-dom";
import { render as rtlRender, fireEvent } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer, ConnectedCounter } from "../components/redux-app";
import React from "react";

function render(
  ui,
  { initialState, store = createStore(reducer, initialState) } = {}
) {
  return {
    ...rtlRender(<Provider store={store}>{ui}</Provider>),
    store,
  };
}

test("can render with redux with defaults", () => {
  const { getByTestId, getByText } = render(<ConnectedCounter />);
  fireEvent.click(getByText("+"));
  expect(getByTestId("count-value")).toHaveTextContent("1");
});

test("can render with redux with custom initial state", () => {
  const store = createStore(reducer, { count: 3 });
  const { getByTestId, getByText } = render(
    <Provider store={store}>
      <ConnectedCounter />
    </Provider>
  );
  fireEvent.click(getByText("-"));
  expect(getByTestId("count-value")).toHaveTextContent("2");
});

test("can decrement the value", () => {
  const { getByTestId, getByText } = render(<ConnectedCounter />, {
    initialState: { count: 3 },
  });
  fireEvent.click(getByText("-"));
  expect(getByTestId("count-value")).toHaveTextContent("2");
});
