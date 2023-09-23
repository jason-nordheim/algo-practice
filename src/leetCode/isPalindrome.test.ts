import { describe, test, expect } from "bun:test";
import { isPalindrome } from "./isPalindrome";

const TEST_CASES: [number, boolean][] = [
  [1, true],
  [10, false],
  [-2, false],
  [121, true],
  [123, false],
  [1331, true],
];

describe("isPalindrome", () => {
  test.each(TEST_CASES)("isPalindrome(%d) returns %o", (input, result) => {
    expect(isPalindrome(input)).toBe(result);
  });
});
