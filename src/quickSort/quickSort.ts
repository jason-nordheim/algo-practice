/**
 * @description Sorting function that uses a pivot element
 * to create sub arrays that are sorted recursively
 * - Divide and Conquer algorithm
 * - Time Complexity: O(n(log(n))) "Quasilinear time" (almost linear)
 * @param arr array to be sorted
 */
export const quickSort = (arr: number[]): number[] => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivotValue = arr[Math.floor(arr.length / 2)],
    left: number[] = [],
    right: number[] = [];

  for (const num of arr) {
    if (num < pivotValue) {
      left.push(num);
    } else if (num > pivotValue) {
      right.push(num);
    }
  }

  return [...quickSort(left), pivotValue, ...quickSort(right)];
};
