const Tree = require("./tree")

let tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])

// console.log(tree.arr)    // Works
// tree.insert(87)  // Works
console.log(tree.arr) 
tree.deleteItem(1);
console.log(tree.arr) 
// tree.levelOrder();
// console.log(tree.find(7));   // Works
// tree.levelOrder(printNodeRoot);

// console.log("\nPre Order");
// tree.preOrder(printNodeRoot, tree.arr);  //Works
// console.log("\nIn Order");
// tree.inOrder(printNodeRoot, tree.arr);   // Works
// console.log("\nPost Order");
// tree.postOrder(printNodeRoot, tree.arr);    // Works
// function printNodeRoot(node) {
//     console.log(`Root: ${node.root}`)
// }

// tree.insert(6)
// console.log(tree.height(4));
// console.log(tree.rebalance(tree.arr));

// console.log(tree.depth(87)) // Works