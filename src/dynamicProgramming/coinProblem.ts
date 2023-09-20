const COINS = {
  PENNY: 0.01,
  NICKEL: 0.05,
  DIME: 0.1,
  QUARTER: 0.25,
  DOLLAR: 1,
};

export const AVAILABLE_COINS = [COINS.PENNY, COINS.NICKEL, COINS.DIME, COINS.QUARTER, COINS.DOLLAR];

type SeenMap = { [k: number]: number };

const factoredCoins = AVAILABLE_COINS.map((x) => x * 100);

/**
 * Dynamic Programming example of getting the minimum value of coins
 * @param amountInCents
 * @param seen
 * @param coins
 * @returns
 */
export const minimumCoins = (amountInCents: number, seen: SeenMap = {}, coins: number[] = factoredCoins): number => {
  if (seen[amountInCents]) {
    return seen[amountInCents];
  }

  let min = Infinity;
  for (let i = coins.length - 1; i > -1; i--) {
    const coin = coins[i];
    console.log(coin);
    if (coin <= amountInCents) {
      const minCoins = Math.floor(amountInCents / coin);
      if (minCoins > 0) {
        const coinsValue = minCoins * coin;
        const centsFromTarget = amountInCents - coinsValue;
        if (centsFromTarget > 0) {
          const remainingCoinsNeeded = minimumCoins(centsFromTarget, seen, coins);
          min = Math.min(minCoins + remainingCoinsNeeded, min);
        } else {
          min = Math.min(minCoins, min);
        }
      }
    }
  }

  return min;
};
