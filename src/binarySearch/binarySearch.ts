/**finds an item from a sorted list by repeatedly
 * dividing in half the portion of the portion of items that could
 * contain the target item until the relevant portion contains only
 * the target item */
export const binarySearch = (arr: number[], target: number): number => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      // Found the target
      return mid;
    } else if (arr[mid] < target) {
      // Adjust the left boundary
      left = mid + 1;
    } else {
      // Adjust the right boundary
      right = mid - 1;
    }
  }

  return -1; // Target not found
};
