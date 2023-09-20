const COINS = {
  PENNY: 0.01,
  NICKEL: 0.05,
  DIME: 0.1,
  QUARTER: 0.25,
  DOLLAR: 1,
};

/**
 * This algorithm is designed to calculate the minimum required number of coins
 * to reach a desired value recursively (inefficient)
 * @param target desired sum of coins
 * @param sortedCoins array of available coins
 * @returns the minimum number of coins required
 */
export const minimumCoins = (
  target: number,
  sortedCoins = [COINS.PENNY, COINS.NICKEL, COINS.DIME, COINS.QUARTER, COINS.DOLLAR],
  index: number = 4,
  count: number = 0
): number => {
  if (target === 0) return 0;

  const currentCoin = sortedCoins[index];

  if (currentCoin > target) {
    return minimumCoins(target, sortedCoins, index - 1, count);
  }

  if (currentCoin === target) {
    return count;
  }

  if (target - currentCoin - currentCoin < target) {
    return count + minimumCoins(target - currentCoin, sortedCoins, index, count + 1);
  }

  return count + minimumCoins(target - currentCoin, sortedCoins, index--, count + 1);
};
