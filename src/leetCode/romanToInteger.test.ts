import { describe, expect, test } from "bun:test";
import { romanToInt } from "./romanToInteger";

const TEST: [string, number][] = [
  ["III", 3],
  ["IV", 4],
  ["LVIII", 58],
  ["MCMXCIV", 1994],
];

describe("romanToInteger", () => {
  test.each(TEST)("romanToInteger(%s) returns %d", (romanChars, value) => {
    expect(romanToInt(romanChars)).toBe(value);
  });
});
