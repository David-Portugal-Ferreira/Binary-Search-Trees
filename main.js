const Tree = require("./tree")

let tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])

console.log(tree.arr)    // Works
// tree.insert(87)  // Works
// tree.deleteItem(8);
// tree.levelOrder();
// console.log(tree.find(7));   // Works
// tree.levelOrder(printNodeRoot);
// tree.inOrder(printNodeRoot, tree.arr);   // Works
// tree.preOrder(printNodeRoot, tree.arr);  //Works
tree.postOrder(printNodeRoot, tree.arr);


function printNodeRoot(node) {
    console.log(`Root: ${node.root}`)
}