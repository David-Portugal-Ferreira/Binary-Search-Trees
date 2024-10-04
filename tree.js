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

  deleteItem(value) {}

  find(value) {
    if (this.arr.root === value)
      return {
        root: this.arr.root,
        left: this.arr.left,
        right: this.arr.right,
      };

	  let node = this.arr;
	  while(node !== null) {
		if(node.root = value) {
			return {
				root: node.root,
				left: node.left.root,
				right: node.right.root,
			}
		}
		if(node.root > value) {
			node = node.left;
		} else {
			node = node.right;
		}
	  }

	  if(node === null) {
		console.log("The value given is not present in the BST");
		return;
	  }
  }

  levelOrder(callback) {
    if (callback === undefined) {
      throw new Error("You need to provide a callback function!!!");
    }
  }

  inOrder(callback) {}

  preOrder(callback) {}

  postorder(callback) {}

  height(node) {}

  depth(node) {}

  isBalanced() {}

  rebalance() {}
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
