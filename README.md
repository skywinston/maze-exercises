# Mazes and trees

Maze katas are a fun way to build trees in ways that might not be obvious at first.

## Instructions

- Read this doc
- Run the test suite
- Make each test pass in order
- Read the comments at the top of each file in `src` for specific instructions

Install with `npm install`.

Test with `npm test`.

## Overview

You'll be given a maze, and a starting point.  Your algorithm needs to determine whether the maze _can be solved_ by only moving up, right, down and left.  To walk through the maze, all of the "-" cells are off-limits.

Solvable means that there is a path from the starting point to _another_ border cell.

This maze is solvable by walking from A-B-C-D (D is the exit of the maze).

```js
[
  ['-', 'A', '-'],
  ['-', 'B', '-'],
  ['-', 'C', 'D'],
  ['-', '-', '-'],
]
```

This maze is solvable by walking from A-B-C-D-E-G-H-J-K-L-M.

```js
[
  ['-', 'A', '-', '-', '-'],
  ['-', 'B', '-', 'F', '-'],
  ['-', 'C', 'D', 'E', '-'],
  ['-', '-', '-', 'G', '-'],
  ['-', 'K', 'J', 'H', '-'],
  ['-', 'L', '-', 'I', '-'],
  ['-', 'M', '-', '-', '-'],
]
```

This maze is not solvable because there's no path from A to a cell on the border.

```js
[
  ['-', 'A', '-', '-', '-'],
  ['-', 'B', '-', 'F', '-'],
  ['-', 'C', 'D', 'E', '-'],
  ['-', '-', '-', 'G', '-'],
  ['-', '-', 'J', 'H', '-'],
  ['-', '-', '-', 'I', '-'],
  ['-', '-', '-', '-', '-'],
]
```

This maze not solvable because there's not path from A to another border cell:

```js
[
  ['-', 'A', '-'],
  ['-', '-', '-'],
  ['-', '-', '-'],
  ['-', '-', '-'],
]
```

## Maze rules

For the purposes of this exercise, here are some rules.

1. The maze will be an array of arrays:
  ```js
  [
    ['-', 'A', '-'],
    ['-', 'B', '-'],
    ['F', 'C', 'D'],
    ['-', 'E', '-'],
  ]
  ```
1. You cannot move diagonally - only up, right, down and left
1. You cannot move into a "-", but any other value is valid:

  This is valid:
  ```js
  [
    ['-', 'A', '-'],
    ['-', 'B', '-'],
    ['F', 'C', 'D'],
    ['-', 'E', '-'],
  ]
  ```
  And this is valid:
  ```js
  [
    ['-', 0, '-'],
    ['-', 0, '-'],
    [ 0,  0,  0 ],
    ['-', 0, '-'],
  ]
  ```
1. There are no cycles in the maze
  This is valid:

  ```js
  [
    ['-', 'A', '-'],
    ['-', 'B', '-'],
    ['F', 'C', 'D'],
    ['-', 'E', '-'],
  ]
  ```

  But this is NOT:
  ```js
  [
    ['-', 'A', '-'],
    ['-', 'B', '-'],
    ['F', 'C', 'D'],
    ['-', 'E', '-'],
  ]
  ```
1. You can expect that there will never be two values on a border.

  This will never happen:
  ```js
  [
    ['-', 'A', 'A'],
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-'],
  ]
  ```
1. You can expect that your function will _always_ be called with a valid starting point that is on a border.

  This will never happen:
  ```js
  [
    ['-', 'A', 'A'],
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-'],
  ]
  ```
