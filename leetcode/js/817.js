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
  let ans = 0
  while (head) {
    if (G.indexOf(head.val) !== -1 && (!head.next || G.indexOf(head.next.val) === -1)) {
      ans++
      console.log(!head.next ? 'true': 'false')
    }
    head = head.next
  }
  return ans
}

function ListNode(val) {
  this.val = val;
  this.next = null;
} 

