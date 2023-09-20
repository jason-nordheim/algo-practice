import { describe, expect, test } from "bun:test";
import { bubbleSort } from "./bubbleSort";

describe("Bubble sort", () => {
  test("correctly sorts an array of integers", () => {
    const inputArr = [10, 4, 5, 8, 9, 22, 40, 3];
    const bubbleSortedArr = bubbleSort(inputArr);
    expect(bubbleSortedArr).toEqual([3, 4, 5, 8, 9, 10, 22, 40]);
  });
});
