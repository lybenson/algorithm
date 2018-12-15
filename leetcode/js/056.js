/**
 * 给出一个区间的集合，请合并所有重叠的区间

输入: [[1,3],[2,6],[8,10],[15,18]]
输出: [[1,6],[8,10],[15,18]]
解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6]

 */

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
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
