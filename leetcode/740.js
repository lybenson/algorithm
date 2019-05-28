/**
 * 给定一个整数数组 nums ，你可以对它进行一些操作。

每次操作中，选择任意一个 nums[i] ，删除它并获得 nums[i] 的点数。之后，你必须删除每个等于 nums[i] - 1 或 nums[i] + 1 的元素。

开始你拥有 0 个点数。返回你能通过这些操作获得的最大点数。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
  if (nums.length === 0) return 0
  nums = nums.sort((a, b) => a - b)

  let min = nums[0]
  let max = nums[nums.length - 1]
  let points = new Array(max - min + 1).fill(0)
  for (const num of nums) {
    points[num - min] += num
  }
  return getAnswer(points)

  function getAnswer (nums) {
    let dp1 = 0
    let dp2 = 0
    for (let i = 0; i < nums.length; i++) {
      let dp = Math.max(dp2 + nums[i], dp1)
      dp2 = dp1
      dp1 = dp
    }
    return dp1
  }
};
