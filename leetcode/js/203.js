/**
 * 删除链表中等于给定值 val 的所有节点。
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
var removeElements = function(head, val) {
  let anotherHead = new ListNode(-1)
  anotherHead.next = head
  let node = anotherHead
  while (node.next) {
    if (node.next.val === val) {
      node.next = node.next.next
    } else {
      node = node.next
    }
  }
  return anotherHead.next
};