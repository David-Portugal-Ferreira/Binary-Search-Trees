const Node = require("./node.js");

class Tree {
  root = null;

  constructor(arr) {
    this.arr = arr;
  }
}

function buildTree(dataArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]) {
	let arr = [];
	for(let i = 0; i < dataArray.length; i++) {
		if(arr.includes(dataArray[i])) {
			continue;
		} else {
			arr.push(dataArray[i]);
		}
	}

	console.log(mergeSort(arr));
}



function mergeSort(arr) {
	if(arr.length === 1) return arr;
	let mid = Math.floor(arr.length / 2);

	let leftSide = mergeSort(arr.slice(0, mid))
	let rigthSide = mergeSort(arr.slice(mid))
	return merge(leftSide, rigthSide);
}

function merge(left, rigth) {
	let newArr = [];
	let i = 0;
	let j = 0;
	let k = 0;

	while(left.length > i && rigth.length > j) {
		if(left[i] < rigth[j]) {
			newArr[k++] = left[i++];
		} else {
			newArr[k++] = rigth[j++]; 
		}
	}

	if(left.length > i) {
		newArr[k++] = left[i++]
	}

	if(rigth.length > j) {
		newArr[k++] = rigth[j++]
	}

	return newArr
}


console.log(buildTree());