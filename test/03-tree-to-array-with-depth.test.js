var treeToArrayWithDepth = require('../src/tree-to-array-with-depth');
var expect = require('chai').expect;

xdescribe("treeToArrayWithDepth", function(){
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

    expect(treeToArrayWithDepth(tree)).to.eql([ "A0", "B1", "D2", "C1", "E2" ])
  })
})
