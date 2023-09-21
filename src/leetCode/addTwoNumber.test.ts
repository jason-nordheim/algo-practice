import { describe, expect, test } from "bun:test";
import { ListNode, addTwoNumbers } from "./addTwoNumbers";

const TESTS: [ListNode<number>, ListNode<number>, ListNode<number>][] = [
  [
    new ListNode(2, new ListNode(4, new ListNode(3))),
    new ListNode(5, new ListNode(6, new ListNode(4))),
    new ListNode(7, new ListNode(0, new ListNode(8))),
  ],
  [new ListNode(0), new ListNode(0), new ListNode(0)],
  [
    new ListNode(
      9,
      new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))))
    ),
    new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))),
    new ListNode(
      8,
      new ListNode(
        9,
        new ListNode(9, new ListNode(9, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1))))))
      )
    ),
  ],
];

describe("addTwoNumbers", () => {
  test.each(TESTS)("%# addTwoNumbers(%o, %o) returns %o", (l1, l2, result) => {
    expect(addTwoNumbers(l1, l2)).toEqual(result);
  });
});
