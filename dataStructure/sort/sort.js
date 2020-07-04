// 冒泡排序
/**
 * 1. 比较相邻的元素。如果第一个比第二个大，就交换他们两个
 * 2. 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对
 * 3. 针对所有的元素重复以上的步骤，除了最后一个
 * 4. 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较
 */
function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    console.log(`第${i}轮， 每轮都会把最大的数放在右边`)
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j+1]) { // 升序
        var temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

/**
 * 快速排序
 * 1. 选定一个合适的值
 * 2. 基于这个值，将数组分为两部分，较小的分在左边，较大的分在右边
 * 3. 不断重复第一步和第二步，直到所有子集只剩下一个元素为止
 */
function quickSort(arr, left, right) {
  if (left < right) {
    // 选取最右边的数字为基准值
    let base = arr[right]
    let i = left - 1
    for (let j = left; j <= right; j++) {
      if (arr[j] <= base) {
        i++
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
    quickSort(arr, left, i - 1);
    quickSort(arr, i + 1, right);
  }
　return arr;
}

// 插入排序

// 选择排序

// 希尔排序

// 堆排序

// 桶排序


var arr = [10, 6, 89, 1, 5, 5, 19];
console.log(`冒泡排序: ${bubbleSort(arr)}`)
console.log(`快速排序: ${quickSort(arr, 0, arr.length - 1)}`)
