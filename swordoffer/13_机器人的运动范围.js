/**
地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？
 */
var movingCount = function(m, n, k) {
  let board = []
  for (let i = 0; i < m; i ++) {
    let arr =  new Array(n).fill(0)
    board.push(arr)
  }

  dfs(0, 0)

  let ans = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) ans++
    }
  }
  return ans

  function dfs (x, y) {
    let value = getSum(x) + getSum(y)
    if (x < 0 || x >= m || y < 0 || y >= n ||  board[x][y] === 1 || value > k) {
      return
    }
    board[x][y] = 1
    dfs(x - 1, y)
    dfs(x + 1, y)
    dfs(x, y - 1)
    dfs(x, y + 1)
  }
};

function getSum (num) {
  let sum = 0
  while(num !== 0) {
    sum += num % 10
    num = ~~(num / 10)
  }
  return sum
}