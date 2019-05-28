/**
 * 给定一个正整数，返回它在 Excel 表中相对应的列名称。
 */
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  let dict = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  let ans = ''
  while (n !== 0) {
    n--
    let c = n % 26
    ans = dict[c] + ans
    n = ~~(n / 26)
  }
  return ans
};