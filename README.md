# About this Repository

This is a pretty bare-bones repository containing common algorithms implemented using [TypeScript](https://www.typescriptlang.org/) and [`bun`](https://bun.sh/) for compilation and testing.

The folder structure is as follows:

```
.gitignore
bun.lockb                 <-- bun lock file
package.json
src/
  /dynamicProgramming/    <-- directory containing dynamic programming problems/solutions/tests
    [problemName].ts
    [problemName].test.ts
  /leetCode/              <-- directory containing leetcode problems/solutions/tests
    [problemName].ts
    [problemName].test.ts
  /pathfinding/
    [algorithmName].ts
    [algorithmName].test.ts
  [algorithmName]/
    [algorithmName].ts      <-- sorting function
    [algorithmName].test.ts <-- test for the algorithm
```

## The Algorithm Files

Every algorithm is accompanied with js doc comments that explain:

- What the algorithm is doing
- It's time complexity (in Big O notation)

## Table of Contents

- Searching
  - Binary Search
- Pathfinding (located in `src/pathfinding/<algorithmName>/`)
  - Dijkstra
- Sorting (located in `src/sortingAlgorithms/<algorithmName>/`)
  - Bubble Sort
  - Selection Sort
  - Insertion Sort
  - Merge Sort
  - Quick Sort
  - Radix Sort (LSD)
- leetCode (directory containing leetcode problems/solutions with tests)
  - [addTwoNumbers](https://leetcode.com/problems/add-two-numbers/)
  - maxSubsequence
  - [longestSubstring](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
  - [twoSum](https://leetcode.com/problems/two-sum/)

## Running the tests

**Important**: This project is setup to use [`bun`](https://bun.sh/) which is currently only supported on macOS, Linux and [WSL](https://learn.microsoft.com/en-us/windows/wsl/install). So in order to run this project on a windows machine, you must be in WSL.

1. Installing Bun: Run `curl -fsSL https://bun.sh/install | bash` from the command line.
2. Run `bun install` to add the packages to `node_modules`
3. Run `bun test` to run the tests

Since there is no UI, the only available command is `npm run test`.

> If you would like a code coverage report, run: `bun coverage`
