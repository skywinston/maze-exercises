// write an algorithm that will return all neighbors of a point in the maze
// according to these rules:
//
//  - return the points in the order of up-right-down-left (clockwise from the node)
//  - don't include any points that would be out-of-bounds
//  - don't include points whose value is the "-" character
//  - don't include any points whose y/x values match the y/x values of the _exclude_ parameter
//
// WHY? - this is the function you'll use in your maze solution to determine the "children"

module.exports = function findNeighbors(maze, point, exclude) {
  var directions = [
    [y - 1, x], // up (north)
    [y, x + 1], // right (east)
    [y + 1, x], // down (south)
    [y, x - 1]  // left (west)
  ];
  var y = point[0];
  var x = point[1];
  var neighbors = [];

  if (maze[y - 1][x] !== '-' && maze[y - 1][x] !== undefined) neighbors.push(directions[0]);
  if (maze[y][x + 1] !== '-' && maze[y][x + 1] !== undefined) neighbors.push(directions[1]);
  if (maze[y + 1][x] !== '-' && maze[y + 1][x] !== undefined) neighbors.push(directions[2]);
  if (maze[y][x - 1] !== '-' && maze[y][x - 1] !== undefined) neighbors.push(directions[3]);

  return neighbors;

};
