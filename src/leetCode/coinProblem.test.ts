import { describe, expect, test } from "bun:test";
import { coinChange, minimumCoins } from "./coinProblem";

const US_COINS = [1, 5, 10, 25, 100];
const testCasesA: [number, number][] = [
  [1, 1],
  [2, 2],
  [5, 1],
  [10, 1],
  [11, 2],
  [55, 3],
  [74, 8],
  [125, 2],
  [223, 7],
];
const testCasesB: [number, number, number[]][] = [
  [6249, 20, [186, 419, 83, 408]],
  [1, 1, US_COINS],
  [2, 2, US_COINS],
  [5, 1, US_COINS],
  [11, 2, US_COINS],
];

const errorTestCases: [number, number[]][] = [
  [1.25, [1, 2, 3]],
  [1, [1.25, 2, 4]],
];

describe("the coin problem", () => {
  test.each(testCasesA)("getMinUnder(%d) returns %d", (cents, numCoinsUnder) => {
    expect(minimumCoins(cents)).toEqual(numCoinsUnder);
  });
  test.each(testCasesB)("coinChange(%d) returns %d", (cents, numCoins, availableCoins) => {
    expect(coinChange(availableCoins, cents)).toEqual(numCoins);
  });

  test.each(errorTestCases)("coinChange(%d) throws error", (amount, coins) => {
    expect(() => coinChange(coins, amount)).toThrow();
  });
});
