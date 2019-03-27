/**
 * 给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。

例如:
给定二叉树: [3,9,20,null,null,15,7],
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return []
  let ans = []
  dfs(root, 0)
  return ans

  function dfs (node, depth) {
    if (!node) return
    if (depth >= ans.length) ans.push([])
    ans[depth].push(node.val)
    dfs(node.left, depth + 1)
    dfs(node.right, depth + 1)
  }
};
