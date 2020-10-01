/**
请完成一个函数，输入一个二叉树，该函数输出它的镜像。
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
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
  if (!root) return root
  let left = root.left
  let right = root.right
  
  left && mirrorTree(left)
  right && mirrorTree(right)
  
  root.left = right
  root.right = left
  return root
};
