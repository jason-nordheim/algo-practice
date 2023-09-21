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

  const charMaps: Map<string, number>[] = [new Map()];
  charMaps[0].set(s[0], 0);

  for (let i = 1; i < s.length; i++) {
    const latestMapIdx = charMaps.length - 1;
    if (!charMaps[latestMapIdx].has(s[i])) {
      const lastCharIdx = charMaps[latestMapIdx].get(s[i - 1]);
      if (lastCharIdx === i - 1) {
        charMaps[latestMapIdx].set(s[i], i);
      }
    } else {
      charMaps.push(new Map());
      charMaps[charMaps.length - 1].set(s[i - 1], i - 1);
      charMaps[charMaps.length - 1].set(s[i], i);
    }
  }

  const maxSubArraySize = charMaps.map((map) => map.size);
  return Math.max(...maxSubArraySize);
}
