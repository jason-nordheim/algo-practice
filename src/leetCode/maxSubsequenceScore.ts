/**
 * You are given two 0-indexed integer arrays nums1 and nums2 of equal length n and a positive integer k. You must choose a subsequence of indices from nums1 of length k.
 * For chosen indices i0, i1, ..., ik - 1, your score is defined as:
 *
 * The sum of the selected elements from nums1 multiplied with the minimum of the selected elements from nums2.
 * It can defined simply as: (nums1[i0] + nums1[i1] +...+ nums1[ik - 1]) * min(nums2[i0] , nums2[i1], ... ,nums2[ik - 1]).
 *
 * Return the maximum possible score.
 * A subsequence of indices of an array is a set that can be derived from the set {0, 1, ..., n-1} by deleting some or no elements.
 *
 * Constraints:
 * 1) n == nums1.length == nums2.length
 * 2) 1 <= n <= 10^5
 * 3) 0 <= nums1[i], nums2[j] <= 105
 * 4) 1 <= k <= n
 *
 * Solution:
 * 1) Implemented using binary search
 * 2) Time Complexity => O(log(k) * n)
 *    - k = desired length of subsequence
 *    - n = the length of the input arrays
 * 3) Space Complexity => O(1) (e.g. "constant")
 */
export const maxScore = (nums1: number[], nums2: number[], k: number): number => {
  // return maxScore;
  const n = nums1.length;
  let left = 0;
  let right = k;
  let result = 0;

  while (left <= right) {
    const i = left + Math.floor((right - left) / 2);
    const j = k - i; // Calculate the corresponding number of elements to take from nums2

    // Find the minimum value from nums2 for the current subsequence
    let min2 = Infinity;
    for (let x = 0; x < n; x++) {
      if (x < i) {
        min2 = Math.min(min2, nums2[x]);
      } else if (x >= n - j) {
        min2 = Math.min(min2, nums2[x]);
      }
    }

    let score = 0;
    let sum1 = 0;

    // Calculate the score for the current subsequence
    for (let x = 0; x < n; x++) {
      if (x < i) {
        sum1 += nums1[x];
      } else if (x >= n - j) {
        sum1 += nums1[x];
      }
    }

    score = sum1 * min2;
    result = Math.max(result, score);

    if (i < k && nums1[i] < nums2[n - j - 1]) {
      left = i + 1;
    } else {
      right = i - 1;
    }
  }

  return result;
};
