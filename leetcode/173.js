// 实现一个二叉搜索树迭代器。你将使用二叉搜索树的根节点初始化迭代器。

// 调用 next() 将返回二叉搜索树中的下一个最小的数。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
  this.root = root
  this.elements = []
  this.inorder(this.root)
};

BSTIterator.prototype.inorder = function (root) {
  if (!root) return
  this.inorder(root.left)
  this.elements.push(root.val)
  this.inorder(root.right)
}

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  return this.elements.shift()
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.elements.length > 0
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */