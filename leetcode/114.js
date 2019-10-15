/**
 * 给定一个二叉树，原地将它展开为链表。
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
let last = null
var flatten = function(root) {
  if (!root) return
  last = root
  flatten(root.left)
  if (root !== last) {
    last.right = root.right
    root.right = root.left
    root.left = null
    flatten(last.right)
  } else {
    flatten(root.right)
  }
};
