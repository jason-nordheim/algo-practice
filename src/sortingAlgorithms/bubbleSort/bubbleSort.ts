/**
 * Sorts an array by comparing each element in the array to
 * each neighboring element in the array, swapping elements until the
 * entire array is correctly ordered.
 * -> Time Complexity: O(n²) (e.g. "quadratic time")
 * @param arr
 * @returns
 */
export const bubbleSort = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      // if left side is > than right side
      // swap the positions of the two items
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};
