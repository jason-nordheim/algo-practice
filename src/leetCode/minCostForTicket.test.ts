import { describe, expect, test } from "bun:test";
import { consecutiveDays, minCostForTickets } from "./minCostForTickets";

const consecutiveDaysTestInput: [number[], number[][]][] = [
  [
    [2, 3, 5, 6, 7],
    [
      [2, 3],
      [5, 6, 7],
    ],
  ],
  [
    [1, 4, 6, 7, 8, 20],
    [[1], [4], [6, 7, 8], [20]],
  ],
  [
    [1, 2, 3, 4, 5, 6, 7, 8, 10, 30, 31],
    [[1, 2, 3, 4, 5, 6, 7, 8], [10], [30, 31]],
  ],
];

const minCostForDaysTestInput: [number[], number[], number][] = [
  [[1, 4, 6, 7, 8, 20], [2, 7, 15], 11],
  [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31], [2, 7, 15], 17],
];
describe("minCostForTickets", () => {
  test.each(consecutiveDaysTestInput)("consecutiveDays(%o) returns %o", (input, expectedOutput) => {
    expect(consecutiveDays(input)).toEqual(expectedOutput);
  });

  test.each(minCostForDaysTestInput)("minCostForDays(%o, %o) returns %d", (days, costs, result) => {
    expect(minCostForTickets(days, costs)).toEqual(result);
  });
});
