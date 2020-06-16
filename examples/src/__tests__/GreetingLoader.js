import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import { GreetingLoader } from "../components/GreetingLoader";
import "@testing-library/jest-dom";

test("loads greeting on click", async () => {
  const mockLoadGreeting = jest.fn((subject) =>
    Promise.resolve({ data: { greeting: `Hi ${subject}` } })
  );
  const { getByLabelText, getByText, getByTestId } = render(
    <GreetingLoader loadGreeting={mockLoadGreeting} />
  );
  const nameInput = getByLabelText(/name/i);
  const loadButton = getByText(/load/i);
  nameInput.value = "Gideon";
  fireEvent.click(loadButton);
  expect(mockLoadGreeting).toHaveBeenCalledTimes(1);
  expect(mockLoadGreeting).toHaveBeenCalledWith("Gideon");
  await wait(() =>
    expect(getByTestId("greeting")).toHaveTextContent(`Hi Gideon`)
  );
});
