// implement a recursive depth-first-search algorithm
// that takes a node and returns an array
// containing the values _and depths_ of all the visited nodes
//
// WHY? - to introduce the concept of "default values" for parameters
//  such as `depth = depth || 0` - it's the way to pass state into recursive functions
//  without having to pass in the initial value

module.exports = function treeToArray(node, depth) {
  // this function takes a node and returns and array
  // so initialize the return value
  var result = [];

  function go (node, depth) {
    var depth = depth || 0;
    result.push(node.value + depth);
    node.children.forEach( function (child) {
      go(child, depth + 1);
    });
  }

  go(node);

  return result;
}
