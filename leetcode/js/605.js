/**
 * 假设你有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花卉不能种植在相邻的地块上，它们会争夺水源，两者都会死去。

给定一个花坛（表示为一个数组包含0和1，其中0表示没种植花，1表示种植了花），和一个数 n 。能否在不打破种植规则的情况下种入 n 朵花？能则返回True，不能则返回False。
 */
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let len = flowerbed.length
  if (len === 1 && flowerbed[0] === 0 && n === 1) return true
  let ans = 0
  let empty_num = 0
  for (let i = 0; i < len; i++) {
    let v = flowerbed[i]
    if (v === 0) {
      empty_num++
      if (empty_num === 3) {
        ans++
        empty_num = 1
      }
      if ((i === 1 || i === len - 1) && empty_num >= 2) {
        ans++
        empty_num = 1
      }
    } else {
      empty_num = 0
    }
  }
  return ans === n
};