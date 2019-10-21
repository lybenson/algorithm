/**
 * 给定一个完美二叉树，其所有叶子节点都在同一层，每个父节点都有两个子节点。
 * 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。

初始状态下，所有 next 指针都被设置为 NULL。
 */
/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  return dfs(root)

  function dfs(root) {
    if (!root) return null
    if (root.left) {
      root.left.next = root.right
      if (root.next) {
        root.right.next = root.next.left
      }
    }
    root.left = dfs(root.left)
    root.right = dfs(root.right)

    return root
  }
};
