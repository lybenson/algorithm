/**
 * 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function swap(nums, i, j) {
  const tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
}

function partition(nums, low, high) {
  const pivot = nums[high];

  let middle = low;
  for (let i = low; i < high; i++) {
    if (nums[i] > pivot) {
      swap(nums, i, middle);
      middle += 1;
    }
  }

  swap(nums, middle, high);

  return middle;
}

function helper(nums, low, high, k) {
  const m = partition(nums, low, high);
  if (m === k) {
    return nums[m];
  } else if (m < k) {
    return helper(nums, m + 1, high, k);
  } else {
    return helper(nums, low, m - 1, k);
  }
}
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  return helper(nums, 0, nums.length - 1, k - 1);
}
