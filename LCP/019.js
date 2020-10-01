/**
小扣出去秋游，途中收集了一些红叶和黄叶，他利用这些叶子初步整理了一份秋叶收藏集 leaves， 字符串 leaves 仅包含小写字符 r 和 y， 其中字符 r 表示一片红叶，字符 y 表示一片黄叶。
出于美观整齐的考虑，小扣想要将收藏集中树叶的排列调整成「红、黄、红」三部分。每部分树叶数量可以不相等，但均需大于等于 1。每次调整操作，小扣可以将一片红叶替换成黄叶或者将一片黄叶替换成红叶。请问小扣最少需要多少次调整操作才能将秋叶收藏集调整完毕。
 */

/**
题解：dp[i][j] 来表示从第 0 片树叶到第 i 片树叶（[0, i]），并且第 i 片树叶处于状态 j 的时候总共需要的最小操作次数
状态 0，1，2 分别表示ryr

 */

/**
 * @param {string} leaves
 * @return {number}
 */
var minimumOperations = function(leaves) {
  let len = leaves.length
  let dp = []
  dp[0] = []
  dp[1] = []

  dp[0][0] = isYellow(leaves[0])
  dp[0][1] = dp[0][2] = dp[1][2] = Number.MAX_VALUE
  for (let i = 1; i < len; i++) {
    if (!dp[i]) dp.push([])

    dp[i][0] = dp[i - 1][0] + isYellow(leaves[i])
    dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][1]) + isRed(leaves[i])

    if (i > 1) {
      dp[i][2] = Math.min(dp[i - 1][1], dp[i - 1][2]) + isYellow(leaves[i])
    }
  }
  return dp[len - 1][2]

};

function isYellow(ch) {
  return ch === 'y' ? 1 : 0
}
function isRed(ch) {
  return ch === 'r' ? 1 : 0
}

minimumOperations('rrryyyrryyyrr')
