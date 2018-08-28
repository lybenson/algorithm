/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let res = 0
  
  for(let i = 1; i < nums.length; i++) {
    if(nums[i] !== nums[res]) {
      res++
      nums[res] = nums[i]
    }
  }
  return res + 1
};
