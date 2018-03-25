function BinaryTree() {
  var Node = function (key) {
    this.key = key; // 节点的值
    this.left = null; // 左箭头
    this.right = null; // 右箭头
  };

  var root = null; // 根节点

  var insertNode = function (node, newNode ) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
      }
    }
  };

  this.insert = function (key) {
    var newNode = new Node(key)
    if (root === null) {
      root = newNode;
    } else {
      insertNode(root, newNode);

      // 所有的数据存储在root变量中
      // console.log(root) 
    }
  };

  // 中序遍历
  this.inOrderTraverse = function (callback) {
    ininOrderTraverseNode(root, callback);
  }
  var ininOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      ininOrderTraverseNode(node.left, callback);
      callback(node.key)
      ininOrderTraverseNode(node.right, callback)
    }
  }

  // 前序遍历
  this.preOrderTraverse = function (callback) {
    preOrderTraverseNode(root, callback)
  }
  var preOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      callback(node.key)
      preOrderTraverseNode(node.left, callback)
      preOrderTraverseNode(node.right, callback)
    }
  }

  // 后序遍历
  this.postOrderTraverse = function (callback) {
    postOrderTraverseNode(root, callback)
  }
  var postOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      postOrderTraverseNode(node.left, callback)
      postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  };

  // 查找最小值 - 左子树有最大值
  this.min = function () {
    return minNode(root);
  }
  var minNode = function (node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left
      }
      return node.key
    }
  }

  // 查找最大值 - 右子树有最大值
  this.max = function () {
    return maxNode(root);
  }
  var maxNode = function (node) {
    if (node) {
      while (node && node.right !== null) {
        node = node.right
      }
      return node.key
    }
  }

  // 查找节点
  this.search = function (key) {
    return searchNode(root, key)
  }
  var searchNode = function (node, key) {
    if (node === null) {
      return false;
    }
    if (key < node.key) {
      return searchNode(node.left, key)
    } else if (key > node.key) {
      return searchNode(node.right, key)
    } else {
      return true
    }
  }
}

// 构建排序二叉树 (左节点小于根节点, 右节点大于根节点)
var nodes = [8, 3, 10, 1, 6, 14, 4, 7, 13];

var binaryTree = new BinaryTree();
nodes.forEach(function (key) {
  binaryTree.insert(key);
})

var callback = function (key) {
  console.log(key)
}

// binaryTree.inOrderTraverse(callback);
// binaryTree.preOrderTraverse(callback);
// binaryTree.postOrderTraverse(callback);

var min = binaryTree.min()
var max = binaryTree.max()
console.log(min)
console.log(max)

var isExist = binaryTree.search(3)
console.log(isExist ? 'true' : 'false')