// 冒泡排序
/**
 * 1. 比较相邻的元素。如果第一个比第二个大，就交换他们两个
 * 2. 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对
 * 3. 针对所有的元素重复以上的步骤，除了最后一个
 * 4. 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较
 */
function bubbleSort(arr) {
  console.log(arr);
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j+1]) { // 升序
        var temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp;
        console.log(arr)
      }
    }
  }
  return arr;
}

/**
 * 快速排序
 * 1. 选定一个合适的值
 * 2. 基于这个值，将数组分为两部分，较小的分在左边，较大的分在右边
 * 3. 
 */
function quickSort(arr) {
  
}

var arr = [10, 6, 89, 1, 5, 5, 19];
console.log(bubbleSort(arr))
