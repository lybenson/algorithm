/**
 * Given an n-ary tree, return the preorder traversal of its nodes' values.

 */
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  let ans = []
  function preorder (node) {
    if (!node) return
    ans.push(node.val)
    for (let i = 0; i < node.children.length; i++) {
      let childrenNode = node.children[i]
      preorder(childrenNode)
    }
  }
  preorder(root)
  return ans
};
