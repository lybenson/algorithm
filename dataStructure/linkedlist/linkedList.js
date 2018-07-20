// 链表
// 链表是由一组节点组成的集合。每个节点都使用一个对象的引用指向它的后继。指向另一 个节点的引用叫做链

function Node (element) {
  this.element = element
  this.next = null
}

function LinkedList () {
  this.head = new Node('head')
  this.find = find // 根据值查找节点
  this.insertAfter = insertAfter // 已知节点后面插入元素
  this.remove = remove // 删除节点
  this.display = display // 显示节点元素
  this.findPrevious = findPrevious // 寻找元素的前置节点

  function find (item) {
    let currNode = this.head
    while (currNode.element !== item) {
      currNode = currNode.next
    }
    return currNode
  }
  function insertAfter (newElement, item) {
    let newNode = new Node(newElement)
    let current = this.find(item)
    newNode.next = current.next
    current.next = newNode
  }
  function display () {
    let currNode = this.head
    while (currNode.next !== null) {
      console.log(currNode.next.element)
      currNode = currNode.next
    }
  }
  function findPrevious (item) {
    let currNode = this.head
    while ((currNode.next !== null) && currNode.next.element != item) {
      currNode = currNode.next
    }
    return currNode
  }
  function remove (item) {
    let prevNode = this.findPrevious(item)
    if (!prevNode.next) {
      prevNode.next = prevNode.next.next
    }
  }
}

var cities = new LinkedList();
cities.insertAfter("Conway", "head");
cities.insertAfter("Russellville", "Conway");
cities.insertAfter("Alma", "Russellville");
cities.display()

// 双向链表: 节点增加 previous 属性, 指向前一个节点, 头结点的 previous 为 null

// 循环链表: 尾节点的 next 属性指向头结点


// 约瑟夫环问题
// 传说在公元 1 世纪的犹太战争中，犹太历史学家弗拉维奥·约瑟夫斯和他的 40 个同胞 被罗马士兵包围。犹太士兵决定宁可自杀也不做俘虏，于是商量出了一个自杀方案。他 们围成一个圈，从一个人开始，数到第三个人时将第三个人杀死，然后再数，直到杀光 所有人。约瑟夫和另外一个人决定不参加这个疯狂的游戏，他们快速地计算出了两个位 置，站在那里得以幸存。写一段程序将 n 个人围成一圈，并且第 m 个人会被杀掉，计算 一圈人中哪两个人最后会存活。使用循环链表解决该问题

