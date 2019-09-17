/**
 * 给你一个整数数组 arr 和一个整数 k。

首先，我们要对该数组进行修改，即把原数组 arr 重复 k 次。

举个例子，如果 arr = [1, 2] 且 k = 3，那么修改后的数组就是 [1, 2, 1, 2, 1, 2]。

然后，请你返回修改后的数组中的最大的子数组之和。

注意，子数组长度可以是 0，在这种情况下它的总和也是 0。

由于 结果可能会很大，所以需要 模（mod） 10^9 + 7 后再返回。 
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var kConcatenationMaxSum = function(arr, k) {
  let mod = 1e9 + 7
  
  function maxSum (r) {
    let sum = 0
    let ans = 0
    for (let i = 0; i < r; i++) {
      for (const num of arr) {
        sum = Math.max(0, sum += num)
        ans = Math.max(ans, sum)
      }
    }
    return ans
  }
  if (k < 3) return maxSum(3) % mod
  let sum = arr.reduce((a, b) => a + b)
  ans1 = maxSum(1)
  ans2 = maxSum(2)

  return Math.max(ans1, ans2 + sum * (k - 2), ans2) % mod
};