const Tree = require("./tree")

let arr = [];
for(let i = 0; i < 100; i++) {
    let numb = Math.floor(Math.random() * 99);
    arr.push(numb);
}

let tree = new Tree(arr);
tree.isBalanced();
console.log("\nLevel Order");
tree.levelOrder(printNodeRoot, tree.arr)
console.log("\nPre Order");
tree.preOrder(printNodeRoot, tree.arr);
console.log("\nIn Order");
tree.inOrder(printNodeRoot, tree.arr);
console.log("\nPost Order");
tree.postOrder(printNodeRoot, tree.arr)
function printNodeRoot(node) {   // Works
    console.log(`Root: ${node.root}`)
}

tree.insert(102);
tree.insert(130);
tree.insert(124);
tree.insert(109);
tree.insert(178);
tree.isBalanced()
tree.rebalance();
tree.isBalanced()

console.log("\nLevel Order");
tree.levelOrder(printNodeRoot, tree.arr)
console.log("\nPre Order");
tree.preOrder(printNodeRoot, tree.arr);
console.log("\nIn Order");
tree.inOrder(printNodeRoot, tree.arr);
console.log("\nPost Order");
tree.postOrder(printNodeRoot, tree.arr)