const { findOddNumber } = require("./odd-number");

describe("findOddNumber function", () => {
  test("should return 7 when input is [7]", () => {
    const input = [7];
    const result = findOddNumber(input);
    const expectedOutput = 7;

    expect(result).toBe(expectedOutput);
  });

  test("should return 0 when input is [0]", () => {
    const input = [0];
    const result = findOddNumber(input);
    const expectedOutput = 0;

    expect(result).toBe(expectedOutput);
  });

  test("should return 2 when input is [1, 1, 2]", () => {
    const input = [1, 1, 2];
    const result = findOddNumber(input);
    const expectedOutput = 2;

    expect(result).toBe(expectedOutput);
  });

  test("should return 0 when input is [0,1,0,1,0]", () => {
    const input = [0, 1, 0, 1, 0];
    const result = findOddNumber(input);
    const expectedOutput = 0;

    expect(result).toBe(expectedOutput);
  });

  test("should return 4 when input is [1,2,2,3,3,3,4,3,3,3,2,2,1]", () => {
    const input = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];
    const result = findOddNumber(input);
    const expectedOutput = 4;

    expect(result).toBe(expectedOutput);
  });

  test("should return undefined when input empty array", () => {
    const input = [];
    const result = findOddNumber(input);

    expect(result).toBeUndefined();
  });
});
