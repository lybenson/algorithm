/**
 * 计算给定二叉树的所有左叶子之和。
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */

var sumOfLeftLeaves = function(root) {
  if (!root) return 0
  if (root.left && !root.left.left && !root.left.right) {
    return root.left.val + sumOfLeftLeaves(root.right)
  }
  return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right)
};
