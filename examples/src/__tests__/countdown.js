import React from "react";
import { render, act } from "@testing-library/react";
import { CountDown } from "../countdown";

beforeAll(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

afterAll(() => {
  console.error.mockRestore();
});

beforeEach(() => {
  jest.clearAllMocks();
  jest.useRealTimers();
});

test("does not attempt to set state when unmounted to prevent memory leaks", () => {
  jest.useFakeTimers();
  const { unmount } = render(<CountDown />);
  unmount();
  act(() => jest.runOnlyPendingTimers());
  expect(console.error).not.toHaveBeenCalled();
});
