

// 顺序查找
function seqSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (arr[i] == value) {
      return i
    }
  }
  return -1

  // return arr.indexOf(value)
}

// 二分查找（数组是已排序好的, 假设是从小到大的）
function binSearch(array, value) {
  let low = 0
  let high = array.length - 1

  while (low <= high) {
    // 取中间值索引
    let mid = parseInt((high + low) / 2)
    // 中间值等于要查找的值,则返回.
    if (array[mid] == value) {
      return mid
    } else if (array[mid] > value) { // 中间值大于要查找的值, 则查找数组前半部分
      high = mid - 1
    } else if (array[mid] < value) { // 中间值大于要查找的值, 则查找数组后半部分
      low = mid + 1
    } else {
      return -1
    }
  }
  return -1
}

// 二分查找: 递归算法
function binSearchRecu(array, value, low, high) {
  if (low > high) {
    return -1
  }
  let mid = parseInt((high + low) / 2)
  // console.log(array[mid])
  if (array[mid] == value) {
    return mid
  } else if (array[mid] > value) {
    return binSearchRecu(array, value, low, mid - 1)
  } else if (array[mid] < value) {
    console.log(`继续搜索${mid + 1}——${high}`)
    return binSearchRecu(array, value, mid + 1, high)
  }
}

let arr1 = [10, 100, 33, 55, 60, 89];
var arr2 = [1, 2, 3, 4, 5, 6, 10];
// console.log(seqSearch(arr1, 10))
// console.log(binSearch(arr2, 100))
binSearchRecu(arr2, 4, 0, arr2.length - 1)
console.log(binSearchRecu(arr2, 10, 0, arr2.length -1))