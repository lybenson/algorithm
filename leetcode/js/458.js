/**
 * 有1000只水桶，其中有且只有一桶装的含有毒药，其余装的都是水。它们从外观看起来都一样。如果小猪喝了毒药，它会在15分钟内死去。

问题来了，如果需要你在一小时内，弄清楚哪只水桶含有毒药，你最少需要多少只猪？
 */
/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var islandPerimeter = function(grid) {
  let ans = 0
  for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[i].length; j++){
      if (grid[i][j] === 1) {
        if(i === 0 || grid[i-1][j] !== 1){
          ans += 1
        }
        if(i === grid.length-1 || grid[i+1][j] !== 1){
          ans += 1
        }
        if(j === 0 || grid[i][j-1] !== 1){
          ans += 1
        }
        if(j === grid[i].length-1 || grid[i][j+1] !== 1){
          ans += 1
        }
      }
    }
  }
  return ans
};