// 二叉树
// 树由一组以边连接的节点组成。二叉树是一种特殊的树，它的子节点个数不超过两个
// 二叉查找树(BST): 相对父节点较小的值保存在左节点中，较大的值保存在右节点中

// BST插入过程: 检查 BST 是否有根节点，如果没有，那么这是棵新树，该节点就是根节点. 如果待插入节点不是根节点，那么就需要准备遍历 BST，找到插入的适当位置, 算法过程如下
// 1 设根节点为当前节点
// 2 如果待插入节点保存的数据小于当前节点，则设新的当前节点为原节点的左节点; 反之，执行第 4 步
// 3 如果当前节点的左节点为 null，就将新的节点插入这个位置，退出循环;反之，继续执行下一次循环
// 4 设新的当前节点为原节点的右节点
// 5 如果当前节点的右节点为 null，就将新的节点插入这个位置，退出循环;反之，继续执行下一次循环

// BST 遍历过程
// 先序遍历: 根结点 ---> 左子树 ---> 右子树
// 中序遍历: 左子树 ---> 根结点 ---> 右子树 
// 后序遍历: 左子树 ---> 右子树 ---> 根结点

// 获取最值
// 最小值总是在左节点上，最大值总是在右节点上

// 二叉树的节点类
function Node (data, left, right) {
  this.data = data // 节点值
  this.left = left // 左节点
  this.right = right // 右节点
  this.show = show // 返回节点值

  function show () {
		return this.data
  }
}

function BST () {
  this.root = null
  this.insert = insert // 插入节点
  this.inOrderTraverse = inOrderTraverse // 中序遍历
  this.preOrderTraverse = preOrderTraverse // 先序遍历
  this.postOrderTraverse = postOrderTraverse // 后序遍历
  this.max = max // 获取最大值
  this.min = min // 获取最小值
  this.search = search // 查找指定值

  function insert (data) {
    let newNode = new Node(data, null, null)
    if (!this.root) {
      this.root = newNode
    } else {
      insertNode(this.root, newNode)
    }
  }

  function insertNode (node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode
      } else {
        insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        insertNode(node.right, newNode)
      }
    }
  }

  function inOrderTraverse () {
    inOrderTraverseNode(this.root)
  }
  function inOrderTraverseNode(node) {
    if (node !== null) {
      inOrderTraverseNode(node.left)
      console.log(node.show())
      inOrderTraverseNode(node.right)
    } 
  }

  function preOrderTraverse () {
    preOrderTraverseNode(this.root)
  }
  function preOrderTraverseNode (node) {
    if (node !== null) {
      console.log(node.show())
      preOrderTraverseNode(node.left)
      preOrderTraverseNode(node.right)
    }
  }

  function postOrderTraverse () {
    postOrderTraverseNode(this.root)
  }
  function postOrderTraverseNode (node) {
    if (node !== null) {
      postOrderTraverseNode(node.left)
      postOrderTraverseNode(node.right)
      console.log(node.show())
    }
  }

  function max () {
    return maxNode(this.root)
  }
  function maxNode (node) {
    if (node) {
      while (node && node.right !== null) {
        node = node.right
      }
      return node.data
    }
  }

  function min () {
    return minNode(this.root)
  }
  function minNode (node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left
      }
      return node.data
    }
  }

  function search (data) {
    return searchNode(this.root, data)
  }
  function searchNode (node, data) {
    if (!node) {
      return false
    }
    if (data < node.data) {
      return searchNode(node.left, data)
    } else if (data > node.data) {
      return searchNode(node.right, data)
    } else {
      return true
    }
  }
}


const nodes = [8, 3, 10, 1, 6, 14, 4, 7, 13]

let bst = new BST();
nodes.forEach(function (key) {
  bst.insert(key)
})

bst.inOrderTraverse()
bst.preOrderTraverse()
bst.postOrderTraverse()

let isExist = bst.search(3)
console.log(isExist)