var findNeighbors = require('./find-neighbors');

// implement a recursive depth-first-search algorithm
// that takes a maze and a starting point,
// then walks through the maze (using the findNeighbors function)
// and returns a node whose structure represents the maze
//
// WHY? - the maze solution will require you to use the findNeighbors method
//  to give you the array of nodes to visit next
//
// NOTE: you can represent a node in a tree with a simple object, like:
//
//  {value: "A", point: [0,0], children: []}
//

module.exports = function mazeToTree(maze, point, parent) {
}
