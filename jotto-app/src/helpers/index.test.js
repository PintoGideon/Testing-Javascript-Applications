import { getLetterMatchCount } from "./";

describe("Get Letter Match Count", () => {
  const secretWord = "party";
  test("returns correct count when there are no matching letters", () => {
    const letterMatchCount = getLetterMatchCount("bones", secretWord);
    expect(letterMatchCount).toBe(0);
  });
  test("returns the correct count when there are 3 match letters", () => {
    const letterMatchCount = getLetterMatchCount("tpar", secretWord);
    expect(letterMatchCount).toBe(4);
  });
  test("returns correct count when there are duplicate letters in the guess", () => {
    const letterMatchCount = getLetterMatchCount("parka", secretWord);
    expect(letterMatchCount).toBe(3);
  });
});
