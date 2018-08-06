/**
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例:

输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
说明:

必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。
*/

var moveZeroes1 = function(nums) {
    let nozeroArr = []

    nums.forEach(item => {
      if (item) {
        nozeroArr.push(item)
      }
    })

    nozeroArr.forEach((item, index) => {
      nums[index] = nozeroArr[index]
    })

    for (let i = nozeroArr.length; i < nums.length; i++) {
      nums[i] = 0
    }
    console.log(nums)
};

var moveZeroes2 = function(nums) {
  let k = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      if (i != k) {
        let temp = nums[i]
        nums[i] = nums[k]
        nums[k++] = temp
      } else {
        k++
      }
    }
  }
  console.log(nums)
};

// moveZeroes1([0,9,0,2,12])
moveZeroes2([0,9,0,2,12])

