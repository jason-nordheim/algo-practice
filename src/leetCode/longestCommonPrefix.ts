export function longestCommonPrefex(strArr: string[]): string {
  if (strArr.length === 0) {
    return "";
  }

  // Sort the array to ensure that the shortest and longest strings are at the extremes.
  strArr.sort();

  const shortestStr = strArr[0];
  const longestStr = strArr[strArr.length - 1];
  let commonPrefix = "";

  // Compare the characters of the first and last strings.
  for (let i = 0; i < shortestStr.length; i++) {
    if (shortestStr.charAt(i) === longestStr.charAt(i)) {
      commonPrefix += shortestStr.charAt(i);
    } else {
      break;
    }
  }

  return commonPrefix;
}
