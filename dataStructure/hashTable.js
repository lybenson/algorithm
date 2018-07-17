// 散列表
// 散列是一种常用的数据存储技术，散列后的数据可以快速地插入或取用。散列使用的数据 结构叫做散列表。在散列表上插入、删除和取用数据都非常快，但是对于查找操作来说却 效率低下
// 散列表是基于数组进行设计的。数组的长度是预先设定的
// 所有元素根据和该元素对应的键，保存在数组的特定位置
// 

function HashTable() {
  this.table = new Array(137);
  this.simpleHash = simpleHash;
  this.showDistro = showDistro;
  this.put = put;
  //this.get = get;
}
