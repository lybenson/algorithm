/**
给定一个非负整数 num。对于 0 ≤ i ≤ num 范围中的每个数字 i ，计算其二进制数中的 1 的数目并将它们作为数组返回。
 */
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  let dp = new Array(num + 1).fill(0)
  for (let i = 1; i <= num; i++) {
    if (i & 1 === 1) {
      dp[i] = dp[i - 1] + 1
    } else {
      dp[i] = dp[i / 2]
    }
  }
  return dp
};
