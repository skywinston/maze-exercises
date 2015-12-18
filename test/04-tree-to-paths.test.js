var treeToPaths = require('../src/tree-to-paths');
var expect = require('chai').expect;

describe("treeToPaths", function(){
  it("returns an array of paths from a tree", function () {
    var tree = {
      value: "A",
      children: [
        { value: "B", children: []},
        { value: "C", children: []},
      ]
    };

    var actual = treeToPaths(tree);

    expect(JSON.stringify(actual)).to.eql(JSON.stringify([
      ["A"],
      ["A", "B"],
      ["A", "C"],
    ]))
  })

  it("works even for uneven trees", function () {
    var tree = {
      value: "A",
      children: [
        {
          value: "B",
          children: [
            {value: "E", children: []}
          ]
        },
        { value: "C", children: []},
        {
          value: "D",
          children: [
            {value: "F", children: []},
            {value: "G", children: []}
          ]
        },
      ]
    };

    var actual = treeToPaths(tree);

    expect(JSON.stringify(actual)).to.eql(JSON.stringify([
      ["A"],
      ["A", "B"],
      ["A", "B", "E"],
      ["A", "C"],
      ["A", "D"],
      ["A", "D", "F"],
      ["A", "D", "G"],
    ]))
  })
})
