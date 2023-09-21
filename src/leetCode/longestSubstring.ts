/**
 * Given a string s, find the length of the longest substring without repeating characters.
 *
 * Example 1:
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 *
 * Example 2:
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 *
 *
 * Example 3:
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 *
 * @param s string to search
 * @return length of longest substring
 */
export function lengthOfLongestSubstring(s: string): number {
  const chars = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    if (chars.has(s[i])) {
      continue;
    }
    if (chars.get(s[i - 1]) !== i - 1) {
      chars.set(s[i], i);
    }
  }

  return chars.size;
}
