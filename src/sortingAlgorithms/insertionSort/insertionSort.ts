/**
 * Builds up a sorted array one element at a time.
 * Optimized for data already "mostly sorted"
 * - Time Complexity: O(n²) "Quadratic"
 * @param arr
 * @returns
 */
export const insertionSort = (arr: number[]) => {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    let prevIndex = i - 1;

    while (prevIndex > -1 && currentValue < arr[prevIndex]) {
      // shift previous value to the right
      arr[prevIndex + 1] = arr[prevIndex];
      // move index pointer to the left
      prevIndex--;
    }

    // insert previous value
    arr[prevIndex + 1] = currentValue;
  }
  return arr;
};
