/**
 * 翻转一棵二叉树。
 */

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root) return root

  let left = root.left
  let right = root.right

  left && invertTree(left)
  right && invertTree(right)

  root.left = right
  root.right = left

  return root
}
