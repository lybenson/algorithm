// 堆可以看成一颗完全二叉树，用数组表示
// 假设某一元素的索引是index
// 则其父节点的索引为 (index - 1) / 2
// 左节点的索引为 2 * index + 1
// 右节点的索引为 2 * index + 2

function buildHeap (array) {
  let length = array.length
  let lastIndex = length - 1
  let parent = (lastIndex - 1) / 2

  for (let i = parent; i >= 0; i--) {
    heapify(array, length, i)
  }
}

function heapify (array, length, index) {
  if (index >= length) return

  let leftIndex = 2 * index + 1
  let rightIndex = 2 * index + 2
  console.log(leftIndex);
  

  // 假设最大元素的索引为index
  let max = index
  if (leftIndex < length && array[leftIndex] > array[max]) {
    max = leftIndex
  }
  if (rightIndex < length && array[rightIndex] > array[max]) {
    max = rightIndex
  }
  console.log('max=' + max)
  if (max !== index) {
    // 交换数组max和index位置的元素
    let temp = array[max]
    array[max] = array[index]
    array[index] = temp

    // 保证交换之后，该位置的子节点也满足大顶堆
    heapify(array, length, max)
  }
}

function heap_sort (array, length) {
  buildHeap(array, length)

  for (let i = length - 1; i >= 0; i--) {
    let temp = array[0]
    array[0] = array[i]
    array[i] = temp

    heapify(array, i, 0)
  }
}

let arr = [9, 3, 2, 5, 8, 5]
console.log(arr)
heapify(arr, 6, 0)
console.log(arr)

// heap_sort(arr, 4, 0)
// console.log(arr)