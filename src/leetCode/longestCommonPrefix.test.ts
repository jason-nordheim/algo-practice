import { describe, test, expect } from "bun:test";
import { longestCommonPrefex } from "./longestCommonPrefix";

const TESTS: [string[], string][] = [
  [["flower", "flow", "flight"], "fl"],
  [["dog", "racecar", "car"], ""],
];
describe("longestCommonPrefex", () => {
  test.each(TESTS)("longestCommonSubstring(%o) returns %s", (strArr, commonPrefix) => {
    expect(longestCommonPrefex(strArr)).toEqual(commonPrefix);
  });
});
