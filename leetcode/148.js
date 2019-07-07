/**
在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。
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
var sortList = function(head) {
  if (!head || !head.next) 
    return head

  let nodes = []
  while (head) {
    let node = new ListNode(head.val)
    nodes.push(node)
    head = head.next
  }
  nodes.sort(function(a, b) {
    return a.val - b.val
  })
  let len = nodes.length
  for (let i = 0; i < len - 1; i++)
    nodes[i].next = nodes[i + 1]

  return nodes[0]
}
