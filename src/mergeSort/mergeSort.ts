/**
 * Divide and Conquer algorithm.
 * @description recursive function that breaks the main array into
 * sub arrays, then sorts them and merge them back together
 * - Time Complexity: O(n(log(n))) "Quasilinear time" (almost linear)
 * - Fun Fact: This is the sorting method using by the Array.prototype.sort() function in JavaScript
 * - Pros: Linear runtime
 * - Cons: More memory intensive than other sorting techniques
 * @param arr the array to be sorted
 */
export const mergeSort = (arr: number[]): number[] => {
  const mid = Math.floor(arr.length / 2);

  if (arr.length < 2) {
    return arr;
  }

  const leftHalf = arr.splice(0, mid);
  return merge(mergeSort(leftHalf), mergeSort(arr));
};

/**
 * @description Helper function that combines two arrays,
 * with the array returned being fully sorted.
 * @param left left side of the split array
 * @param right right side of the split array
 */
export const merge = (left: number[], right: number[]): number[] => {
  let arr: number[] = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift()!);
    } else {
      arr.push(right.shift()!);
    }
  }

  return [...arr, ...left, ...right];
};
