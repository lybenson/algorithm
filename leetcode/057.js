/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
  intervals.push(newInterval)
  // 排序
  intervals.sort((a, b) => {
    return a.start - b.start
  })
  
  let ans = []
  intervals.forEach(x => {
    if (ans.length === 0 || x.start > ans[ans.length - 1].end) {
      ans.push(x)
    } else {
      ans[ans.length - 1].end = Math.max(ans[ans.length - 1].end, x.end)
    }
  })
  return ans
}
