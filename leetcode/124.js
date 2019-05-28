/**
 * 给定一个非空二叉树，返回其最大路径和。

本题中，路径被定义为一条从树中任意节点出发，达到任意节点的序列。该路径至少包含一个节点，且不一定经过根节点。
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
var maxPathSum = function(root) {
  let ans = -Number.MAX_VALUE
  pathSum(root)
  return ans
  function pathSum (node) {
    if (!node) return 0
    let left = Math.max(pathSum(node.left), 0)
    let right = Math.max(pathSum(node.right), 0)
    let sum = left + right + node.val
    ans = Math.max(sum, ans)
    return Math.max(left, right) + node.val
  }
};
