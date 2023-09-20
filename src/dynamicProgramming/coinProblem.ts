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

/**
 * Provides the minimum number of coins required to reach the desired value
 * @param coins available coins (must be an integer)
 * @param amount goal amount
 * @returns minimum number of coins
 */
export function coinChange(coins: number[], amount: number): number {
  if (!Number.isInteger(amount)) {
    throw new Error("Amount must be an integer");
  }

  for (const coin of coins) {
    if (!Number.isInteger(coin)) {
      throw new Error("Coin values must all be integers");
    }
  }

  const seen: number[] = [0];

  for (let targetAmount = 1; targetAmount <= amount; targetAmount++) {
    // what is the minimum amount of coins it takes to get to targetAmount?
    let minCoinsToMakeAmount: number = Infinity;
    for (let coinIndex = 0; coinIndex < coins.length; coinIndex++) {
      if (coins[coinIndex] === targetAmount) {
        minCoinsToMakeAmount = 1;
        break;
      }

      // If we absolutely used the coin at coinIndex to make our target amount,
      // then then we need to calculate steps it takes to get to dp[targetAmount - currentCoin] + 1
      const complimentAmount: number = targetAmount - coins[coinIndex];

      // check if we can make this amount, if coin is higher than target amount or we haven't calculated how to get to
      // compliment yet, we can't make it
      if (complimentAmount < 0 || complimentAmount >= seen.length) {
        continue;
      }

      const coinsToMakeTargetAmount: number = 1 + seen[complimentAmount];

      if (coinsToMakeTargetAmount < minCoinsToMakeAmount) {
        minCoinsToMakeAmount = coinsToMakeTargetAmount;
      }
    }

    seen[targetAmount] = minCoinsToMakeAmount;
  }

  return seen[amount] === Infinity ? -1 : seen[amount];
}
