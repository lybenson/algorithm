/**
 * Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
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
var diameterOfBinaryTree = function(root) {
  let ans = 1

  function traverse(node) {
    if (!node) return 0
    let leftDepth = traverse(node.left)
    let rightDepth = traverse(node.right)
    ans = Math.max(ans, leftDepth + rightDepth + 1)
    return Math.max(leftDepth, rightDepth) + 1
  }
  traverse(root)
  return ans - 1
};