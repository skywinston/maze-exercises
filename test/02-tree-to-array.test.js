var treeToArray = require('../src/tree-to-array');
var expect = require('chai').expect;

xdescribe("treeToArray", function(){
  it("returns an array of node values in the order they were visited", function () {

    var tree = {
      value: "A",
      children: [
        {
          value: "B",
          children: [
            { value: "D", children: [] }
          ]
        },
        {
          value: "C",
          children: [
            { value: "E", children: [] }
          ]
        },
      ]
    };

    expect(treeToArray(tree)).to.eql(["A", "B", "D", "C", "E"])
  })
})
