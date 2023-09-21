/**
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 * https://leetcode.com/problems/palindrome-number/
 *
 * Example 1:
 * Input: x = 121
 * Output: true
 * Explanation: 121 reads as 121 from left to right and from right to left.
 *
 * Example 2:
 * Input: x = -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
 *
 * Example 3:
 * Input: x = 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 *
 * Constraints:
 * -2^31 <= x <= 2^31 - 1
 */
export function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  if (x < 10) return true;

  let reversed = 0;
  let candidate = x;

  while (candidate > reversed) {
    reversed = reversed * 10 + (candidate % 10);
    candidate = candidate / 10;
  }

  return reversed == x || x == reversed / 10;
}
