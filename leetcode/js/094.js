/**
 * 给定一个二叉树，返回它的中序 遍历。
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
var inorderTraversal = function(root) {
  let ans = []
  inOrderTraverseNode(root)
  return ans
  function inOrderTraverseNode(node) {
    if (node !== null) {
      inOrderTraverseNode(node.left)
      ans.push(node.val)
      inOrderTraverseNode(node.right)
    } 
  }
};