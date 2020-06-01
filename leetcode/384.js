/**
 * 打乱一个没有重复元素的数组
 */

/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.nums = nums
};

/**
* Resets the array to its original configuration and return it.
* @return {number[]}
*/
Solution.prototype.reset = function() {
  return this.nums
};

/**
* Returns a random shuffling of the array.
* @return {number[]}
*/
Solution.prototype.shuffle = function() {
  let nums = [...this.nums]
  
  for(let i = 0;i < nums.length; i++){
    let index = Math.floor((i + 1) * Math.random())
    let temp = nums[i]
    nums[i] = nums[index]
    nums[index] = temp
  }
  return nums
};
