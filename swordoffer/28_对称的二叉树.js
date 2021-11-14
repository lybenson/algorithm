/**
请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  return isMirror(root, root)
  function isMirror (root1, root2) {
    if (!root1 && !root2) return true
    if (!root1 || !root2) return false
    return (root1.val === root2.val) && isMirror(root1.left, root2.right) && isMirror(root1.right, root2.left)
  }
}
