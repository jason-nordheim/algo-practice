/**
 * Radix sort was created in the 1800s for tabulating machines
 * - works by grouping items that share the same significant position
 * - The implementation below is 'LSD' = Least significant digit,
 *   radix sort can also be implemented using MSD (Most significant digit)
 */
export const radixSortLsd = (arr: number[]) => {
  let maxDigits: number = 0;

  // find the maximum number of digits in the array of elements
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, getNumberOfDigits(arr[i]));
  }

  // the algorithm
  for (let i = 0; i < maxDigits; i++) {
    let buckets: number[][] = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < buckets.length; j++) {
      let digit = getDigit(arr[j], i);
      const existing: number[] = buckets[digit] || [];
      buckets[digit] = [...existing, arr[j]];
    }

    arr = new Array<number>().concat(...buckets);
  }

  return arr;
};

function getNumberOfDigits(val: number) {
  return Math.floor(Math.log10(Math.abs(val))) + 1;
}

function getDigit(num: number, place: number) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}
