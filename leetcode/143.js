/**
 * 给定一个单链表 L：L0→L1→…→Ln-1→Ln ，
将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→…

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  if (!head) return
  // find middle node
  let slow = head
  let fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  let l2 = slow.next
  slow.next = null
  let l1 = head

  // reverse l2
  let reversed_l2 = null
  while (l2) {
    let next = l2.next
    l2.next = reversed_l2
    reversed_l2 = l2
    l2 = next
  }

  l2 = reversed_l2
  while (l1 && l2) {
    let next = l1.next
    l1.next = l2
    l2 = l2.next
    l1.next.next = next
    l1 = next
  }
};
