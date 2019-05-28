/**
给定一个整数数组  nums，求出数组从索引 i 到 j  (i ≤ j) 范围内元素的总和，包含 i,  j 两点。
 */
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.nums = nums
  this.sums = []
  this.sums[0] = nums[0]
  let len = nums.length
  for (let i = 1; i < len; i++) {
    this.sums[i] = this.sums[i - 1] + this.nums[i]
  }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  if (i === 0) return this.sums[j]
  return this.sums[j] - this.sums[i - 1]
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */
