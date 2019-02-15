/**
 * 统计所有小于非负整数 n 的质数的数量。
 */

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  if (n < 3) return 0

  let arr = new Array(n).fill(1)
  arr[0] = arr[1] = 0

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (!arr[i]) continue
    for (let j = i * i; j < n; j+=i) {
      arr[j] = 0
    }
  }

  let ans = 0
  for (let index = 0; index < arr.length; index++) {
    if (arr[i] === 1) {
      ++ans
    }
  }
  return ans
};
