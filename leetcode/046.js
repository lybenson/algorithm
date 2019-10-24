/**
 * 给定一个没有重复数字的序列，返回其所有可能的全排列 
 */
/**
* @param {number[]} nums
* @return {number[][]}
*/
var permute = function(nums) {
  const list = [];
  backtrack(list, [], nums)
  return list
}

function backtrack(list, tempList, nums) {
  if (tempList.length === nums.length) {
    return list.push([...tempList])
  }
  for(let i = 0; i < nums.length; i++) {
    if (tempList.includes(nums[i])) continue
    tempList.push(nums[i])
    backtrack(list, tempList, nums)
    tempList.pop()
  }
}

