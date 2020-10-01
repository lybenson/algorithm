/**
写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项
 */
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  let mod = 1e9 + 7
  let ans = []
  ans[0] = 0
  ans[1] = 1

  for (let i = 2; i <= n; i++) {
    ans[i] = (ans[i - 1] + ans[i - 2]) % mod
  }
  return ans[n] % mod
};
