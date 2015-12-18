// implement a recursive depth-first-search algorithm
// that takes a node and returns an array of arrays
// containing all of the possible paths down the tree, starting at the root
//
// WHY? - this forms the basis of the maze solution
//  - it builds on the default value pattern, but in this case uses an array
//  - it also builds on the accumulator pattern

module.exports = function treeToPaths(node, path) {
    var result = [];
    var path = path || [];
    path.push(node.value);
    result.push(path);

    node.children.forEach( function (child) {
        result = result.concat(treeToPaths(child, path.slice(0)));
    });

    return result;
};
