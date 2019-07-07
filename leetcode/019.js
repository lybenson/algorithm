/**
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if (!head || n === 0) return head
  let fast = head
  let slow = head
  for (let i = 0; i <= n; i++) {
    if (!fast) return slow.next
    fast = fast.next
  }
  while (fast) {
    fast = fast.next
    slow = slow.next
  }
  fast = slow.next
  slow.next = fast.next
  fast.next = null
  return head
};
