/**
 * 您将获得一个双向链表，除了下一个和前一个指针之外，它还有一个子指针，可能指向单独的双向链表。这些子列表可能有一个或多个自己的子项，依此类推，生成多级数据结构，如下面的示例所示。

扁平化列表，使所有结点出现在单级双链表中。您将获得列表第一级的头部。
 */
/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
  let node = head
  while (node) {
    let child = node.child
    let next = node.next
    if (!child) {
      node = node.next
      continue
    }
    let childTail = child
    while (childTail.next) {
      childTail = childTail.next
    }
    node.child = null
    child.prev = node
    childTail.next = node.next
    if (node.next) node.next.prev = childTail
    node.next = child
    node = node.next
  }
  return head
};
