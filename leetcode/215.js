/**
 * 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// function swap(nums, i, j) {
//   const tmp = nums[i];
//   nums[i] = nums[j];
//   nums[j] = tmp;
// }

// function partition(nums, low, high) {
//   const pivot = nums[high];

//   let middle = low;
//   for (let i = low; i < high; i++) {
//     if (nums[i] > pivot) {
//       swap(nums, i, middle);
//       middle += 1;
//     }
//   }

//   swap(nums, middle, high);

//   return middle;
// }

// function helper(nums, low, high, k) {
//   const m = partition(nums, low, high);
//   if (m === k) {
//     return nums[m];
//   } else if (m < k) {
//     return helper(nums, m + 1, high, k);
//   } else {
//     return helper(nums, low, m - 1, k);
//   }
// }
// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// var findKthLargest = function (nums, k) {
//   return helper(nums, 0, nums.length - 1, k - 1);
// }


// --------------------maxheap--------------------

// function swap (arr, i, j) {
//   const temp = arr[i]
//   arr[i] = arr[j]
//   arr[j] = temp
// }

// function heapify (arr, n, i) {
//   if (i >= n) return
//   const left_index = 2 * i + 1
//   const right_index = 2 * i + 2

//   let max_index = i
//   if (left_index < n && arr[max_index] < arr[left_index]) {
//     max_index = left_index
//   }
//   if (right_index < n && arr[max_index] < arr[right_index]) {
//     max_index = right_index
//   }
//   // console.log('max-index=' + max_index);
  
//   if (max_index !== i) {
//     swap(arr, i, max_index)
//     heapify(arr, n, max_index)
//   }
// }

// function buildHeap (array) {
//   let length = array.length
//   let lastIndex = length - 1
//   let parent = ~~((lastIndex - 1) / 2)

//   for (let i = parent; i >= 0; i--) {
//     heapify(array, length, i)
//   }
// }

// function heap_sort (array, n) {
//   buildHeap(array, n)

//   for (let i = n - 1; i >= 0; i--) {
//     console.log(array)
//     swap(array, i, 0)
//     console.log(array);
//     console.log('----')
//     heapify(array, i, 0)
//   }
// }

// var findKthLargest = function(nums, k) {
//   // buildHeap(nums)
//   // heapify(nums, nums.length, 0)
//   heap_sort(nums, nums.length)
//   console.log(nums)
//   // for (let i = 0; i < k - 1; i++) {
//   //   nums.shift()

//   //   heap_sort(nums, nums.length)
//   // }

//   // console.log(nums)
//   // return nums[0]
// };

// findKthLargest([5,2,4,1,3,6,0], 2)

var findKthLargest = function(nums, k) {
  let minHeap = nums.slice(0, k)
  console.log(minHeap)
  buildHeap(minHeap)

  console.log(minHeap)

  for (let i = k; i < nums.length; i++) {
    if (minHeap[0] < nums[i]) {
      minHeap[0] = nums[i]
      heapify(minHeap, k, 0)
    }
  }
  
  return minHeap[0]
}

// 假设某一元素的索引是index
// 则其父节点的索引为 (index - 1) / 2
// 左节点的索引为 2 * index + 1
// 右节点的索引为 2 * index + 2
function buildHeap (array) {
  let len = array.length
  let lastIndex = len - 1

  let parentIndex = ~~((lastIndex - 1) / 2)
  for (let i = parentIndex; i >= 0; i-- ) {
    heapify(array, len, i)
  }
}

function heapify (array, length, index) {
  let leftIndex = 2 * index + 1
  let rightIndex = 2 * index + 2

  let min = index
  if (leftIndex < length && array[leftIndex] < array[min]) min = leftIndex
  if (rightIndex < length && array[rightIndex] < array[min]) min = rightIndex

  if (min !== index) {
    swap(array, min, index)

    heapify(array, length, min)
  }
}

function swap (arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

let res = findKthLargest([7,6,5,4,3,2,1],5)
console.log(res);
