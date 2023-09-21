import { describe, expect, test } from "bun:test";
import { twoSum, twoSumHash } from "./twoSum";

const TEST_CASES: [number[], number, number[]][] = [
  [[2, 7, 11, 15], 9, [0, 1]],
  [[3, 2, 4], 6, [1, 2]],
  [[3, 2, 3], 6, [0, 2]],
];

const PERF_TEST_CASES: [number[], number, number[]][] = [
  [[2, 7, 11, 15, 23, -3, 5, 6, 4], 20, [4, 5]],
  [[3, 2, 4], 6, [1, 2]],
];

describe("twoSum", () => {
  test.each(TEST_CASES)("twoSum(%o, %d) returns %o", (nums, target, result) => {
    expect(twoSum(nums, target)).toEqual(result);
  });

  test.each(TEST_CASES)("twoSumOptimized(%o, %d) return %o", (nums, target, result) => {
    expect(twoSum(nums, target)).toEqual(result);
  });

  describe("performance", () => {
    test.each(TEST_CASES)(
      "has map version executes faster with smaller number of inputs",
      async (nums, target, result) => {
        const loopCalculate = async () => {
          const start = performance.now();
          const result = twoSum(nums, target);
          const end = performance.now();
          return { start, end, result };
        };

        const hashCalculate = async () => {
          const start = performance.now();
          const result = twoSumHash(nums, target);
          const end = performance.now();
          return { start, end, result };
        };

        const [loopResults, hashResults] = await Promise.all([loopCalculate(), hashCalculate()]);

        // it is the expected result
        expect(loopResults.result).toEqual(result);
        expect(hashResults.result).toEqual(result);

        const loopRuntime = loopResults.end - loopResults.start;
        const hashRuntime = hashResults.end - hashResults.start;
        if (nums.length > 3) {
          expect(loopRuntime).toBeGreaterThan(hashRuntime);
        } else {
          expect(loopRuntime).toBeLessThan(hashRuntime);
        }
      }
    );
  });
});
