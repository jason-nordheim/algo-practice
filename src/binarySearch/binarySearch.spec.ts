import { binarySearch } from "./binarySearch";

describe("Binary Search", () => {
  it.each([
    [9, 4],
    [17, 8],
    [1, 0],
  ])("returns the correct value if the value is in the array", (target, expectedIndex) => {
    const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];
    const index = binarySearch(sortedArray, target);
    expect(index).toBe(expectedIndex);
  });

  it("returns -1 if the value is not in the array", () => {
    const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];
    const target = 21;
    const index = binarySearch(sortedArray, target);
    expect(index).toBe(-1);
  });
});
