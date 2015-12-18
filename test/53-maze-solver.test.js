var mazeSolver = require('../src/maze-solver');
var expect = require('chai').expect;

xdescribe("mazeSolver", function(){
  it("returns true for a solvable maze", function () {
    var maze = [
      ['-', 'A', '-'],
      ['-', 'B', '-'],
      ['-', 'C', 'D'],
      ['-', '-', '-'],
    ];

    expect(mazeSolver(maze, [0,1])).to.eql(true)
  })

  it("returns true for a maze with several invalid paths", function () {
    var maze = [
      ['-', 'A', '-', '-', '-'],
      ['-', 'B', '-', 'F', '-'],
      ['-', 'C', 'D', 'E', '-'],
      ['-', '-', '-', 'G', '-'],
      ['-', 'K', 'J', 'H', '-'],
      ['-', 'L', '-', 'I', '-'],
      ['-', 'M', '-', '-', '-'],
    ];

    expect(mazeSolver(maze, [0,1])).to.eql(true)
  })

  it("returns false for an unsolvable maze", function () {
    var maze = [
      ['-', 'A', '-', '-', '-'],
      ['-', 'B', '-', 'F', '-'],
      ['-', 'C', 'D', 'E', '-'],
      ['-', '-', '-', 'G', '-'],
      ['-', '-', 'J', 'H', '-'],
      ['-', '-', '-', 'I', '-'],
      ['-', '-', '-', '-', '-'],
    ];

    expect(mazeSolver(maze, [0,1])).to.eql(false)
  })
})
