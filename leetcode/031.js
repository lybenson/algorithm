/**
 * 实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。

如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。

必须原地修改，只允许使用额外常数空间。

以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  if (!nums || nums.length === 0) return nums
  let smallPos = -1
  let len = nums.length
  for (let i = len - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      smallPos = i
      break
    }
  }

  if (smallPos === -1) {
    reverse(0, nums.length - 1)
    return nums
  }

  let largePos = -1
  for (let i = len - 1; i > smallPos; i--) {
    if (nums[i] > nums[smallPos]) {
      largePos = i
      break
    }
  }
  
  swap(smallPos, largePos)
  reverse(smallPos + 1, nums.length - 1)

  return nums

  function reverse (i, j) {
    while (i < j) {
      swap(i, j)
      i++
      j--
    }
  }
  function swap(i, j) {
    let temp = nums[i]
    nums[i++] = nums[j]
    nums[j--] = temp
  }
};
