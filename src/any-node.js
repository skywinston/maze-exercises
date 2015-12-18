// implement a recursive depth-first-search algorithm
// that takes a node and returns a boolean
// indicating whether any node in the tree contains the given value
//
// WHY? - the maze finder will require you to check if any nodes are border nodes

module.exports = function anyNode(node, value) {
  // this function takes a node and returns a boolean value,
  // so initialize the return value
    var result = false;
    if (node.value === value) return true;

    for(var i = 0; i < node.children.length; i++){
        var x = anyNode(node.children[i], value);
        result = result || x;
    }

    return result;
};
