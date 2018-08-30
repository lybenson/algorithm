// 请判断一个链表是否为回文链表。

// 示例 1:

// 输入: 1->2
// 输出: false
// 示例 2:

// 输入: 1->2->2->1
// 输出: true

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

var isPalindrome = function(head) {
  let data = []
  while(head) {
    data.push(head.val)
    head = head.next
  }
  for (let i = 0; i < data.length / 2; i++) {
    if (data[i] !== data[data.length - 1 - i]) {
      return false
    }
  }
  return true
};

