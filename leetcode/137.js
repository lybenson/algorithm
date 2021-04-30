/**
给你一个整数数组 nums ，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次 。请你找出并返回那个只出现了一次的元素。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (map.get(num)) map.set(num, map.get(num) + 1)
    else map.set(num, 1)
  }
  for (let key of map.keys()) {
    if (map.get(key) === 1) return key
  }
};
