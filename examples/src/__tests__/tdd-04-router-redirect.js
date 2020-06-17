import "@testing-library/jest-dom";
import { render, fireEvent, wait } from "@testing-library/react";
import { Editor } from "../components/post-editor-04-router-redirect";
import React from "react";
import { savePost as mockSavePost } from "../api/index";
import { Redirect as MockRedirect } from "react-router";

jest.mock("react-router", () => {
  return {
    Redirect: jest.fn(() => null),
  };
});
jest.mock("../api", () => {
  return {
    savePost: jest.fn(() => Promise.resolve()),
  };
});

afterEach(() => {
  MockRedirect.mockClear();
  mockSavePost.mockClear();
});

test("renders a form with title,content,tags and a submit button", async () => {
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
  await wait(() => expect(MockRedirect).toHaveBeenCalledTimes(1));

  expect(MockRedirect).toHaveBeenCalledWith({ to: "/" }, {});
});
