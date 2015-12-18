var anyNode = require('../src/any-node');
var expect = require('chai').expect;

describe("anyNode", function(){
  it("returns true if any node in the tree contains the specified value", function () {

    var tree = {
      value: "A",
      children: [
        { value: "B", children: [] },
        {
          value: "C",
          children: [
            { value: "D", children: [] }
          ]
        },
      ]
    };

    expect(anyNode(tree, "A")).to.eql(true)
    expect(anyNode(tree, "B")).to.eql(true)
    expect(anyNode(tree, "C")).to.eql(true)
    expect(anyNode(tree, "D")).to.eql(true)
  })

  it("returns false if zero nodes in the tree contain the specified value", function () {

    var tree = {
      value: "A",
      children: [
        { value: "B", children: [] },
        {
          value: "C",
          children: [
            { value: "D", children: [] }
          ]
        },
      ]
    };

    expect(anyNode(tree, "E")).to.eql(false)
  })
})
