import { describe, expect, test } from "bun:test";
import { findMedianSortedArrays } from "./medianOfTwoArrays";

const tests: [number[], number[], number][] = [
  [[1, 3], [2], 2],
  [[1, 2], [3, 4], 2.5],
];

describe("median of two arrays", () => {
  test.each(tests)("findMedianSortedArrays(%o, %0) returns %d", (nums1, nums2, result) => {
    expect(findMedianSortedArrays(nums1, nums2)).toBe(result);
  });
});
