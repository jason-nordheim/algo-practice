import { describe, expect, test } from "bun:test";
import { lengthOfLongestSubstring } from "./longestSubstring";

const TESTS: [string, number][] = [
  ["abcabcbb", 3],
  ["bbbbb", 1],
  ["pwwkew", 3],
  ["au", 2],
  ["dvdf", 3],
  ["anviaj", 5],
];

describe("longestSubstring", () => {
  test.each(TESTS)("lengthOfLongestSubstring(%s) return %d", (inputStr, length) => {
    expect(lengthOfLongestSubstring(inputStr)).toEqual(length);
  });
});
