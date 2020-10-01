/**
从扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是不是连续的。2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
  nums = nums.sort((a, b) => a - b)
  let size = 0
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === 0) size += 1
    else if (nums[i] === nums[i + 1]) return false
  }
  return nums[4] - nums[size] < 5
};
