/**
 * 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (!lists || lists.length === 0) return null
  let values = []
  for (let i = 0; i < lists.length; i++) {
    let node = lists[i]
    while (node) {
      values.push(node.val)
      node = node.next
    }
  }
  values.sort((a, b) => a - b)
  if (values.length === 0) return null

  let head = new ListNode(values[0])
  let node = head
  for (let i = 1; i < values.length; i++) {
    let newNode = new ListNode(values[i])
    node.next = newNode
    node = newNode
  }
  return head
}
