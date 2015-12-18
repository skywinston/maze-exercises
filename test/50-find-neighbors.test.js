var findNeighbors = require('../src/find-neighbors');
var expect = require('chai').expect;

describe("findNeighbors", function(){
  var maze;

  it("returns an empty array if all neighbors have a dash", function () {
    maze = [
      ['-', '-', '-'],
      ['-', '-', '-'],
      ['-', 'x', '-'],
      ['-', '-', '-'],
    ]

    expect(findNeighbors(maze, [2,1])).to.eql([]);
  });

  it("returns neighbors for the top left corner", function () {
    maze = [
      ['X', 'X', 'X'],
      ['X', 'X', 'X'],
      ['X', 'X', 'X'],
      ['X', 'X', 'X'],
    ]

    expect(findNeighbors(maze, [0,0])).to.eql([
      [0,1],
      [1,0],
    ]);
  });

  it("returns neighbors for the bottom left corner", function () {
    maze = [
      ['O', 'O', 'O'],
      ['O', 'O', 'O'],
      ['O', 'O', 'O'],
      ['O', 'O', 'O'],
    ]

    expect(findNeighbors(maze, [3,0])).to.eql([
      [2,0],
      [3,1],
    ]);
  });

  it("returns neighbors for the bottom right corner", function () {
    maze = [
      ['x', 'x', 'x'],
      ['x', 'x', 'x'],
      ['x', 'x', 'x'],
      ['x', 'x', 'x'],
    ]

    expect(findNeighbors(maze, [3,2])).to.eql([
      [2,2],
      [3,1],
    ]);
  });

  it("returns neighbors for the top right corner", function () {
    maze = [
      ['x', 'x', 'x'],
      ['x', 'x', 'x'],
      ['x', 'x', 'x'],
      ['x', 'x', 'x'],
    ]

    expect(findNeighbors(maze, [0,2])).to.eql([
      [1,2],
      [0,1],
    ]);
  })

  it("returns neighbors for the left borders", function () {
    maze = [
      ['x', 'x', 'x'],
      ['x', 'x', 'x'],
      ['x', 'x', 'x'],
      ['x', 'x', 'x'],
    ]

    expect(findNeighbors(maze, [1,0])).to.eql([
      [0,0],
      [1,1],
      [2,0],
    ]);
  })

  it("returns neighbors for the right borders", function () {
    maze = [
      ['x', 'x', 'x'],
      ['x', 'x', 'x'],
      ['x', 'x', 'x'],
      ['x', 'x', 'x'],
    ]

    expect(findNeighbors(maze, [1,2])).to.eql([
      [0,2],
      [2,2],
      [1,1],
    ]);
  })

  it("returns neighbors for the top borders", function () {
    maze = [
      ['x', 'x', 'x'],
      ['x', 'x', 'x'],
      ['x', 'x', 'x'],
      ['x', 'x', 'x'],
    ]

    expect(findNeighbors(maze, [0,1])).to.eql([
      [0,2],
      [1,1],
      [0,0],
    ]);
  })

  it("returns neighbors for the bottom borders", function () {
    maze = [
      ['x', 'x', 'x'],
      ['x', 'x', 'x'],
      ['x', 'x', 'x'],
      ['x', 'x', 'x'],
    ]

    expect(findNeighbors(maze, [3,1])).to.eql([
      [2,1],
      [3,2],
      [3,0],
    ]);
  })

  it("returns neighbors for the middle", function () {
    maze = [
      ['x', 'x', 'x'],
      ['x', 'x', 'x'],
      ['x', 'x', 'x'],
      ['x', 'x', 'x'],
    ]

    expect(findNeighbors(maze, [1,1])).to.eql([
      [0,1],
      [1,2],
      [2,1],
      [1,0],
    ]);
  })

  it("omits neighbors that don't have an x", function () {
    maze = [
      ['-', '-', '-'],
      ['-', 'x', '-'],
      ['-', '-', '-'],
      ['-', '-', '-'],
    ]

    expect(findNeighbors(maze, [1,1])).to.eql([]);
  })

  it("omits neighbors that are included in the second argument", function () {
    maze = [
      ['x', 'x', 'x'],
      ['x', 'x', 'x'],
      ['x', 'x', 'x'],
      ['x', 'x', 'x'],
    ]

    expect(findNeighbors(maze, [1,1], [0,1])).to.eql([
      // [0,1], <-- ommitted because we passed it as the second argument
      [1,2],
      [2,1],
      [1,0],
    ]);

    expect(findNeighbors(maze, [1,1], [1,2])).to.eql([
      [0,1],
      // [1,2], <-- ommitted because we passed it as the second argument
      [2,1],
      [1,0],
    ]);

    expect(findNeighbors(maze, [1,1], [2,1])).to.eql([
      [0,1],
      [1,2],
      // [2,1] <-- ommitted because we passed it as the second argument
      [1,0],
    ]);

    expect(findNeighbors(maze, [1,1], [1,0])).to.eql([
      [0,1],
      [1,2],
      [2,1],
      // [1,0] <-- ommitted because we passed it as the second argument
    ]);
  })
})
