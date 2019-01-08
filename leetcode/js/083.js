/**
给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let node = head
  while (node && node.next) {
    if (node.val === node.next.val) {
      node.next = node.next.next
    } else {
      node = node.next;
    }
  }

  return head;
}
