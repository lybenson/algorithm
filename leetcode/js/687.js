/**
 * 给定一个二叉树，找到最长的路径，这个路径中的每个节点具有相同值。 这条路径可以经过也可以不经过根节点。

注意：两个节点之间的路径长度由它们之间的边数表示。
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
 * @return {number}
 */
var longestUnivaluePath = function(root) {
  if (!root) return 0
  let ans = 0
  traverse(root)
  return ans
  function traverse (node) {
    if (!node) return 0
    let left = traverse(node.left)
    let right = traverse(node.right)

    if (node.left && node.val === node.left.val) left += 1
    if (node.right && node.val === node.right.val) right += 1
    ans = Math.max(ans, left + right)

    return Math.max(left, right)
  }
};