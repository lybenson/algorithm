/**
 * 给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。
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
  let dummy = new ListNode(0)
  dummy.next = head
  let slow = dummy
  let fast = head

  while (fast) {
    if (fast.next && fast.next.val == fast.val) {
      let v = fast.val
      while (fast && fast.val === v) {
        fast = fast.next
      } 
    } else {
      slow.next = fast
      slow = fast
      fast = fast.next
    }
  }
  slow.next = fast
  return dummy.next
};
