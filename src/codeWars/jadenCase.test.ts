import { describe, expect, test } from "bun:test";
import { toJadenCase } from "./jadenCase";

describe("jadenCase", () => {
  test.each([
    ["The quick brown fox jumps over the lazy sheep dog", "The Quick Brown Fox Jumps Over The Lazy Sheep Dog"],
  ])("toJadenCase(%d) returns %d", (input, expectedResult) => {
    expect(toJadenCase(input)).toEqual(expectedResult);
  });
});
