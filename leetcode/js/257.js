/**
 * 给定一个二叉树，返回所有从根节点到叶子节点的路径。
 */

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  let res = []
  if (!root) return res
  if (!root.left && !root.right) {
    res.push(root.val)
    return res
  }
  let leftPaths = binaryTreePaths(root.left)
  for (let i = 0; i < leftPaths.length; i++) {
    res.push(root.val + '->' + leftPaths[i])
  }
  let rightPaths = binaryTreePaths(root.right)
  for (let i = 0; i < rightPaths.length; i++) {
    res.push(root.val + '->' + rightPaths[i])
  }

  return res
};
