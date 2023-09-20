import { minimumCoins } from "./coinProblem";

describe("the coin problem", () => {
  it.each([[0.75, 3]])("minimumCoins(%d) returns %d", (target, expectedCoins) => {
    expect(minimumCoins(target)).toEqual(expectedCoins);
  });
});
