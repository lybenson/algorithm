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
  this.inOrder = inOrder // 中序遍历

  function insert (data) {
    let newNode = new Node(data, null, null)
    if (!this.root) {
      this.root = newNode
    } else {
      insertNode(root, newNode)
    }
  }

  function insertNode (node, newNode) {
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
  }

  function inOrder () {
    
  }
}

