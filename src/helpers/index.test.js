import { getMatchedLettersCount } from "./index";

describe("Testing getMatchedLettersCount", () => {
  it("should return zero when no matching letters in words", () => {
    expect(getMatchedLettersCount("abcd", "test")).toBe(0);
  });
  it("should return correct count of matching letters found in words", () => {
    expect(getMatchedLettersCount("best", "test")).toBe(3);
  });
});
