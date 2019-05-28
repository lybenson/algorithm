/**
 * 给定一个 N 叉树，返回其节点值的后序遍历。
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
var postorder = function(root) {
  let ans = []
  function postorder (node) {
    if (!node) return
    for (let i = 0; i < node.children.length; i++) {
      let childrenNode = node.children[i]
      postorder(childrenNode)
    }
    ans.push(node.val)
  }
  postorder(root)
  return ans
};