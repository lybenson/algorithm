/**
给定一个用字符数组表示的 CPU 需要执行的任务列表。其中包含使用大写的 A - Z 字母表示的26 种不同种类的任务。任务可以以任意顺序执行，并且每个任务都可以在 1 个单位时间内执行完。CPU 在任何一个单位时间内都可以执行一个任务，或者在待命状态。

然而，两个相同种类的任务之间必须有长度为 n 的冷却时间，因此至少有连续 n 个单位时间内 CPU 在执行不同的任务，或者在待命状态。

你需要计算完成所有任务所需要的最短时间。
 */
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  let frequence = new Array(26).fill(0)
  tasks.forEach(task => {
    ++frequence[task.charCodeAt() - 65]
  })
  let maxCountTask = Math.max.apply(null, frequence)
  // group nums
  let groupSize = maxCountTask - 1
  let ans = groupSize * (n + 1)
  ans += frequence.filter(size => size === maxCountTask).length

  return Math.max(tasks.length, ans)
}

console.log(leastInterval(["A","A","A","B","B","B"], 2))

