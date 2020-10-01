/**
输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。
 */
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {

};


// quick sort
// 4、5、1、6、2、7、3、8
function quickSort (arr, left, right) {
  if (left < right) {
    let base = arr[left]
    let j = left
    for (let i = left + 1; i <= right; i++) {
      if (arr[i] < base) {
        j++
        swap(arr, i, j)
      }
    }
  }
}
function swap (arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
// stack

// binary search

// count sort