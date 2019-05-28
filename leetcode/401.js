/**
 * 二进制手表顶部有 4 个 LED 代表小时（0-11），底部的 6 个 LED 代表分钟（0-59）。

每个 LED 代表一个 0 或 1，最低位在右侧。
给定一个非负整数 n 代表当前 LED 亮着的数量，返回所有可能的时间。
 */
/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
  let hours = [1, 2, 4, 8]
  let minutes = [1, 2, 4, 8, 16, 32]
  let ans = []

  dfs(num, 0, 0, 0, 0)

  function dfs(left, a, b, hoursTotal, minutesTotal) {
    if (hoursTotal >= 12 || minutesTotal >= 60)
      return

    if (left === 0) {
      let str = hoursTotal + ":";
      str += minutesTotal < 10 ? '0' + minutesTotal : minutesTotal
      ans.push(str)
      return
    }
    for (let i = a; i < 4; i++) {
      dfs(left - 1, i + 1, b, hoursTotal + hours[i], minutesTotal)
    }
    for (let i = b; i < 6; i++) {
      dfs(left - 1, a, i + 1, hoursTotal, minutesTotal + minutes[i])
    }
  }
  return Array.from(new Set(ans))
};
