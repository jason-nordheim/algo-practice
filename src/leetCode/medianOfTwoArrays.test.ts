import { describe, expect, test } from "bun:test";
import { findMedianSortedArrays } from "./medianOfTwoArrays";

const tests: [number[], number[], number][] = [
  [[1, 3], [2], 2],
  [[1, 2], [3, 4], 2.5],
  [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], 5.5],
  [[1, 3, 8, 9], [2, 4, 7], 4],
  [[1, 2, 3, 4, 5], [], 3],
];

describe("median of two arrays", () => {
  test.each(tests)("findMedianSortedArrays(%o, %o) returns %d", (nums1, nums2, result) => {
    expect(findMedianSortedArrays(nums1, nums2)).toBe(result);
  });
});
