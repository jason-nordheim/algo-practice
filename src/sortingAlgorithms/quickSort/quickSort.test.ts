import { describe, expect, test } from "bun:test";
import { quickSort } from "./quickSort";

describe("Quick sort", () => {
  test("correctly sorts an array of integers", () => {
    const inputArr = [10, 4, 5, 8, 9, 22, 40, 3];
    const bubbleSortedArr = quickSort(inputArr);
    expect(bubbleSortedArr).toEqual([3, 4, 5, 8, 9, 10, 22, 40]);
  });
});
