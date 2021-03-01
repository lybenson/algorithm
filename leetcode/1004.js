/**
 * 给定一个由若干 0 和 1 组成的数组 A，我们最多可以将 K 个值从 0 变成 1 。

返回仅包含 1 的最长（连续）子数组的长度。
 */

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
  let left = 0
  let right = 0
  let zeroCount = 0
  let ans = 0
  for (right = 0; right < A.length; right++) {
    if (A[right] === 0) zeroCount++
    while (zeroCount > K) {
      if (A[left++] === 0) {
        zeroCount--
      }
    }
    ans = Math.max(ans, right - left + 1)
  }
  return ans
};
