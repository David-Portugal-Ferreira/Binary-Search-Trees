const Node = require("./node.js");

class Tree {
  constructor(arr) {
    this.arr = buildTree(arr);
  }

  insert(value) {
	let insertNode = new Node(value)
	let tmp = this.arr
	if(insertNode.root < tmp.root) {
		tmp = tmp.left;
		while(tmp !== null) {
			if (insertNode.root < tmp.root) {
				if(tmp.left === null) {
					tmp.left = insertNode;
					return
				} else {
					tmp = tmp.left;
				}
			} else {
				if(tmp.right === null) {
					tmp.right = insertNode;
					return
				} else {
					tmp = tmp.right;
				}
			}
		}
		tmp = insertNode
	}
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
	if(arr.length <= 0) return null;
	let mid = Math.floor(arr.length / 2);
	if(mid === 0) return new Node(arr);

	let node = new Node(arr[mid]);
	node.left = balanceBinaryTree(arr.slice(0, mid));
	node.right = balanceBinaryTree(arr.slice(mid + 1));

	return node;
}

module.exports = Tree;