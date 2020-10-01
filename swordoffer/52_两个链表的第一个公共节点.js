/**
 * 输入两个链表，找出它们的第一个公共节点。
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null
  let pA = headA
  let pB = headB
  while (pA !== pB) {
    pA = !pA ? headB : pA.next
    pB = !pB ? headA : pB.next
  }
  return pA
};
