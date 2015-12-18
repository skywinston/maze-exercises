var isBorder = require('../src/is-border');
var expect = require('chai').expect;

xdescribe("isBorder", function(){
  var maze;

  beforeEach(function () {
    maze = [
      ['x', 'x', 'x'],
      ['x', 'x', 'x'],
      ['x', 'x', 'x'],
      ['x', 'x', 'x'],
    ]
  })

  it("returns true for corners", function () {
    expect(isBorder(maze, [0,0])).to.eq(true);
    expect(isBorder(maze, [0,2])).to.eq(true);
    expect(isBorder(maze, [3,2])).to.eq(true);
    expect(isBorder(maze, [3,0])).to.eq(true);
  })

  it("returns true for top and bottom edges", function () {
    expect(isBorder(maze, [0,1])).to.eq(true);
    expect(isBorder(maze, [3,1])).to.eq(true);
  })

  it("returns true for left and right edges", function () {
    expect(isBorder(maze, [1,0])).to.eq(true);
    expect(isBorder(maze, [1,2])).to.eq(true);
  })

  it("returns false for non-edges", function () {
    expect(isBorder(maze, [1,1])).to.eq(false);
    expect(isBorder(maze, [2,1])).to.eq(false);
  })
})
