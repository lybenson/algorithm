/**
给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  if (!nums || nums.length < 4) {
    return nums
  }
  nums.sort((a, b) => a - b)
  let ans = []
  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] == nums[j - 1]) continue
      let low = j + 1
      let high = nums.length - 1
      while (low < high) {
        let sum = nums[i] + nums[j] + nums[low] + nums[high]
        if (sum == target) {
          ans.push([nums[i], nums[j], nums[low], nums[high]])
          while (low < high && nums[low] == nums[low + 1]) low++
          while (low < high && nums[high] == nums[high - 1]) high--
          low++
          high++
        } else if (sum < target) {
          low++
        } else {
          high--
        }
      }
    }
  }
  return ans
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0))

