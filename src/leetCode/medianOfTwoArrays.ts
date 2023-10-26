/**
 * #4:
 * Given two sorted arrays nums1 and nums2 of size m and n respectively,
 * return the median of the two sorted arrays.
 *
 * The overall run time complexity should be O(log (m+n)).
 *
 * Example 1:
 * Input: nums1 = [1,3], nums2 = [2]
 * Output: 2.00000
 * Explanation: merged array = [1,2,3] and median is 2.
 *
 * Example 2:
 * Input: nums1 = [1,2], nums2 = [3,4]
 * Output: 2.50000
 * Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 *
 * Constraints:
 * nums1.length == m
 * nums2.length == n
 * 0 <= m <= 1000
 * 0 <= n <= 1000
 * 1 <= m + n <= 2000
 * -10^6 <= nums1[i], nums2[i] <= 10^6
 *
 * URL: https://leetcode.com/problems/median-of-two-sorted-arrays/
 */
export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // make sure the first array is the shorter array
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  const lengthA = nums1.length;
  const lengthB = nums2.length;
  // get the middle position of the 'combined array
  const halfLength = Math.floor((lengthA + lengthB + 1) / 2);

  // setup pointers to the smallest and largest values from the first array
  let minX = 0;
  let maxX = nums1.length;

  const combinedArraysEven = (lengthA + lengthB) % 2 === 0;

  while (minX <= maxX) {
    // calculate the partition index for each array
    const partitionA = Math.floor((minX + maxX) / 2);
    const partitionB = halfLength - partitionA;

    // ** calculate boundaries **
    // max element of partition a (left), min element of partitionA (right)
    const maxALeft = partitionA === 0 ? Number.MIN_SAFE_INTEGER : nums1[partitionA - 1];
    const minARight = partitionA === lengthA ? Number.MAX_SAFE_INTEGER : nums1[partitionA];

    // max element of partition B (left), min element of partitionB (right)
    const maxBLeft = partitionB === 0 ? Number.MIN_SAFE_INTEGER : nums2[partitionB - 1];
    const minBRight = partitionB === lengthB ? Number.MAX_SAFE_INTEGER : nums2[partitionB];

    // ** check if these boundary values match the median condition
    if (maxALeft <= minBRight && maxBLeft <= minARight) {
      // found the correct partition
      if (combinedArraysEven) {
        // find the maximum of the left partitions
        const leftMax = Math.max(maxALeft, maxBLeft);
        const rightMin = Math.min(minARight, minBRight);
        return (leftMax + rightMin) / 2;
      }
      // the combined array is odd in length
      // so we use the max from the left partition
      return Math.max(maxALeft, maxBLeft);
    } else if (maxALeft > minBRight) {
      maxX = partitionA - 1;
    } else {
      minX = partitionA + 1;
    }
  }

  throw new Error("The input arrays are not sorted");
}
