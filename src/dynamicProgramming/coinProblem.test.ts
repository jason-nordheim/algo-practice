import { describe, expect, test } from "bun:test";
import { minimumCoins } from "./coinProblem";

describe("the coin problem", () => {
  test.each([
    [1, 1],
    [2, 2],
    [5, 1],
    [10, 1],
    [11, 2],
    [55, 3],
    [74, 8],
  ])("getMinUnder(%d) returns %d", (cents, numCoinsUnder) => {
    expect(minimumCoins(cents)).toEqual(numCoinsUnder);
  });
});
