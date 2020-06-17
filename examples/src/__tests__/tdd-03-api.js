import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";

import { Editor } from "../components/post-editor-03-api";
import React from "react";
import { savePost as mockSavePost } from "../api/index";

jest.mock("../api", () => {
  return {
    savePost: jest.fn(() => Promise.resolve()),
  };
});

test("renders a form with an api request to post", () => {
  const fakeUser = { id: "user-1" };
  const { getByLabelText, getByText } = render(<Editor user={fakeUser} />);
  const fakePost = {
    title: "Test Title",
    content: "Test content",
    tags: ["tag1", "tag2"],
  };
  getByLabelText(/title/i).value = fakePost.title;
  getByLabelText(/content/i).value = fakePost.content;
  getByLabelText(/tags/i).value = fakePost.tags.join(", ");
  const submitButton = getByText(/submit/i);

  fireEvent.click(submitButton);

  expect(submitButton).toBeDisabled();
  expect(mockSavePost).toHaveBeenCalledTimes(1);
  expect(mockSavePost).toHaveBeenCalledWith({
    ...fakePost,
    authorId: fakeUser.id,
  });
});
