/**
 * 给出 N 名运动员的成绩，找出他们的相对名次并授予前三名对应的奖牌。前三名运动员将会被分别授予 “金牌”，“银牌” 和“ 铜牌”（"Gold Medal", "Silver Medal", "Bronze Medal"）。

(注：分数越高的选手，排名越靠前。)
 */
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
  let originNums = [...nums]
  nums = nums.sort((a, b) => b - a)
  let ans = []
  
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (i === 0) map.set(num, 'Gold Medal')
    else if (i === 1) map.set(num, 'Silver Medal')
    else if (i === 2) map.set(num, 'Bronze Medal')
    else map.set(num, String(i + 1))
  }
  originNums.forEach(num => {
    ans.push(map.get(num))
  })
  return ans
};