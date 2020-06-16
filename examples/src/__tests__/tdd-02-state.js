import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";

import { Editor } from "../components/post-editor-02-state";
import React from "react";

test("renders a form with title, content, tags, and a submit button", () => {
  const { getByLabelText, getByText } = render(<Editor />);
  getByLabelText(/title/i);
  getByLabelText(/content/i);
  getByLabelText(/tags/i);
  const submitButton = getByText(/submit/i);

  fireEvent.click(submitButton);

  expect(submitButton).toBeDisabled();
});
