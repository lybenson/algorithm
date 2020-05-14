/**
 * 给定一个非负整数数组，你最初位于数组的第一个位置。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

你的目标是使用最少的跳跃次数到达数组的最后一个位置。
 */
var jump = function(nums) {
  let len = nums.length
  let position = 0 
  let step_num = 0
  let end = 0
  for (let i = 0; i < len - 1; i++) {
    position = Math.max(position, i + nums[i])
    if (i === end) {
      end = position
      step_num += 1
    }
  }
  return step_num
};

