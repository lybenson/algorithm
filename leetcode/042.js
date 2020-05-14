/**
 * @param {number[]} height
 * @return {number}
 */

//  bruce force
var trap1 = function(height) {
  let length = height.length
  let ans = 0
  for (let i = 0; i < length - 1; i++) {
    let leftArray = height.slice(0, i + 1)
    let maxLeft = Math.max(...leftArray)
    let rightArray = height.slice(i + 1)
    let maxRight = Math.max(...rightArray)
    let res = Math.min(maxLeft, maxRight) - height[i]
    ans += res < 0 ? 0 : res
  }
  return ans
};

// DP
var trap2 = function(height) {
  let length = height.length

  let maxLeft = []
  let maxRight = []
  let ans = 0
  for (let i = 0; i < length; i++) {
    maxLeft[i] = i === 0 ? height[0] : Math.max(maxLeft[i - 1], height[i])
  }
  for (let i = length - 1; i >= 0; i--) {
    maxRight[i] = i === length - 1 ? height[length - 1] : Math.max(maxRight[i + 1], height[i])
  }
  for (let i = 0; i < length; i++) {
    ans += Math.min(maxLeft[i], maxRight[i]) - height[i]
  }
  return ans
};

// Two pointers
var trap3 = function(height) {
  
};