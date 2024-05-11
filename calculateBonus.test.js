const calculateBonus = require("./calculateBonus");

describe("Basic functionality", () => {
  test("Returns sum when sum of values is less than 50", () => {
    expect(calculateBonus(20, 25)).toBe(45);
  });

  test("Returns 50 when sum of values exceeds 50", () => {
    expect(calculateBonus(30, 25)).toBe(50);
  });
});

describe("Handling different input types", () => {
  test("Accurately calculates sum with floating point numbers", () => {
    expect(calculateBonus(10.5, 21.7)).toBe(32.2);
  });

  test("Returns correct sum or 50 when values are numeric strings", () => {
    expect(calculateBonus("18", "42")).toBe(50);
    expect(calculateBonus("13.5", "21.1")).toBe(34.6);
  });

  test("Returns undefined when values are not numbers", () => {
    expect(calculateBonus(15, { value: 15 })).toBe(undefined);
    expect(calculateBonus([23, 12, 14], 30)).toBe(undefined);
  });
});

describe("Test zero values", () => {
  test("Returns 50 or sum when one of the values is 0", () => {
    expect(calculateBonus(70, 0)).toBe(50);
    expect(calculateBonus(30, 0)).toBe(30);
  });
  test("Returns 0 when both values are 0", () => {
    expect(calculateBonus(0, 0)).toBe(0);
  });
});

describe("Test negative values", () => {
  test("Returns 50 or corrected sum when one of the values is negative", () => {
    expect(calculateBonus(-15, 80)).toBe(50);
    expect(calculateBonus(50, -8)).toBe(42);
  });

  test("Returns negative sum when both values are negative", () => {
    expect(calculateBonus(-15, -10)).toBe(-25);
  });
});

describe("Test boundary values", () => {
  test("Returns sum of 49 when sum equals 49", () => {
    expect(calculateBonus(25, 24)).toBe(49);
  });

  test("Returns 50 when sum equals 50", () => {
    expect(calculateBonus(25, 25)).toBe(50);
  });

  test("Returns 50 when sum equals 51", () => {
    expect(calculateBonus(26, 25)).toBe(50);
  });
});
