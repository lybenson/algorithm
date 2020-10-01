/**
输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let ans = new ListNode(0)
  let dummy = ans
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      dummy.next = l1
      l1 = l1.next
    } else {
      dummy.next = l2
      l2 = l2.next
    }
    dummy = dummy.next
  }
  dummy.next = l1 == null ? l2 : l1
  return ans.next
};
