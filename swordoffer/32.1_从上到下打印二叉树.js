/**
从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。
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
 * @return {number[]}
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
