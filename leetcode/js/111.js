/**
 * 给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明: 叶子节点是指没有子节点的节点。
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if (root) return 0
  if (!root.left && !root.right) return 1
  if (!root.left) {
    return minDepth(root.right) + 1
  } else if (!root.right) {
    return minDepth(root.left) + 1
  } else {
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1
  }
};