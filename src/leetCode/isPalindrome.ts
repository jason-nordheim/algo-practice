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
export function isPalindrome(n: number): boolean {
  let rev = 0;
  let temp = n;
  while (temp > 0) {
    rev *= 10;
    rev += temp % 10;
    temp = Math.floor(temp / 10);
  }
  return rev === n;
}
