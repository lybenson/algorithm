/**
 * 给定一个二叉树，检查它是否是镜像对称的。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isMirror = function(root1, root2) {
  if (!root1 && !root2) {
      return true
  }
  if (!root1 || !root2) {
      return false
  }
  return (root1.val === root2.val) && isMirror(root1.left, root2.right) && isMirror(root1.right, root2.left)
}

var isSymmetric = function(root) {
  return isMirror(root, root)
}
