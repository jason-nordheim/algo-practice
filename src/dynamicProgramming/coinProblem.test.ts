import { describe, expect, test } from "bun:test";
import { minimumCoins } from "./coinProblem";

describe("the coin problem", () => {
  test.each([[0.75, 3]])("minimumCoins(%d) returns %d", (target, expectedCoins) => {
    expect(minimumCoins(target)).toEqual(expectedCoins);
  });
});
