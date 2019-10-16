/**
 * 根据一棵树的前序遍历与中序遍历构造二叉树。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (!preorder || !inorder || preorder.length === 0 || inorder.length === 0) return null
  return helper(preorder, inorder, 0, 0, preorder.length - 1)
};

var helper = function (preorder, inorder, pre_start, in_start, in_end) {
  if (pre_start > preorder.length || in_start > in_end) return null
  let current = new TreeNode(preorder[pre_start])
  let i = in_start
  while (i <= in_end) {
    if (inorder[i] === preorder[pre_start]) break
    i++
  }
  current.left = helper(preorder, inorder, pre_start + 1, in_start, i - 1)
  current.right = helper(preorder, inorder, pre_start + (i - in_start + 1), i + 1, in_end)
  return current
}
