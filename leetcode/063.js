/**
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
 */
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  if (!obstacleGrid || obstacleGrid.length === 0) return 0
  let n = obstacleGrid.length
  let m = obstacleGrid[0].length
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (obstacleGrid[i][j] == 1) {
        obstacleGrid[i][j] = 0
      } else {
        if (i == 0 && j == 0) {
          obstacleGrid[i][j] = 1
        } else if (i == 0) {
          obstacleGrid[i][j] = obstacleGrid[i][j - 1]
        } else if (j == 0) {
          obstacleGrid[i][j] = obstacleGrid[i - 1][j]
        } else {
          obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1]
        }
      }
    }
  }
  return obstacleGrid[n - 1][m - 1]
}
