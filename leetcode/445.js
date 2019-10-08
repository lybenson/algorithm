/**
 * 给定两个非空链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储单个数字。将这两数相加会返回一个新的链表。
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
var reverseList = function (head) {
  let pre = null
  while (head) {
    let next = head.next
    head.next = pre
    pre = head
    head = next
  }
  return pre
}
var addTwoNumbers = function(l1, l2) {
  l1 = reverseList(l1)
  l2 = reverseList(l2)
  let dummy = new ListNode(0)
  let cur = dummy
  let carryBit = 0
  while(l1 || l2) {
    let n1 = l1 ? l1.val : 0
    let n2 = l2 ? l2.val : 0
    let sum = n1 + n2 + carryBit

    carryBit = sum >= 10 ? 1 : 0
    cur.next = new ListNode(sum % 10)
    cur = cur.next

    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }
  if (carryBit === 1) {
    cur.next = new ListNode(1)
  }
  return reverseList(dummy.next)
};
