/**
 * 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  let dummy = new ListNode(0)
  dummy.next = head
  let pre = dummy
  for(let i = 1; i < m; i++){
    pre = pre.next
  }
  head = pre.next
  for (let i = m; i < n; i++) {
    let next = head.next
    head.next = next.next
    next.next = pre.next
    pre.next = next
  }
  return dummy.next
};
