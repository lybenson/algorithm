/**
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

问总共有多少条不同的路径？
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const dp = Array(n).fill(1);
  
  for(let i = 1; i < m; i++) {
    for(let j = 1; j < n; j++) {
      dp[j] = dp[j] + dp[j - 1];
    } 
  }

  return dp[n - 1];
}
