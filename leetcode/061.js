/**
 * 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (!head) return null
  let n = 0
  let node = head
  while (node) {
    n++
    if (!node.next) {
      node.next = head
      break
    }
    node = node.next
  }
  k = k % n
  let tmp = null
  while (k++ < n) {
    k === n && (tmp = head)
    head = head.next
  }
  tmp.next = null
  return head
};
