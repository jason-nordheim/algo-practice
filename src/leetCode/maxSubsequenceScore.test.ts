import { maxScore } from "./maxSubsequenceScore";

describe("maxSubsequenceScore", () => {
  it("input of nums1 = [1,3,3,2], nums2 = [2,1,3,4], k = 3 returns 12", () => {
    const nums1 = [1, 3, 3, 2];
    const nums2 = [2, 1, 3, 4];
    expect(maxScore(nums1, nums2, 3)).toEqual(12);
  });

   it("input of nums1 = [1,3,4,2], nums2 = [2,1,4,4], k = 3 returns 12", () => {
    const nums1 = [1, 3, 3, 2];
    const nums2 = [2, 1, 3, 4];
    expect(maxScore(nums1, nums2, 3)).toEqual(12);
  });
});
