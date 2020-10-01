/**
输入一棵二叉树和一个整数，打印出二叉树中节点值的和为输入整数的所有路径。从树的根节点开始往下一直到叶节点所经过的节点形成一条路径。
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  let ans = []
  dfs(root, sum, [])
  return ans
  function dfs (node, sum, path) {
    if (!node) return
    let val = node.val
    if (!node.left && !node.right) {
      if (val === sum) {
        path.push(val)
        ans.push(path.slice())
        return
      }
    } else {
      path.push(val)
      dfs(node.left, sum - val, path.slice())
      dfs(node.right, sum - val, path.slice())
    }
  }
};
