/**
 * Sorting algorithm that works by finding the smallest element
 * in the array and exchanging it with the element at the beginning
 * of the array and repeating the process until the array is fully sorted
 * - Time Complexity
 * @param arr array to be sorted
 */
export const selectionSort = (arr: number[]) => {
  for(let i = 0; i < arr.length; i++) {
    let minIndex = i; 
    for(let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex] = arr[minIndex], arr[i]]
    }
  }
  return arr;
};
