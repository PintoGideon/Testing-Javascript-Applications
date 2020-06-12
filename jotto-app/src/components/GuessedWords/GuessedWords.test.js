import React from "react";
import { findByTestAttr, checkProps } from "../../test/testUtils";
import { shallow } from "enzyme";
import GuessedWords from "./GuessedWords";

const defaultProps = [
  {
    guessedWords: [
      {
        guessedWord: "train",
        letterMatchCount: 3,
      },
    ],
  },
];

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test("Does not throw warning with expected props", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("If there are no words guessed", () => {
  let wrapper = setup({ guessedWords: [] });

  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });
  test("renders instructions to guess a word", () => {
    const instructions = findByTestAttr(wrapper, "guess-instructions");
    expect(instructions.text().length).not.toBe(0);
  });
});

describe("If there are no words guesed", () => {
  const guessedWords = [
    {
      guessedWord: "train",
      letterMatchCount: 3,
    },
    {
      guessedWord: "agile",
      letterMatchCount: 1,
    },
    {
      guessedWord: "party",
      letterMatchCount: 5,
    },
  ];

  let wrapper = setup({ guessedWords });

  test("renders without error", () => {
    const guessedWordNode = findByTestAttr(wrapper, "guessed-words");
    expect(guessedWordNode.length).toBe(1);
  });
});
