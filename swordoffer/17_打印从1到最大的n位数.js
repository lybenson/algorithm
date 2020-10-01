/**
输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。
 */
/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
  let max = ''

  for (let i = 0; i < n; i ++) {
    max += '9'
  }

  max = parseInt(max)
  
  let ans = []
  for (let i = 1; i <= max; i++) {
    ans.push(i)
  }
  return ans
};
