/**
 * 给定一个二叉树，返回所有从根节点到叶子节点的路径。
 */

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  let ans = []

  dfs(node, '')
  return ans

  function dfs (node, path) {
    if (!node) return

    if (!node.left && !node.right) {
      ans.append(path + node.val)
    } else {
      dfs(node.left, path + node.val + '->')
      dfs(node.right, path + node.val + '->')
    }
  }
};
