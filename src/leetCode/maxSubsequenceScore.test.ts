import { describe, expect, test } from "bun:test";
import { maxScore } from "./maxSubsequenceScore";

describe("maxSubsequenceScore", () => {
  test("input of nums1 = [1,3,3,2], nums2 = [2,1,3,4], k = 3 returns 12", () => {
    const nums1 = [1, 3, 3, 2];
    const nums2 = [2, 1, 3, 4];
    expect(maxScore(nums1, nums2, 3)).toEqual(12);
  });

  test("input of nums1 = [4,2,3,1,1], nums2 = [2,1,4,4], k = 1 returns 30", () => {
    const nums1 = [4, 2, 3, 1, 1];
    const nums2 = [7, 5, 10, 9, 6];
    expect(maxScore(nums1, nums2, 1)).toEqual(30);
  });
});
