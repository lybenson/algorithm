/**
 * 给定一个单链表，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  if (!head) return null
  if (!head.next) return new TreeNode(head.val)
  let slow = head
  let fast = head
  let pre = null
  while (fast && fast.next) {
    fast = fast.next.next
    pre = slow
    slow = slow.next
  }
  pre.next = null
  let root = new TreeNode(slow.val)
  root.left = sortedListToBST(head)
  root.right = sortedListToBST(slow.next)

  return root
};
