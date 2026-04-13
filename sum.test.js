import sum from "./sum.js";

describe("tests for sum fnx", () => {
  test("adds 2 + 2 equals to 4", () => {
    expect(sum(2, 2)).toBe(4);
  });

  test("adds -5 + -5 equals to -10", () => {
    expect(sum(-5, -5)).toBe(-10);
  });
});
