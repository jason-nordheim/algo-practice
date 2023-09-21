/**
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order, and each of their nodes contains a single digit.
 * Add the two numbers and return the sum as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * Example 1:
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * Explanation: 342 + 465 = 807.
 *
 * Example 2:
 * Input: l1 = [0], l2 = [0]
 * Output: [0]
 *
 * Example 3:
 * Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * Output: [8,9,9,9,0,0,0,1]
 */

export class ListNode<T> {
  val: T;
  next?: ListNode<T>;
  constructor(val: T, next?: ListNode<T>) {
    this.val = val;
    this.next = next;
  }
}

class NumericListNode extends ListNode<number> {}

export function addTwoNumbers(
  l1: ListNode<number> | undefined,
  l2: ListNode<number> | undefined
): ListNode<number> | undefined {
  const recurse = (
    l1: ListNode<number> | undefined,
    l2: ListNode<number> | undefined,
    carry: number = 0
  ): ListNode<number> | undefined => {
    if (!l1 && !l2 && !carry) return undefined;

    const total: number = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + (carry || 0);
    carry = parseInt(total / 10 + "");
    return new ListNode(total % 10, recurse(l1?.next, l2?.next, carry));
  };

  return recurse(l1, l2);
}
