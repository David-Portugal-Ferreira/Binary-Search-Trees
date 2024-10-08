const Node = require("./node.js");

class Tree {
  constructor(arr) {
    this.arr = buildTree(arr);
  }

  insert(value) {
    let insertNode = new Node(value);
    let parentNode = null;
    let currNode = this.arr;

    while (currNode !== null) {
      parentNode = currNode;
      if (currNode.root > value) {
        currNode = currNode.left;
      } else if (currNode.root < value) {
        currNode = currNode.right;
      } else {
        return this.arr;
      }
    }

    if (parentNode.root > value) {
      parentNode.left = insertNode;
    } else {
      parentNode.right = insertNode;
    }
  }

  deleteItem(value) {
    let node = this.arr;

    // First Node
    if (node.root === value) {
      let leftNodes = node.left;
      this.arr = node.right;
      node = node.right.left;

      while (node.left !== null) {
        node = node.left;
      }
      node.left = leftNodes;
    }

    while (node !== null) {
      if (node.left.root === value) {
        let leftSideNodes = node.left.left;
        node.left = node.left.right;
        if (node.left === null) {
          node.left = leftSideNodes;
          return;
        }
        let nodeLeft = node.left;
        while (nodeLeft !== null && nodeLeft.left !== null) {
          nodeLeft = nodeLeft.left;
        }
        nodeLeft.left = leftSideNodes;
        return;
      } else if (node.right.root === value) {
        let leftSideNodes = node.right.left;
        node.right = node.right.right;
        if (node.right !== null && node.right.left === null) {
          node.right.left = leftSideNodes;
          return;
        }
        if (node.right === null) {
          node.right = leftSideNodes;
          return;
        }
        let leftNodes = node.right.left;
        while (leftNodes !== null && leftNodes.left !== null) {
          leftNodes = leftNodes.left;
        }
        leftNodes.left = leftSideNodes;
        return;
      }

      if (node.root > value) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
  }

  find(value) {
    if (this.arr.root === value) return this.arr;

    let node = this.arr;
    while (node !== null) {
      if (node.root === value) {
        return node;
      }
      if (node.root > value) {
        node = node.left;
      } else {
        node = node.right;
      }
    }

    if (node === null) {
      console.log("The value given is not present in the BST");
      return false;
    }
  }

  levelOrder(callback) {
    if (callback === undefined) {
      throw new Error("You need to provide a callback function!!!");
    }

    let nodes = this.arr;
    let queue = [];
    queue.push(nodes);

    while (queue.length > 0) {
      if (queue[0].left !== null) {
        queue.push(queue[0].left);
      }
      if (queue[0].right !== null) {
        queue.push(queue[0].right);
      }
      callback(queue[0]);
      queue.shift();
    }
  }

  preOrder(callback, arr) {
    if (callback === undefined) {
      throw new Error("No callback function provided");
    }

    if (arr === null) {
      return null;
    } else if (arr !== null) {
      callback(arr);
      this.preOrder(callback, arr.left);
      this.preOrder(callback, arr.right);
    }
    return;
  }

  inOrder(callback, arr) {
    if (callback === undefined) {
      throw new Error("No callback function provided");
    }

    if (arr === null) {
      return null;
    } else if (arr !== null) {
      this.inOrder(callback, arr.left);
      callback(arr);
      this.inOrder(callback, arr.right);
    }
  }

  postOrder(callback, arr) {
    if (callback === undefined) {
      throw new Error("No callback function provided");
    }

    if (arr === null) {
      return null;
    } else if (arr !== null) {
      this.postOrder(callback, arr.left);
      this.postOrder(callback, arr.right);
      callback(arr);
    }
    return;
  }

  height(nodeSearch) {

    let node = this.find(nodeSearch);
	
  }

  depth(nodeDepth) {
    let node = this.arr;
    let depth = 0;

    while (node !== null) {
      if (node.root === nodeDepth) return depth;
      if (node.root > nodeDepth) {
        node = node.left;
        depth++;
      } else if (node.root < nodeDepth) {
        node = node.right;
        depth++;
      }
    }

    return "The node is not present in the tree";
  }

  isBalanced() {
    let leftSideQueue = [this.arr.left];
    let leftSideLevel = 0;
    let rightSideQueue = [this.arr.right];
    let rightSideLevel = 0;

    while (leftSideQueue.length > 0) {
      let node = leftSideQueue.shift();
      if (node.left !== null) leftSideQueue.push(node.left);
      if (node.right !== null) leftSideQueue.push(node.right);
      leftSideLevel++;
    }

    while (rightSideQueue.length > 0) {
      let node = rightSideQueue.shift();
      if (node.left !== null) rightSideQueue.push(node.left);
      if (node.right !== null) rightSideQueue.push(node.right);
      rightSideLevel++;
    }

    let result = rightSideLevel - leftSideLevel;
    return result === 0 || result === 1 || result === -1
      ? console.log(true)
      : console.log(false);
  }

  rebalance() {
    let newArr = [];
    this.inOrder((arr) => {
      newArr.push(arr.root);
    }, this.arr);

    this.arr = balanceBinaryTree(newArr);
  }
}

function buildTree(dataArray) {
  let arr = [];
  for (let i = 0; i < dataArray.length; i++) {
    if (arr.includes(dataArray[i])) {
      continue;
    } else {
      arr.push(dataArray[i]);
    }
  }

  arr = mergeSort(arr);
  let nodeArray = balanceBinaryTree(arr);

  return nodeArray;
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;
  let mid = Math.floor(arr.length / 2);

  let leftSide = mergeSort(arr.slice(0, mid));
  let rigthSide = mergeSort(arr.slice(mid));
  return merge(leftSide, rigthSide);
}
function merge(left, rigth) {
  let newArr = [];
  let i = 0;
  let j = 0;
  let k = 0;

  while (left.length > i && rigth.length > j) {
    if (left[i] < rigth[j]) {
      newArr[k++] = left[i++];
    } else {
      newArr[k++] = rigth[j++];
    }
  }

  while (left.length > i) {
    newArr[k++] = left[i++];
  }

  while (rigth.length > j) {
    newArr[k++] = rigth[j++];
  }

  return newArr;
}

function balanceBinaryTree(arr) {
  if (arr.length <= 0) return null;
  let mid = Math.floor(arr.length / 2);
  if (mid === 0) return new Node(arr[0]);

  let node = new Node(arr[mid]);
  node.left = balanceBinaryTree(arr.slice(0, mid));
  node.right = balanceBinaryTree(arr.slice(mid + 1));

  return node;
}

module.exports = Tree;
