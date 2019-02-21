/**
 * 你需要采用前序遍历的方式，将一个二叉树转换成一个由括号和整数组成的字符串。

空节点则用一对空括号 "()" 表示。而且你需要省略所有不影响字符串与原始二叉树之间的一对一映射关系的空括号对。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
  let ans = ''
  function preorder (node) {
    if (!node) return
    ans += node.val
    if (!node.left && node.right) ans += '()'
    if (node.left) {
      ans += '('
      preorder(node.left)
      ans += ')'
    }
    if (node.right) {
      ans += '('
      preorder(node.right)
      ans += ')'
    }
  }
  preorder(t)
  return ans
};