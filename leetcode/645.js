/**
 * 集合 S 包含从1到 n 的整数。不幸的是，因为数据错误，导致集合里面某一个元素复制了成了集合里面的另外一个元素的值，导致集合丢失了一个整数并且有一个元素重复。

给定一个数组 nums 代表了集合 S 发生错误后的结果。你的任务是首先寻找到重复出现的整数，再找到丢失的整数，将它们以数组的形式返回。
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  let len = nums.length
  let ans = []

  for (let i = 0; i < len; i++) {
    let index = Math.abs(num[i]) - 1
    if (nums[index] < 0) {
      ans[0] = index + 1
    } else {
      nums[index] = -nums[index]
    }
  }
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) {
      ans[1] = i + 1
    }
  }
  return ans
};
