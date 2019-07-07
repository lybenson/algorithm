/**
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：

一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。
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
var isBalanced = function(root) {
  if (!root) return true
  let balanced = true
  depth(root)

  return balanced
  function depth (node) {
    if (!node || !balanced) return
    let leftDepth = depth(node.left)
    let rightDepth = depth(node.right)
    if (Math.abs(leftDepth - rightDepth) > 1) {
      balanced = false
      return
    }
    return Math.max(leftDepth, rightDepth) + 1
  }
}
