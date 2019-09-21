/**
 * 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。

k 是一个正整数，它的值小于或等于链表的长度。

如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

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
var reverseKGroup = function(head, k) {
  if (!head) return null
  let dummy = new ListNode(0)
  dummy.next = head
  let prev = dummy
  while (prev) prev = reverse(prev, k)
  
  return dummy.next
};

function reverse (prev, k) {
  let last = prev
  for (let i = 0; i <= k; i++) {
    last = last.next
    if (i != k && !last) return null
  }
  let tail = prev.next
  let curr = prev.next.next
  while (curr != last) {
    let next = curr.next
    curr.next = prev.next
    prev.next = curr
    tail.next = next
    curr = next
  }
  return tail
}

