// implement a recursive depth-first-search algorithm
// that takes in a maze and a staring point
// and returns a boolean indicating whether or not the maze is solvable or not
//
// This solution will combine the techniques of:
//  - default values for parameters
//  - using findNeighbors to figure out where to go
//  - using isBorder to determine if you've reached a border

var findNeighbors = require('./find-neighbors');
var isBorder = require('./is-border');

// this function takes a maze / point and returns a boolean
module.exports = function mazeSolver(maze, point, path) {

  // since this function will return a boolean, declare the default
  var isSolvable = false;


  return isSolvable;
}
