import { describe, expect, test } from "bun:test";
import { fibonacci, memoizedFibonacci } from "./fibonacci";

const SMALL_FIBS: [number, number][] = [
  // nth, expectedResult
  [1, 1],
  [2, 1],
  [3, 2],
  [4, 3],
  [7, 13],
];

describe("functionaltesty", () => {
  test.each(SMALL_FIBS)("fibonacci(%d)  returns %d", (nthNumber, expectedResult) => {
    expect(fibonacci(nthNumber)).toEqual(expectedResult);
  });
  test.each(SMALL_FIBS)("fibinacci(%d) returns %d", (nthNumber, expectedResult) => {
    expect(memoizedFibonacci(nthNumber)).toEqual(expectedResult);
  });
});

//[50, 12586269025]
const LARGE_FIBS: [number, number][] = [
  [10, 55],
  [30, 832040],
];

describe("performance", () => {
  test.each(LARGE_FIBS)(
    "When running both functions, memoizedFibonacci finishes in less time",
    async (nthNumber, expectedResult) => {
      const calculate = async () => {
        const start = performance.now();
        const result = fibonacci(nthNumber);
        const end = performance.now();
        return { start, end, result };
      };

      const memoizedCalculate = async () => {
        const start = performance.now();
        const result = memoizedFibonacci(nthNumber);
        const end = performance.now();
        return { start, end, result };
      };

      const [calculateResults, memoizedCalculateResults] = await Promise.all([calculate(), memoizedCalculate()]);

      expect(calculateResults.result).toEqual(expectedResult);
      expect(memoizedCalculateResults.result).toEqual(expectedResult);
      const calculateRunTime = calculateResults.end - calculateResults.start;
      const memoizedRunTime = memoizedCalculateResults.end - memoizedCalculateResults.start;
      expect(calculateRunTime).toBeGreaterThan(memoizedRunTime);
    }
  );
});
