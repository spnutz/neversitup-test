const { manipulate } = require("./manipulate");

describe("manipulate function", () => {
  test('should return all permutations of "abc"', () => {
    const input = "abc";
    const result = manipulate(input);
    const expectedOutput = ["abc", "acb", "bac", "bca", "cab", "cba"];

    expect(result).toEqual(expectedOutput);
  });

  test("should return an empty array for an empty string", () => {
    const input = "";
    const result = manipulate(input);
    const expectedOutput = [];

    expect(result).toEqual(expectedOutput);
  });

  test("should return the same single character for a single character input", () => {
    const input = "a";
    const result = manipulate(input);
    const expectedOutput = ["a"];

    expect(result).toEqual(expectedOutput);
  });
});
