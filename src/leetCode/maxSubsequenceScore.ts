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
 * 2) Time Complexity => O(n log n) - quasi-linear
 *    - k = desired length of subsequence
 *    - n = the length of the input arrays
 * 3) Space Complexity =>O(n) - linear
 */
export function maxScore(nums1: number[], nums2: number[], k: number): number {
  const n = nums1.length;
  const pairs = new Array(n);
  for (let i = 0; i < n; i++) {
    pairs[i] = [nums1[i], nums2[i]];
  }
  pairs.sort((a, b) => b[1] - a[1]);

  const heap = new Array();
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += pairs[i][0];
    binaryInsert(heap, pairs[i][0]);
  }

  let result = sum * pairs[k - 1][1];
  for (let i = k; i < n; i++) {
    sum += pairs[i][0] - heap.shift();
    binaryInsert(heap, pairs[i][0]);
    result = Math.max(result, sum * pairs[i][1]);
  }

  return result;
}

function binaryInsert(arr: number[], item: number) {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    let mid = (left + right) >> 1;
    if (arr[mid] > item) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  arr.splice(left, 0, item);
}
