// 散列表
// 散列是一种常用的数据存储技术，散列后的数据可以快速地插入或取用。散列使用的数据结构叫做散列表。在散列表上插入、删除和取用数据都非常快，但是对于查找操作来说却 效率低下
// 散列表是基于数组进行设计的。数组的长度是预先设定的
// 所有元素根据和该元素对应的键，保存在数组的特定位置
// Key 通过一个固定的算法函数既所谓的哈希函数转换成一个整型数字，然后就将该数字对数组长度进行取余，取余结果就当作数组的下标，将value存储在以该数字为下标的数组空间里, 可能多个数字的取余结果相同，
// 当使用哈希表进行查询的时候，就是再次使用哈希函数将key转换为对应的数组下标，并定位到该空间获取value

function HashTable() {
  this.table = new Array(137) // 数组的长度应为100以上且为质数
  this.simpleHash = simpleHash // 哈希函数(返回可能相同, 导致重复的下标值被覆盖)
  this.betterHash = betterHash // 更好的哈希函数
  this.showDistro = showDistro // 显示散列表中的数据
  this.put = put // 存储数据
  //this.get = get

  function simpleHash (data) {
    let total = 0
    for (let i = 0; i < data.length; ++i) {
      // charCodeAt() 方法可返回指定位置的字符的 Unicode 编码
      total += data.charCodeAt(i)
    }
    console.log('data=' + data + '  total=' + total)
    return total % this.table.length
  }
  function betterHash(string, arr) {
    const H = 37;
    var total = 0;
    for (var i = 0; i < string.length; ++i) {
       total += H * total + string.charCodeAt(i);
    }
    total = total % arr.length;
    return parseInt(total);
  }
  function put (data) {
    let pos = this.simpleHash(data);
    this.table[pos] = data;
  }
  function showDistro () {
    let n = 0
    for (let i = 0; i < this.table.length; i++) { 
      if (this.table[i] != undefined) {
        console.log(i + ": " + this.table[i]);
      }
    }
  }
}
let codes = ['David', 'Jennifer', 'Donnie', 'Raymond', 'Cynthia', 'Mike', 'Clayton', 'Danny', 'Jonathan']
let hTable = new HashTable()
for (let i = 0; i < codes.length; ++i) {
  hTable.put(codes[i])
}
hTable.showDistro()
