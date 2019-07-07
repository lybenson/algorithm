/**
有一些工作：difficulty[i] 表示第i个工作的难度，profit[i]表示第i个工作的收益。

现在我们有一些工人。worker[i]是第i个工人的能力，即该工人只能完成难度小于等于worker[i]的工作。

每一个工人都最多只能安排一个工作，但是一个工作可以完成多次。

举个例子，如果3个工人都尝试完成一份报酬为1的同样工作，那么总收益为 $3。如果一个工人不能完成任何工作，他的收益为 $0 。

我们能得到的最大收益是多少？
 */

/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
  worker.sort((a, b) => a - b)
  let jobs = []
  let len = difficulty.length
  for (let i = 0; i < len; i++) {
    jobs.push([difficulty[i], profit[i]])
  }
  jobs.sort((a, b) => {
    return a[0] - b[0]
  })
  let ans = 0
  let i = 0
  let best = 0
  worker.forEach(w => {
    while (i < len && w >= jobs[i][0]) {
      best = Math.max(best, jobs[i++][1])
    }
    ans += best
  })
  return ans
}
