/**
给定一个整数数组 A，以及一个整数 target 作为目标值，返回满足 i < j < k 且 A[i] + A[j] + A[k] == target 的元组 i, j, k 的数量。

由于结果会非常大，请返回 结果除以 10^9 + 7 的余数
 */

/**
 * @param {number[]} A
 * @param {number} target
 * @return {number}
 */

// 1. 统计数组中每个元素出现的次数
// 2. 遍历所有可能的i和j ，k = target - i - j (i, j, k不是下标)
var threeSumMulti = function(A, target) {
  let count = []
  let mod = 1e9 + 7
  A.forEach(num => {
    count[num] = count[num] ? ++count[num] : 1
  })
  let ans = 0
  for (let i = 0; i <= target; ++i) {
    console.log(count[i])
    if (!count[i]) continue
    for (let j = i; j <= target; ++j) {
      if (!count[j]) continue
      let k = target - i - j
      if (!count[k] || k < j) {
        continue
      }
      if (i == j && j == k) {
        ans += (count[i] - 2) * (count[i] - 1) * count[i] / 6
      } else if (i == j && j != k) {
        ans += count[i] * (count[i] - 1) / 2 * count[k]
      } else if (i != j && j == k) {
        ans += count[i] * (count[j] - 1) * count[j] / 2
      } else {
        ans += count[i] * count[j] * count[k]
      }
    }
    
  }
  return ans % mod
};

console.log(threeSumMulti([0,0,0], 0))
