import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Editor } from "../components/post-editor-01-markup";
import React from "react";

test("renders a form with title, content, tags, and a submit button", () => {
  const { getByLabelText, getByText } = render(<Editor />);
  getByLabelText(/title/i);
  getByLabelText(/content/i);
  getByLabelText(/tags/i);
  getByText(/submit/i);
});
