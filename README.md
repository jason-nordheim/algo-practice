# About this Repository

This is a pretty bare-bones repository containing common algorithms implemented using [TypeScript](https://www.typescriptlang.org/) and [jest](https://jestjs.io/) for testing.

The folder structure is as follows:

```
src/
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
- Pathfinding
  - Dijkstra
- Sorting
  - Bubble Sort
  - Selection Sort
  - Insertion Sort

## Running the tests

Since there is no UI, the only available command is `npm run test`.
