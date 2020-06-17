import { useCounter } from "../components/useCounter";
import { render, act } from "@testing-library/react";
import React from "react";

test("exposes the count and increment/decrement functions", () => {
  let result;
  function TestComponent() {
    result = useCounter();
    return null;
  }
  render(<TestComponent />);
  expect(result.count).toBe(0);
  act(() => result.increment());
  expect(result.count).toBe(1);
  act(() => result.decrement());
  expect(result.count).toBe(0);
});
