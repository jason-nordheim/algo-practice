/**
 * Recursive algorithm for calculating the nth fibonacci number (top-down approach)
 * @param n request fibonacci number
 * @returns the nth fibonacci number
 */
export const fibonacci = (n: number): number => {
  if (n <= 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

/**
 * Memoized version of the algorithm for finding the nth fibonacci number (top-down approach)
 * @param n request fibonacci number
 * @param seen map of previously seen fibonacci numbers
 * @returns the nth fibonacci number
 */
export const memoizedFibonacci = (n: number, seen: Map<number, number> = new Map()): number => {
  if (n <= 2) {
    return 1;
  }

  if (seen.has(n)) {
    return seen.get(n)!;
  }

  seen.set(n, fibonacci(n - 1) + fibonacci(n - 2));
  return seen.get(n)!;
};
