/**
 * 根据一棵树的中序遍历与后序遍历构造二叉树。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if (!preorder || !inorder || preorder.length === 0 || inorder.length === 0) return null
  return helper(preorder, inorder, 0, inorder.length - 1, postorder.length - 1)
};

var helper = function (inorder, postorder, in_start, in_end, post_end) {
  if (in_start > in_end || post_end < 0 ) return null
  let root = new TreeNode(postorder[post_end])
  let i = in_start
  while (inorder[i] != postorder[post_end]) {
    i++
  }
  root.left = helper(inorder, postorder, in_start, i - 1, post_end - (in_end - i + 1))
  root.right = helper(inorder, postorder, i + 1, in_end, post_end - 1)
  return root
}
