import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer, ConnectedCounter } from "../components/redux-app";
import React from "react";

test("can render redux with defaults", () => {
  const store = createStore(reducer);
  const { getByTestId, getByText } = render(
    <Provider store={store}>
      <ConnectedCounter />
    </Provider>
  );
  fireEvent.click(getByText("+"));
  expect(getByTestId("count-value")).toHaveTextContent("1");
});
