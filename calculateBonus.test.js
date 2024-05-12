const calculateBonus = require("./calculateBonus");

describe("Returns either the sum or 50 based on the input values", () => {
  test.each([
    [20, 25, 45, "sum less than 50"],
    [30, 25, 50, "sum exceeding 50"],
    [0, 0, 0, "zero inputs result in zero"],
    [-15, -10, -25, "negative inputs"],
    [25, 24, 49, "sum just below 50"],
    [25, 25, 50, "sum exactly 50"],
    [26, 25, 50, "sum slightly above 50"],
  ])("%p and %p: expects %p when %s", (a, b, expected, description) => {
    expect(calculateBonus(a, b)).toBe(expected);
  });
});

describe("Handling different input types", () => {
  test.each`
    a         | b                | expected     | description
    ${"18"}   | ${"42"}          | ${50}        | ${"string representations of numbers"}
    ${"13.5"} | ${"21.1"}        | ${34.6}      | ${"string representations of decimal numbers"}
    ${10.5}   | ${21.7}          | ${32.2}      | ${"floating point numbers"}
    ${15}     | ${{ value: 15 }} | ${undefined} | ${"non-numeric types resulting in undefined"}
  `("returns $expected for $description", ({ a, b, expected }) => {
    expect(calculateBonus(a, b)).toBe(expected);
  });
});
