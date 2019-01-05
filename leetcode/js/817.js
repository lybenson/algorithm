/**
 * 给定一个链表（链表结点包含一个整型值）的头结点 head。

同时给定列表 G，该列表是上述链表中整型值的一个子集。

返回列表 G 中组件的个数，这里对组件的定义为：链表中一段最长连续结点的值（该值必须在列表 G 中）构成的集合。
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
 * @param {number[]} G
 * @return {number}
 */
var numComponents = function(head, G) {
  let newG = new Set(G)
  let ans = 0
  while (head) {
    if (newG.has(head.val) && (!head.next || !newG.has(head.next.val))) {
      ans++
    }
    head = head.next
  }
  return ans
}

function ListNode(val) {
  this.val = val;
  this.next = null;
} 

