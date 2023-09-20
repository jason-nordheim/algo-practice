import { describe, expect, test } from "bun:test";
import { selectionSort } from "./selectionSort";

describe("Selection sort", () => {
  test("correctly sorts an array of integers", () => {
    const inputArr = [10, 4, 5, 8, 9, 22, 40, 3];
    const selectionSorted = selectionSort(inputArr);
    expect(selectionSorted).toEqual([3, 4, 5, 8, 9, 10, 22, 40]);
  });
});
