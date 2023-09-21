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
  if (s.length == 0) return 0;

  let m = new Map();
  let longest = 0;
  let maxIdx = 0;
  for (let idx = 0; idx < s.length; idx++) {
    const char = s[idx];
    const prev = m.get(char);
    if (prev >= maxIdx) {
      maxIdx = prev + 1;
    }
    m.set(char, idx);
    longest = Math.max(longest, idx - maxIdx + 1);
  }

  return longest;
}
