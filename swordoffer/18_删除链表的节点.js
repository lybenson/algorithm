/**
给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。

返回删除后的链表的头节点。
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
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
  if (head.val === val) return head.next
  let dummy = new ListNode(0);
  dummy.next = head
  while(head.next) {
    if (head.next.val === val) {
      if (head.next.next) {
        head.next = head.next.next
      } else {
        head.next = null
      }
    } else {
      head = head.next
    }
  }
  return dummy.next
};
