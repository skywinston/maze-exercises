var mazeToTree = require('../src/maze-to-tree');
var expect = require('chai').expect;

xdescribe("mazeToTree", function(){
  it("returns a tree built from a maze", function () {
    maze = [
      ['-', 'A', '-'],
      ['-', 'B', '-'],
      ['F', 'C', 'D'],
      ['-', 'E', '-'],
    ]

    //    A
    //    |
    //    B
    //    |
    //    C
    //   /|\
    //  D E F

    var root = mazeToTree(maze, [0,1]);

    expect(root.value).to.eql("A")
    expect(root.children[0].value).to.eql("B")

    var nodeC = root.children[0].children[0];
    expect(nodeC.value).to.eql("C");
    expect(nodeC.children.length).to.eq(3)
    expect(nodeC.children[0].value).to.eq("D")
    expect(nodeC.children[1].value).to.eq("E")
    expect(nodeC.children[2].value).to.eq("F")
  })

  it("returns a tree built from a maze", function () {
    maze = [
      ['-', 'A', '-'],
      ['-', 'B', '-'],
      ['F', 'C', 'D'],
      ['-', 'E', '-'],
    ]

    //      F
    //      |
    //      C
    //     /|\
    //    B D E
    //   /
    //  A

    var root = mazeToTree(maze, [2,0]);

    expect(root.value).to.eql("F")

    var nodeC = root.children[0];
    expect(nodeC.value).to.eql("C");

    expect(nodeC.children.length).to.eq(3)
    expect(nodeC.children[0].value).to.eq("B")
    expect(nodeC.children[1].value).to.eq("D")
    expect(nodeC.children[2].value).to.eq("E")
  })
})
