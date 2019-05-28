/**
给定一个非负整数数组和一个整数 m，你需要将这个数组分成 m 个非空的连续子数组。设计一个算法使得这 m 个子数组各自和的最大值最小。

注意:
数组长度 n 满足以下条件:

1 ≤ n ≤ 1000
1 ≤ m ≤ min(50, n)
 */
/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
  //动态规划
  let len = nums.length
  let dp = []
  let maxArr = [0]
  nums.forEach((num, index) => {
    maxArr[index + 1] = maxArr[index] + num
  })
  for(let i = 0; i <= m; i++) {
    dp[i] = []
    for(let j = 0; j <= len; j++) {
      dp[i][j] = maxArr[maxArr.length-1]
    }
  }
  dp[0][0]=0
  for(let i = 1; i <= m; i++) {
    for(let j = 1; j <= len; j++) {
      for(let k = i - 1; k < j; k++) {
        let value = Math.max(dp[i-1][k], maxArr[j] - maxArr[k])
        dp[i][j] = Math.min(dp[i][j], value)
      }
    }
  }
  console.log(dp)
  return dp[m][len]
}
splitArray([7,2,5,10,8], 2)
