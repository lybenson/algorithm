/**
 * 实现 int sqrt(int x) 函数。

计算并返回 x 的平方根，其中 x 是非负整数。

由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。


 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let l = 1
  let r = x
  while(l <= r) {
    let m = ~~(l + (r - l) / 2)
    if (m > x / m) {
      r = m - 1
    } else {
      l = m + 1
    }
  }
  return r
};
