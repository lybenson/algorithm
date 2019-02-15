/**
 * 给定一个整数数组，判断是否存在重复元素。

如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (map.has(num)) {
      map.set(num, map.get(num)+1)
    } else {
      map.set(num, 1)
    }
  }
  return Array.from(map.values()).filter(num => num >=2 ).length === 0
};
