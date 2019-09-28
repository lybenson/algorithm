/**
 * 给定一个链表和一个特定值 x，对链表进行分隔，使得所有小于 x 的节点都在大于或等于 x 的节点之前。

你应当保留两个分区中每个节点的初始相对位置
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  let before_head = new ListNode(0)
  let before = before_head
  let after_head = new ListNode(0)
  let after = after_head

  while (head) {
    if (head.val < x) {
      before.next = head
      before = before.next
    } else {
      after.next = head
      after = after.next
    }
    head = head.next
  }
  after.next = null
  before.next = after_head.next
  return before_head.next
};
