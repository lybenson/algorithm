/**
 * 给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。

说明: 叶子节点是指没有子节点的节点。
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
  function dfs(node, sum, path) {
    if (!node) return

    if(!node.left && !node.right) {
      if (node.val === sum) {
        path.push(node.val)
        ans.push(path)
        path.pop()
      }
      return
    }
    path.push(node.val)
    let remain = sum - node.val
    dfs(node.left, remain, path)
    dfs(node.right, remain, path)
    path.pop()
  }
}
