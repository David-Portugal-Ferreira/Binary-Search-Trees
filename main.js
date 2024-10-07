const Tree = require("./tree")

let tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])

console.log(tree.arr.left) // Works
// tree.insert(87)  // Works
// console.log(tree.arr) 
tree.deleteItem(1);  // Works - LeftSide
console.log(tree.arr.left)
// console.log(tree.arr.right)
// console.log(tree.find(7));   // Works
// tree.levelOrder(printNodeRoot);  // Works

// console.log("\nPre Order");
// tree.preOrder(printNodeRoot, tree.arr);  //Works
// console.log("\nIn Order");
// tree.inOrder(printNodeRoot, tree.arr);   // Works
// console.log("\nPost Order");
// tree.postOrder(printNodeRoot, tree.arr);    // Works
// function printNodeRoot(node) {   // Works
//     console.log(`Root: ${node.root}`)
// }

// tree.insert(6)  // Working
// console.log(tree.height(4)); // Not Working
// console.log(tree.rebalance(tree.arr));   // Not Working

// console.log(tree.depth(6)) // Works