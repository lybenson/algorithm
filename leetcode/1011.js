/**
传送带上的包裹必须在 D 天内从一个港口运送到另一个港口。

传送带上的第 i 个包裹的重量为 weights[i]。每一天，我们都会按给出重量的顺序往传送带上装载包裹。我们装载的重量不会超过船的最大运载重量。

返回能在 D 天内将传送带上的所有包裹送达的船的最低运载能力。
 */
/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function(weights, D) {
  let min = Math.max(...weights)
  let max = weights.reduce((pre, cur) => {
    return pre + cur
  }, 0)

  while (min < max) {
    let mid = Math.floor((min + max) / 2)

    let days = 1
    let high = 0
    for (const weight of weights) {
      if (high + weight > mid) {
        days++
        high = 0
      }
      high += weight
    }
    if (days <= D) {
      max = mid
    } else {
      min = mid + 1
    }
  }
  return min
}
