/**
 * 给定一个链表，每个节点包含一个额外增加的随机指针，该指针可以指向链表中的任何节点或空节点。

要求返回这个链表的深拷贝。 
 */
/**
 * Definition for singly-linked list with a random pointer.
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
  if (!head) return null
  let map = new Map()
  let cur = head
  while(cur) {
    map.set(cur, new Node(cur.val, null, null))
    cur = cur.next
  }
  cur = head
  while(cur) {
    map.get(cur).next = cur.next ? map.get(cur.next) : null
    map.get(cur).random = cur.random ? map.get(cur.random) : null
    cur = cur.next
  }
  return map.get(head)
};
